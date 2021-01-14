const allProductsRouter = require('express').Router()
const {Product} = require('../db/models')

allProductsRouter.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})

module.exports = allProductsRouter