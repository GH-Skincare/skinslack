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
        <h1>ALL PRODUCTS</h1>
        {this.props.products.map(product => (
          <div key={product.id}> {product.name} </div>
        ))}
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
