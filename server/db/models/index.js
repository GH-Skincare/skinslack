const User = require('./user')
const Product = require('./product')
const Sequelize = require('sequelize')
const db = require('../db')
const Order = require('./order')
const OrderItem = require('./orderItem')

// const OrderItem = db.define('OrderItem', {
//   role: Sequelize.STRING,
// })

User.hasMany(Order)
Order.belongsTo(User)

Order.hasMany(OrderItem)
OrderItem.belongsTo(Order)

OrderItem.belongsTo(Product)

module.exports = {
  User,
  Product,
  Order,
  OrderItem
}
