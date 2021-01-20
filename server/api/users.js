const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

const isAllowed = (req, res, next) => {
  if (req.user === undefined || String(req.user.id) !== req.params.userId) {
    res.send(403)
  } else {
    next()
  }
}

router.get('/', isAllowed, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
