const Sequelize = require('sequelize');
const config = require('./../config/config.js').development;

var db = {};

let sequelize = new Sequelize(config);

let UserModel = sequelize.import('./User');
let BicycleModel = sequelize.import('./Bicycle');
let TransactionModel = sequelize.import('./Transaction');
let TransactionItemModel = sequelize.import('./TransactionItem');

db.user = UserModel;
db.bicycle = BicycleModel;
db.transaction = TransactionModel;
db.transactionItem = TransactionItemModel;

db.user.associate(db);
db.transaction.associate(db);
db.transactionItem.associate(db);

db.sequelize = sequelize;
db.Sequelize = Sequelize;


Promise.all([db.user.sync(), db.bicycle.sync(), db.transaction.sync(), db.transactionItem.sync()])
    .then(() => { console.log('All tables created successfully') })
    .catch(err => console.log('Something went wrong'));

sequelize.authenticate()
    .then(() => {
        
        console.log('Connection has been established successfully.')
    })
    .catch(err => console.error('Unable to connect to the database:', err));

module.exports = db;