const orderRouter = require('express').Router()
const {Order, OrderItem, Product} = require('../db/models')

const isAllowed = (req, res, next) => {
  if (req.user === undefined || String(req.user.id) !== req.params.userId) {
    res.send(403)
  } else {
    next()
  }
}

orderRouter.get('/users/:userId/type/:type', isAllowed, async function(
  req,
  res,
  next
) {
  try {
    let isActive
    if (req.params.type === 'active') {
      isActive = true
    } else {
      isActive = false
    }
    //confirm person logged in matches the userid we are looking up
    //use the testing function as middleware inside the '' in the get route
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

orderRouter.post('/', async function(req, res, next) {
  try {
    let orderObject = req.body
    let order = await Order.create(orderObject)
    for (let i = 0; i < orderObject.orderItems.length; i++) {
      let orderItem = orderObject.orderItems[i]
      await OrderItem.create({
        productId: orderItem.productId,
        orderId: order.id,
        quantity: orderItem.quantity
      })
    }
    res.send(200)
  } catch (err) {
    next(err)
  }
})

module.exports = orderRouter
