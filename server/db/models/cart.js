const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  //   id: {
  //     type: Sequelize.INTEGER,
  //     autoIncrement: true,
  //     primaryKey: true,
  //     allowNull: false,
  //   },
})

//is active or not active boolean would rep an active order is a cart

module.exports = Cart
