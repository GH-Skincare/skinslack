const singleProductRouter = require('express').Router()
const {Product} = require('../db/models')

//get single product
singleProductRouter.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.productId)
    res.json(product)
  } catch (error) {
    next(error)
  }
})

module.exports = singleProductRouter
