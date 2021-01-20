import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/singleProduct'
import {Button} from 'react-bootstrap'
import {fetchActiveOrder, createOrderItem} from '../store/orders'
import Counter from '../components/Counter'
import {Link} from 'react-router-dom'

export class SingleProduct extends React.Component {
  async componentDidMount() {
    try {
      await this.props.loadSingleProduct(this.props.match.params)
      await this.props.loadActiveOrder(this.props.userId)
    } catch (error) {
      console.log(`There was an error while trying to fetch product details!`)
    }
  }

  render() {
    const product = this.props.product || {}

    return (
      <div>
        <center>
          <Link to="/allproducts">
            <p>Back to All Products</p>
          </Link>
        </center>
        <div className="singleproducts-container">
          <center>
            <h3 className="product-name">{product.name}</h3>
            <p>{product.price}</p>
            <img
              src={product.imageUrl}
              style={{width: '25%', margin: '20px 0'}}
            />
            <p>{product.description}</p>
            <div className="add-remove-products">
              <br />
              <Counter id={product.id} component={Counter} />
              <Button
                className="add-cart"
                type="submit"
                onClick={() => {
                  let itemQty = document.getElementById(product.id).innerHTML
                  this.props.addToCart(this.props.userId, product.id, itemQty)
                }}
              >
                Add to Bag 🛍
              </Button>
              <br />
              <p>
                <span>⭐️ ⭐ ⭐️ ⭐️ ⭐️ </span>
              </p>
            </div>
          </center>
        </div>
      </div>
    )
  }
}

//this will be helpful for redux later:
const mapState = state => ({
  product: state.product,
  activeOrder: state.orders.activeOrder,
  userId: state.user.id
})

const mapDispatch = dispatch => ({
  loadSingleProduct: id => dispatch(fetchSingleProduct(id)),
  loadActiveOrder: userId => dispatch(fetchActiveOrder(userId)),
  addToCart: (userId, productId, itemQty) =>
    dispatch(createOrderItem(userId, productId, itemQty))
})

export default connect(mapState, mapDispatch)(SingleProduct)
