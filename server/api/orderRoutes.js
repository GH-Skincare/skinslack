const orderRouter = require('express').Router()
const {Order, OrderItem, Product} = require('../db/models')

orderRouter.get('/users/:userId/type/:type', async function(req, res, next) {
  try {
    let isActive
    if (req.params.type === 'active') {
      isActive = true
    } else {
      isActive = false
    }
    const orders = await Order.findAll({
      where: {isActive: isActive, userId: req.params.userId},
      // eager loading- we want to load orderItems and products
      include: {
        model: OrderItem,
        include: Product
      }
    })
    res.send(orders)
  } catch (err) {
    next(err)
  }
})

orderRouter.put('/:orderId', async function(req, res, next) {
  try {
    await Order.update(req.body, {
      where: {
        id: req.params.orderId
      }
    })
    res.send(200)
  } catch (err) {
    next(err)
  }
})

module.exports = orderRouter
