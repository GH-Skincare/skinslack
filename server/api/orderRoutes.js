const orderRouter = require('express').Router()
const {Order, OrderItem} = require('../db/models')

orderRouter.get('/users/:userId', async function(req, res, next) {
  try {
    const orders = await Order.findAll({
      where: {isActive: false, userId: req.params.userId}
    })
    res.send(orders)
  } catch (err) {
    next(err)
  }
})

module.exports = orderRouter
