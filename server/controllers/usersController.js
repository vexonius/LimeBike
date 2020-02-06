const db = require('../model/database')

module.exports = {
  async getUserInfo(req, res) {
    db.user
      .findOne({ where: { id: req.params.id } })
      .then(user => {
        user.password = undefined
        return res.status(200).json(user)
      })
      .catch(err => {
        console.error(err)
        return res.status(404).json({ msg: 'User not found' })
      })
  },

  async updateUserInfo(req, res) {
    const user = req.body
    db.user
      .update(user, { where: { id: req.params.id }, returning: true })
      .then(obj => {
        console.log('success updating user ' + user.id)
        return res.status(200).json(obj)
      })
      .catch(err => {
        console.error(err)
        return res.status(404).json({ msg: 'User not found' })
      })
  },

  async getAllUserTransactions(req, res) {
    db.transaction
      .findAll({ where: { userId: req.params.id }, include: ['items'] })
      .then(data => {
        return res.status(200).json(data)
      })
      .catch(err => {
        console.error(err)
        return res.status(500).json({ msg: 'Something went wrong' })
      })
  },

  async getUserTransaction(req, res) {
    db.transaction
      .findOne({ where: { id: req.params.id }, include: ['items'] })
      .then(data => {
        return res.status(200).json(data)
      })
      .catch(err => {
        console.error(err)
        return res.status(500).json({ msg: 'Something went wrong' })
      })
  },

  async createNewTransaction(req, res) {
    const transaction = req.body
    let total = parseFloat(transaction.total).toFixed(2)

    db.transaction
      .create({ total: total, userId: transaction.userId })
      .then(t => {
        const items = transaction.items.map(item => {
          item.transactionId = t.id
          return item
        })

        db.transactionItem
          .bulkCreate(items)
          .then(res.status(200).json({ msg: 'Data inserted in db', id: t.id }))
          .catch(err => {
            console.error(err)
            return res.status(500).json({ msg: 'Something went wrong' })
          })
      })
      .catch(err => {
        console.error(err)
        return res.status(500).json({ msg: 'Something went wrong' })
      })
  },
}