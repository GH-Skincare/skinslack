const singleProductRouter = require('express').Router()
const {Product} = require('../db/models')

//get single product
singleProductRouter.get('/:productId', async (req, res, next) => {
  try {
    console.log(req.params.productId, `i'm in the api!`)
    const product = await Product.findByPk(req.params.productId)
    res.json(product)
  } catch (error) {
    next(error)
  }
})

module.exports = singleProductRouter

//, { include: ['name', 'description', 'imageUrl', 'price']
