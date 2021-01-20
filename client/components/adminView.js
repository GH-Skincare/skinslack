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
import {Button, Form, Col} from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import {
  createProduct,
  removeProduct,
  updateSingleProduct
} from '../store/adminview'

class adminView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      summary: '',
      description: '',
      imageUrl: '',
      price: 0,
      inventory: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.loadProducts()
    // this.props.updateProductInfo()
  }
  // handleSubmit(e) {
  //   e.preventDefault()
  //   const product = e.target.id
  //   console.log(product, `<---- adminviewproduct`)
  //   this.props.addToProducts({ product: this.product })
  // }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state, `THIS IS THE STATE`)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addToProducts(this.state)
  }

  render() {
    return (
      <div>
        <h1 className="admin-view-headline">Admin View</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Product Name"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Product Summary</Form.Label>
              <Form.Control
                type="text"
                name="summary"
                placeholder="Summary"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Description"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="integer"
                name="price"
                placeholder="Price"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                placeholder="Image Url"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Inventory to Add</Form.Label>
              <Form.Control
                type="integer"
                name="inventory"
                placeholder="How many of this product?"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              className="create-product"
              variant="secondary"
              type="submit"
            >
              Add Product
            </Button>
          </Form.Row>
        </Form>
        <div className="admin-view-container">
          <ul>
            {this.props.products.map(product => (
              <div className="all-products" key={product.id}>
                <li className="product-stats">
                  <p className="product-name">{product.name}</p>
                  {product.price.includes('$') ? (
                    <p className="product-price">{product.price}</p>
                  ) : (
                    <p className="product-price">${product.price}</p>
                  )}
                  <br />
                  <Button
                    className="add-cart"
                    type="submit"
                    onClick={() => this.props.clickDeleteProduct(product.id)}
                  >
                    REMOVE 🛍
                  </Button>
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
    // product: state.product
  }
}

const mapDispatch = dispatch => {
  return {
    loadProducts: () => dispatch(fetchProducts()),
    addToProducts: product => dispatch(createProduct(product))
    // updateProductInfo: (id, product) => dispatch(updateSingleProduct(id, product))
  }
}

export default connect(mapState, mapDispatch)(adminView)

// //              onClick={() => {
//   this.props.addToProducts(this.props.product)
// }}
