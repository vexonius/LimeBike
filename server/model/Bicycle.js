module.exports = (sequelize, Datatypes) => {
  const Bicycle = sequelize.define(
    'bicycle',
    {
      serialNumber: {
        type: Datatypes.UUID,
        defaultValue: Datatypes.UUIDV4,
        primaryKey: true
      },
      name: {
        type: Datatypes.STRING
      },
      description: {
        type: Datatypes.TEXT
      },
      photoUrl: {
        type: Datatypes.TEXT
      },
      year: {
        type: Datatypes.INTEGER
      },
      price: {
        type: Datatypes.DECIMAL(10, 2)
      },
      category: {
        type: Datatypes.STRING
      }
    },
    {
      modelName: 'bicycle',
      timestamps: true
    }
  )

  return Bicycle
}
