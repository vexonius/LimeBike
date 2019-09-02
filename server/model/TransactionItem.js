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
        bicycleId: {
            type: Sequelize.UUID
        },
        transactionId: {
            type: Sequelize.UUID
        }
        
    }, {
            modelName: 'transactionItem',
            timestamps: true
        });

    TransactionItem.associate = function (models) {
        TransactionItem.belongsTo(models.transaction, { foreignKey:'transactionId', as: 'item' });
        TransactionItem.belongsTo(models.bicycle, { foreignKey:'bicycleId', as: 'bicycle' });
    };

    return TransactionItem;

};