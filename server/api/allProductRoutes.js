const allProductsRouter = require('express').Router()
const {Product, OrderItem} = require('../db/models')

allProductsRouter.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})

allProductsRouter.post('/', async (req, res, next) => {
  try {
    const newProduct = await Product.create({
      name: req.body.name,
      summary: req.body.summary,
      description: req.body.description,
      price: req.body.price,
      imageUrl: req.body.imageUrl,
      inventory: req.body.inventory
    })
    res.json(newProduct)
  } catch (err) {
    next(err)
  }
})

allProductsRouter.delete('/:productId', async (req, res, next) => {
  try {
    await OrderItem.destroy({
      where: {
        productId: req.params.productId
      }
    })
    await Product.destroy({
      where: {
        id: req.params.productId
      }
    })
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

module.exports = allProductsRouter
