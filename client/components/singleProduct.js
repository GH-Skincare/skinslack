import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/singleProduct'
import {Button} from 'react-bootstrap'
import {fetchActiveOrder, createOrderItem} from '../store/orders'
import SelectNum from '../components/SelectNum'
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
        <div className="singleproducts-container">
          <center>
            <Link to="/allproducts">
              <h3>{product.name}</h3>
            </Link>
            <p>{product.price}</p>
            <img
              src={product.imageUrl}
              style={{width: '25%', margin: '20px 0'}}
            />
            <p>{product.description}</p>
            <div className="add-remove-products">
              <SelectNum id={product.id} component={SelectNum} />
              <br />
              <Button
                className="add-cart"
                type="submit"
                onClick={() => {
                  let itemQty = document.getElementById(product.id).value
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
