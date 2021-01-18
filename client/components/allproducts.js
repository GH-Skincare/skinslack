import React from 'react'
import {fetchProducts} from '../store/products'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

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
                <li className="product-stats">
                  <Link to={`/singleproduct/${product.id}`}>
                    <p className="product-name">{product.name}</p>
                  </Link>
                  <p className="product-image">{product.imageUrl}</p>
                  <p className="product-summary">{product.summary}</p>
                  <p className="product-price">{product.price}</p>
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
    products: state.products
  }
}

const mapDispatch = dispatch => {
  return {
    loadProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
