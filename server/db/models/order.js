const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  isActive: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

module.exports = Order
