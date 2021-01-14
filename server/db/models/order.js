//order model-created associations with team

const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  validate: {
    isActive: {
      //true or false
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    },
    default: 0
  }
})

module.exports = Order
