const Sequelize = require('sequelize');

module.exports = (sequelize) => {

    const Bicycle = sequelize.define('bicycle', {
        serialNumber: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        photoUrl: {
            type: Sequelize.STRING
        },
        year: {
            type: Sequelize.INTEGER
        },
        price: {
            type: Sequelize.DECIMAL(10, 2),
        },
        category: {
            type: Sequelize.STRING
        }
    }, {
            modelName: 'bicycle',
            timestamps: true
        });

    return Bicycle;
};