module.exports = (sequelize, DataTypes) => {
  const TransactionItem = sequelize.define(
    "transactionItem",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      amount: {
        type: DataTypes.INTEGER
      },
      bicycleId: {
        type: DataTypes.UUID
      },
      transactionId: {
        type: DataTypes.UUID
      }
    },
    {
      modelName: "transactionItem",
      timestamps: true
    }
  );

  TransactionItem.associate = function(models) {
    TransactionItem.belongsTo(models.transaction, {
      foreignKey: "transactionId",
      as: "item"
    });
    TransactionItem.belongsTo(models.bicycle, {
      foreignKey: "bicycleId",
      as: "bicycle"
    });
  };

  return TransactionItem;
};
