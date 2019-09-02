const Sequelize = require('sequelize');

module.exports = (sequelize) => {

    const Transaction = sequelize.define('transaction', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        total: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        userId: {
            type: Sequelize.UUID,
        }
    },
        {
            modelName: 'transaction',
            timestamps: true
        });

    Transaction.associate = function (models) {
        Transaction.hasMany(models.transactionItem, { as: 'items' });
        Transaction.belongsTo(models.user, { foreignKey: 'userId', as: 'user' });
    };

    return Transaction;

};
