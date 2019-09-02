const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const TransactionItem = sequelize.define('transactionItem', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        amount: {
            type: Sequelize.INTEGER,
        },
    }, {
            modelName: 'transactionItem',
            timestamps: true
        });

    TransactionItem.associate = function (models) {
        TransactionItem.hasMany(models.Bicycle, { as: 'products' });
    };

    return TransactionItem;

};