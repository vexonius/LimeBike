module.exports = app => {
  const controller = require('./../controllers/controller')

  app.post('/register', controller.register)
  app.post('/login', controller.login)

  app.get('/products', controller.getAllProducts)
}