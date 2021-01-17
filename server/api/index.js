const router = require('express').Router()
const allProductsRouter = require('./allProductRoutes')
const singleProductRouter = require('./singleProduct')
const orderItemsRouter = require('./orderItemRoutes')

router.use('/users', require('./users'))
router.use('/allproducts', allProductsRouter)
router.use('/singleproduct', singleProductRouter)
router.use('/order_items', orderItemsRouter)

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
