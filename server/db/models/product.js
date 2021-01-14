const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  summary: {
    type: Sequelize.TEXT('tiny')
  },
  description: {
    type: Sequelize.TEXT
  },
  imageUrl: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  inventory: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Product
