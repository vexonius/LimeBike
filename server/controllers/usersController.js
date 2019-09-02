const db = require('./../model/database');
const jwtUtils = require('./../utils/jtwutils');

module.exports = {
    async getUserInfo(req, res) {
        db.user.findOne({ where: { id: req.params.id } }).then(user => {
            user.password = undefined;
            res.status(200).json(user);
        }).catch(err => {
            console.error(err);
            res.status(404).json({ msg: 'User not found' })
        });
    },

    async updateUserInfo(req, res) {
        const user = req.body;
        db.user.update(user, { where: { id: req.params.id }, returning: true }).then((obj) => {
            console.log("success updating user " + user.id);
            res.status(200).json(obj);
        }
        ).catch(err => {
            console.error(err);
            res.status(404).json({ msg: 'User not found' })
        });
    },

    async getUserTransactions(req, res){

    },

    async getUserTransactions(req, res){

    },

    async createNewTransaction(req, res){

    }

};