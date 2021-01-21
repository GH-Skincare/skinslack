import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/singleProduct'
import {Link} from 'react-router-dom'
import UpdateForm from './UpdateForm'

export class AdminEdit extends Component {
  async componentDidMount() {
    try {
      await this.props.loadSingleProduct(this.props.match.params)
    } catch (error) {
      console.log(`There was an error while trying to fetch product details!`)
    }
  }

  render() {
    const product = this.props.product || {}

    return (
      <div className="admin-container">
        <center>
          <Link to="/admin">
            <h3>{product.name}</h3>
          </Link>
          <img
            src={product.imageUrl}
            style={{width: '25%', margin: '20px 0'}}
          />
          {typeof product.price !== 'string' ? null : product.price.includes(
            '$'
          ) ? (
            <p className="product-admin-price">
              <b>Price: {product.price}</b>
            </p>
          ) : (
            <p className="product-admin-price">
              <b>Price: ${product.price}</b>
            </p>
          )}
          <p className="product-admin-summary">Summary: {product.summary}</p>
          <p className="product-description">
            <b>Description: {product.description}</b>
          </p>
          <p className="product-inventory">Inventory: {product.inventory}</p>
          <br />
          <br />
          <UpdateForm productId={product.id} />
        </center>
      </div>
    )
  }
}

const mapState = state => ({
  product: state.product
})

const mapDispatch = dispatch => ({
  loadSingleProduct: id => dispatch(fetchSingleProduct(id))
})

export default connect(mapState, mapDispatch)(AdminEdit)
