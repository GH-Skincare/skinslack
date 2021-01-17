const orderRouter = require('express').Router()
const {Order} = require('../db/models')

orderRouter.get('/users/:userId', async function(req, res, next) {
  try {
    const orders = await Order.findAll({
      where: {isActive: false, userId: req.params.userId}
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

module.exports = orderRouter
