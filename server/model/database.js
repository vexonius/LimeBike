const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(module.filename)
const config = require('./../config/config').development

var db = {}

let sequelize = new Sequelize(config)

fs.readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

Promise.all([
  db.user.sync(),
  db.bicycle.sync(),
  db.transaction.sync(),
  db.transactionItem.sync(),
])
  .then(() => {
    console.log('All tables created successfully')
  })
  .catch(err => console.error('Something went wrong: ' + err))

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => console.error('Unable to connect to the database:', err))

module.exports = db
