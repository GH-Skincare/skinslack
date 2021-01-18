import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import {fetchActiveOrder} from '../store/orders'

class ActiveOrder extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadActiveOrder(this.props.userId)
  }

  render() {
    if (
      !this.props.activeOrder.orderItems ||
      this.props.activeOrder.orderItems.length === 0
    ) {
      return <div> Cart Empty </div>
    }
    console.log(this.props.activeOrder)
    return (
      <div>
        <h1 className="shop-all-products-headline">Shopping Cart</h1>
        <div className="all-products-list-container">
          <ul>
            {this.props.activeOrder.orderItems.map(orderItem => (
              <div className="all-products" key={orderItem.id}>
                <li className="product-stats">
                  <p className="product-name">{orderItem.product.name}</p>
                  <p className="product-image">{orderItem.product.imageUrl}</p>
                  {/* <p className="product-summary">{orderItem.product.summary}</p> */}
                  <p className="product-price">{orderItem.product.price}</p>
                  <p className="product-price">
                    Quantity: {orderItem.quantity}
                  </p>
                  <Button className="add-cart" type="submit">
                    Add to Bag 🛍
                  </Button>
                  <br />
                  <p>
                    <span>⭐️ ⭐ ⭐️ ⭐️ ⭐️ </span>
                  </p>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    activeOrder: state.orders.activeOrder,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadActiveOrder: userId => dispatch(fetchActiveOrder(userId))
  }
}

export default connect(mapState, mapDispatch)(ActiveOrder)
