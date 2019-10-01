module.exports = (sequelize, DataTypes) => {

    const Transaction = sequelize.define('transaction', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        userId: {
            type: DataTypes.UUID,
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
