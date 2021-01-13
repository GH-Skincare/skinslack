const Sequelize = require('sequelize')
const db = require('../db')

const CartItems = db.define('cartItems', {
  id: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  //is this supposed to be product name?
  //what is the difference with productID and cartID and ID?
  productId: {
    type: Sequelize.STRING
  },
  cartId: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.DECIMAL
  },
  //implemented a min of 0 for inventory (no negative items)
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  //is this the name/info of the product?
  content: {
    type: Sequelize.TEXT
  }
})

module.exports = CartItems
