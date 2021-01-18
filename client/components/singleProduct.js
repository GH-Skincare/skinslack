import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/singleProduct'
import {Button} from 'react-bootstrap'

export class SingleProduct extends React.Component {
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
      <div className="singleproducts-container">
        <h1>TESTING: This should render on single product page view.</h1>
        <center>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <img
            src={product.imageUrl}
            style={{width: '25%', margin: '20px 0'}}
          />
          <p>{product.description}</p>
          <Button className="add-cart" type="submit">
            Add to Bag 🛍
          </Button>
          <br />
          <p>
            <span>⭐️ ⭐ ⭐️ ⭐️ ⭐️ </span>
          </p>
        </center>
      </div>
    )
  }
}

//this will be helpful for redux later:
const mapState = state => ({
  product: state.product
})

const mapDispatch = dispatch => ({
  loadSingleProduct: id => dispatch(fetchSingleProduct(id))
})

export default connect(mapState, mapDispatch)(SingleProduct)
