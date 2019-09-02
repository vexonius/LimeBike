const express = require("express");
const passport = require('passport');
const jwtUtils = require('./utils/jtwutils');
const helmet = require('helmet');
const cors = require('cors');

const controller = require('./controllers/controller');
const usersController = require('./controllers/usersController');

const router = express.Router();
const PORT = 8081 || process.env.PORT;

const app = express();

passport.use(jwtUtils.strategy);

app.use(passport.initialize());
app.use(express.json());
app.use(helmet());
app.use(cors());

app.get('/', async (req, res) => {
  res.send('hello world');
});

app.post('/register', controller.register);
app.post('/login', controller.login);

app.get('/products', controller.getAllProducts);

 app.get('/users/:id/info', passport.authenticate('jwt', { session: false }), usersController.getUserInfo);
 app.post('/users/:id/info', passport.authenticate('jwt', { session: false }), usersController.updateUserInfo);


app.get('/users/:id/transactions', passport.authenticate('jwt', { session: false }), usersController.getAllUserTransactions);
app.get('/users/:id/transactions/:transactionId', passport.authenticate('jwt', { session: false }), usersController.getUserTransaction);
app.post('/users/:id/transactions', passport.authenticate('jwt', { session: false }), usersController.createNewTransaction);

app.listen(PORT, () => console.log(`Started listening on port ${PORT}`));
