const Sequelize = require('sequelize')
const db = require('../db')

const CartItems = db.define('cartItems', {
  // productId: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false
  // },
  // cartId: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false
  // },
  // price: {
  //   type: Sequelize.FLOAT,
  //   allowNull: false,
  //   default: 0
  // },
  //implemented a min of 0 for inventory (no negative items)
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    },
    default: 0
  }
  //is this the name/info of the product?
  // content: {
  //   type: Sequelize.TEXT
  // }
})

module.exports = CartItems
