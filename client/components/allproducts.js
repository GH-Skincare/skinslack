import React from 'react'
import {fetchProducts} from '../store/products'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import {
  fetchActiveOrder,
  createOrderItem,
  deleteOrderItem
} from '../store/orders'
import Counter from './Counter'
import {Link} from 'react-router-dom'

class AllProducts extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadProducts()
    this.props.loadActiveOrder(this.props.userId)
  }

  render() {
    return (
      <div>
        <h1 className="shop-all-products-headline">Shop All Products</h1>
        <div className="all-products-list-container">
          <ul>
            {this.props.products.map(product => {
              let orderItemsArray =
                this.props.activeOrder.orderItems &&
                this.props.activeOrder.orderItems.filter(
                  item => item.productId === product.id
                )
              let orderItem
              if (
                orderItemsArray === undefined ||
                orderItemsArray.length === 0
              ) {
                orderItem = null
              } else {
                orderItem = orderItemsArray[0]
              }

              return (
                <div className="all-products" key={product.id}>
                  <li className="product-stats">
                    <Link to={`/singleproduct/${product.id}`}>
                      <p className="product-name">{product.name}</p>
                    </Link>
                    <img
                      src={product.imageUrl}
                      style={{width: '25%', margin: '20px 0'}}
                    />
                    <p className="product-summary">{product.summary}</p>
                    <p className="product-price">{product.price}</p>
                    {orderItem !== null ? (
                      <div>
                        {/* <div>Quantity: {orderItem.quantity}</div> */}
                        <div className="add-remove-products">
                          <Counter component={Counter} />
                          <Button
                            className="add-cart"
                            type="submit"
                            onClick={() =>
                              this.props.clickDeleteOrderItem(orderItem.id)
                            }
                          >
                            REMOVE 🛍
                          </Button>{' '}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <SelectNum component={SelectNum} />
                        <br />
                        <Button
                          className="add-cart"
                          type="submit"
                          onClick={() =>
                            this.props.addToCart(this.props.userId, product.id)
                          }
                        >
                          Add to Bag 🛍
                        </Button>
                      </div>
                    )}
                    <br />
                    <p>
                      <span>⭐️ ⭐ ⭐️ ⭐️ ⭐️ </span>
                    </p>
                  </li>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products,
    activeOrder: state.orders.activeOrder,
    userId: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadProducts: () => dispatch(fetchProducts()),
    loadActiveOrder: userId => dispatch(fetchActiveOrder(userId)),
    addToCart: (userId, productId) =>
      dispatch(createOrderItem(userId, productId)),
    clickDeleteOrderItem: orderItemId => dispatch(deleteOrderItem(orderItemId))
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
