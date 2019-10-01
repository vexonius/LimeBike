module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: { isEmail: true }
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING
        },
        adress: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        country: {
            type: DataTypes.STRING
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    }, {
            modelName: 'user',
            timestamps: true
        });

    User.associate = function (models) {
        User.hasMany(models.transaction, { as: 'transactions' })
    }

    return User;

};