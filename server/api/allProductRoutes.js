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
    console.log(req.body, `*******`)
    const newProduct = await Product.create(req.body)
    res.json(newProduct)
  } catch (err) {
    next(err)
  }
})

allProductsRouter.put('/:productId', async (req, res, next) => {
  try {
    const {productId} = req.params
    let products = []
    if (req.body.products !== null) {
      products = req.body.products
    }

    await Product.update(req.body, {
      where: {
        id: productId
      }
    })
    res.sendStatus(204)
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
