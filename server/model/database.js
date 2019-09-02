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

db.sequelize = sequelize;
db.Sequelize = Sequelize;


Promise.all([db.user.sync(), db.bicycle.sync(), db.transaction.sync(), db.transactionItem.sync()])
    .then(() => console.log('All tables created successfully'))
    .catch(err => console.log('Something went wrong'));

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

/* db.bicycle.bulkCreate(
   [
       { name: 'Cinelli Gazzeta', photoUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5bd5b958623167.5a032533b77e6.jpg', year: 2017, price: 18.00, category: 'BASIC' },
       { name: 'Cinelli Zydeco', photoUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b0c9ee58623231.5a03259bafbe1.jpg', year: 2019, price: 18.00, category: 'BASIC' },
       { name: 'Cinelli Supertar Disc', photoUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3821b958611479.5a02d3fbe2fc0.jpg', year: 2018, price: 24.00, category: 'CASUAL' },
       { name: 'Cinelli Superstar Caliper', photoUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6a378f58611619.5a02d55cacd55.jpg', year: 2018, price: 24.00, category: 'CASUAL' },
       { name: 'Cinelli Stratofaster', photoUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/62c17e58453433.59fca274e9ecd.jpg', year: 2019, price: 42.00, category: 'PRO' },
       { name: 'Cinelli Nemo TIG', photoUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3d2c7d58623449.5a0326f369175.jpg', year: 2018, price: 42.00, category: 'PRO' },
       { name: 'Cinelli Nemo TIG Disc', photoUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2af4b658453685.59fca407c19dc.jpg', year: 2017, price: 36.00, category: 'SPORT' },
       { name: 'Cinelli Experience', photoUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/21ba6e58453199.59fca0b95ba1d.jpg', year: 2018, price: 36.00, category: 'SPORT' }

   ]
); */



module.exports = db;