//admin view should be able to see all products component
//the all products component should also have buttons to do the following:
// 1. add to the inventory
// 2. remove from the inventory
// 3. delete entire product
// 4. have a form to create a new product
// logic: if user is admin: SHOW THIS PAGE, else show all products view

import React from 'react'
import {fetchProducts} from '../store/products'
import {connect} from 'react-redux'
// import {Button} from 'react-bootstrap'

class adminView extends React.Component {
  componentDidMount() {
    this.props.loadProducts()
  }

  render() {
    return (
      <div>
        <h1 className="admin-view-headline">Admin View</h1>
        <div className="admin-view-container">
          <ul>
            {this.props.products.map(product => (
              <div className="all-products" key={product.id}>
                <li className="product-stats">
                  <p className="product-name">{product.name}</p>
                  <p className="product-image">{product.imageUrl}</p>
                  <p className="product-summary">{product.summary}</p>
                  <p className="product-price">{product.price}</p>
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
    products: state.products
  }
}

const mapDispatch = dispatch => {
  return {
    loadProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapState, mapDispatch)(adminView)

// export default (adminView)
