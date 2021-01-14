const User = require('./user')
const Product = require('./product')
const Sequelize = require('sequelize')
const db = require('../db')
const Order = require('./order')

const OrderItem = db.define('OrderItem', {
  role: Sequelize.STRING
})

Order.hasMany(User)
User.belongsTo(Order)
Order.belongsToMany(Product, {through: OrderItem})
Product.belongsToMany(User, {through: OrderItem})

module.exports = {
  User,
  Product,
  Order
}
