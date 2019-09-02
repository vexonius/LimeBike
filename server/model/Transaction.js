const Sequelize = require('sequelize');

module.exports = (sequelize) => {

    const Transaction = sequelize.define('transaction', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        total: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },

    },
        {
            modelName: 'transaction',
            timestamps: true
        });

    Transaction.associate = function (models) {
        Transaction.hasMany(models.TransactionItem, { as: 'items' });
        Transaction.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    };

    return Transaction;

};
