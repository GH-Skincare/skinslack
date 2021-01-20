const orderItemsRouter = require('express').Router()
const {OrderItem, Order, Product} = require('../db/models')

orderItemsRouter.get('/products/:productId/users/:userId', async function(
  req,
  res,
  next
) {
  try {
    const order = await Order.findOne({
      where: {isActive: true, userId: req.params.userId}
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
    const orders = await Order.findOrCreate({
      where: {isActive: true, userId: req.body.userId}
    })
    const order = orders[0]

    //do an item look-up to see if item is already in the active order (cart)
    let itemLookUp = await OrderItem.findAll({
      where: {
        productId: req.body.productId,
        orderId: order.id
      }
    })

    //if the item is not in the cart, item look up result is undefined, else retrieve the searched item
    itemLookUp = itemLookUp === undefined ? undefined : itemLookUp[0]

    //if item look up equals undefined, create a new active order record with the item quantity
    let orderItem
    if (itemLookUp === undefined) {
      orderItem = await OrderItem.create({
        orderId: order.id,
        productId: req.body.productId,
        quantity: req.body.itemQty
      })

      //else if item look up matches an item in the cart, update the item quantity so that it is the previous quantity plus the new (this avoids the error of having 2 of the same items in the cart displayed rather than 1 item with the total updated quantity)
    } else {
      await OrderItem.update(
        {
          quantity:
            parseInt(req.body.itemQty, 10) + parseInt(itemLookUp.quantity, 10)
        },
        {
          where: {
            orderId: order.id,
            productId: req.body.productId
          }
        }
      )
      //returns an array with one object because of find all[0]

      orderItem = await OrderItem.findAll({
        where: {
          productId: req.body.productId
        }
      })
      orderItem = orderItem[0]
    }

    const orderItemWithProduct = await OrderItem.findByPk(orderItem.id, {
      include: Product
    })

    res.send({orderId: order.id, orderItems: [orderItemWithProduct]})
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
