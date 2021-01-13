const User = require('./user')
const Product = require('./product')
const Sequelize = require('sequelize')
const db = require('./database')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

//cart belongs to one user
//one user can belong to one cart
//many products can belong to one user
//many products belong to one cart
//one cart belongs to many products
//many users can belong to many products
//one user can belong to many products
//  **** let's talk associations!!! ***
const UserProduct = db.define('UserProduct', {
  role: Sequelize.STRING
})

User.belongsToMany(Product, {through: UserProduct})
Product.belongsToMany(User, {through: UserProduct})
//**what do we need to do for the cart items  */

module.exports = {
  User
}
//**add the appropriate model names to export */
