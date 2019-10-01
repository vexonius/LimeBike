
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');
const db = require('../model/database');


const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'sosecretkey';

let strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
    console.log('payload received', jwt_payload);

    db.user.findOne({ where: { id: jwt_payload.id } }).then(user => {
        if (user) {
            next(null, user);
        } else {
            next(null, false);
        }
    })


});

module.exports = {
    jwt: jwt,
    strategy: strategy,
    jwtOptions: jwtOptions
}