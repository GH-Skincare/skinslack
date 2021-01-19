import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import {fetchActiveOrder, deleteOrderItem} from '../store/orders'

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

    return (
      <div>
        <h1 className="shop-all-products-headline">
          {' '}
          Your fabolous Shopping Cart
        </h1>
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
                  <div>
                    {' '}
                    Thanks for adding to your bag! You have Great taste!{' '}
                  </div>
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
    loadActiveOrder: userId => dispatch(fetchActiveOrder(userId)),
    clickDeleteOrderItem: orderItemId => dispatch(deleteOrderItem(orderItemId))
  }
}

export default connect(mapState, mapDispatch)(ActiveOrder)
