const orderItemsRouter = require('express').Router()
const {OrderItem, Order} = require('../db/models')

orderItemsRouter.get('/products/:productId', async function(req, res, next) {
  try {
    const order = Order.findOne({
      where: {isActive: true, userId: req.body.userId}
    })
    if (order === null) {
      res.send({})
      return
    }
    const orderItem = await OrderItem.findOne({
      where: {productId: req.params.productId, orderId: order.id}
    })
    if (order === null) {
      res.send({})
      return
    }
    res.send(orderItem)
  } catch (err) {
    next(err)
  }
})

orderItemsRouter.post('/', async function(req, res, next) {
  try {
    const order = Order.findOrCreate({
      where: {isActive: true, userId: req.body.userId}
    })
    const newItem = await OrderItem.create({
      orderId: order.id,
      productId: req.body.productId,
      quantity: req.body.quantity
    })
    res.send(newItem)
  } catch (err) {
    next(err)
  }
})

orderItemsRouter.put('/:orderItemId', async function(req, res, next) {
  try {
    await OrderItem.update(
      {quantity: req.body.quantity},
      {
        where: {
          id: req.params.orderItemId
        }
      }
    )
    res.send(200)
  } catch (err) {
    next(err)
  }
})

orderItemsRouter.delete('/:orderItemId', async function(req, res, next) {
  try {
    await OrderItem.destroy({
      where: {
        id: req.params.orderItemId
      }
    })
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})

module.exports = orderItemsRouter
