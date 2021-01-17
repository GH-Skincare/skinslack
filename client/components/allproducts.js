import React from 'react'
import {fetchProducts} from '../store/products'
import {connect} from 'react-redux'

class AllProducts extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadProducts()
  }

  render() {
    return (
      <div>
        <h1 className="shop-all-products-headline">Shop All Products</h1>
        <div className="all-products-list-container">
          <ul>
            {this.props.products.map(product => (
              <div className="all-products" key={product.id}>
                <li className="product-name">{product.name}</li>
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

export default connect(mapState, mapDispatch)(AllProducts)
