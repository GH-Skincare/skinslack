import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import {
  fetchActiveOrder,
  deleteOrderItem,
  deleteGuestOrderItem,
  completeOrder,
  completeGuestOrder
} from '../store/orders'
import {me} from '../store'
import {Link} from 'react-router-dom'

class ActiveOrder extends React.Component {
  constructor(props) {
    super(props)
    this.clickCheckOut = this.clickCheckOut.bind(this)
  }
  //helper function
  clickCheckOut(orderId) {
    if (orderId) {
      this.props.completeCheckOut(orderId)
    } else {
      this.props.completeGuestCheckOut(this.props.activeOrder)
    }
  }

  async componentDidMount() {
    await this.props.loadInitialData()
    if (this.props.isLoggedIn) {
      await this.props.loadActiveOrder(this.props.userId)
    }
  }

  render() {
    if (
      !this.props.activeOrder.orderItems ||
      this.props.activeOrder.orderItems.length === 0
    ) {
      return (
        <div className="note-to-cust-empty">
          {' '}
          Cart is currently empty. Please take a look at our products to find
          something you love!{' '}
        </div>
      )
    }

    return (
      <div>
        <h1 className="shop-all-products-headline">
          {' '}
          Your <i>fabulous</i> Shopping Cart
        </h1>
        <div className="all-products-list-container">
          <ul>
            {this.props.activeOrder.orderItems.map(orderItem => (
              <div className="all-products" key={orderItem.id}>
                <li className="product-stats">
                  <Link to={`/singleproduct/${orderItem.product.id}`}>
                    <p className="product-name">{orderItem.product.name}</p>
                  </Link>
                  <img
                    src={orderItem.product.imageUrl}
                    style={{width: '25%', margin: '20px 0'}}
                  />
                  <p className="product-price">{orderItem.product.price}</p>
                  <p className="product-price">
                    Quantity: {orderItem.quantity}
                  </p>
                  <div className="great-taste-note">
                    {' '}
                    Thanks for adding to your bag! You have Great taste!{' '}
                  </div>
                  <br />
                  <br />
                  <Button
                    className="add-cart"
                    type="submit"
                    onClick={() =>
                      this.props.clickDeleteOrderItem(orderItem.id)
                    }
                  >
                    REMOVE 🛍
                  </Button>
                  <br />
                  <p>
                    <span>⭐️ ⭐ ⭐️ ⭐️ ⭐️ </span>
                  </p>
                </li>
              </div>
            ))}
            <Button
              className="add-cart"
              type="submit"
              onClick={() => {
                this.clickCheckOut(this.props.activeOrder.id)
                alert('THANK YOU FOR SHOPPING WITH US!')
              }}
            >
              Checkout 🛍
            </Button>
          </ul>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    activeOrder: state.orders.activeOrder,
    userId: state.user.id,
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData: () => dispatch(me()),
    loadActiveOrder: userId => dispatch(fetchActiveOrder(userId)),
    clickDeleteOrderItem: orderItemId => dispatch(deleteOrderItem(orderItemId)),
    completeCheckOut: orderId => dispatch(completeOrder(orderId)),
    completeGuestCheckOut: order => dispatch(completeGuestOrder(order))
  }
}

export default connect(mapState, mapDispatch)(ActiveOrder)
