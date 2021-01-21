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

singleProductRouter.put('/:productId', async (req, res, next) => {
  try {
    const {productId} = req.params
    const updatedFields = req.body

    await Product.update(updatedFields, {
      where: {
        id: productId
      }
    })
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

module.exports = singleProductRouter

//, { include: ['name', 'description', 'imageUrl', 'price']
