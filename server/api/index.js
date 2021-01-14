const router = require('express').Router()
const allProductsRouter = require('./allProductRoutes')
// const singleProductRouter = require('./singleProduct')

router.use('/users', require('./users'))
router.use('/allproducts', allProductsRouter)
// router.use('./singleProduct', singleProductRouter)

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
