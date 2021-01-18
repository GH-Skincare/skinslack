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
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'

class adminView extends React.Component {
  componentDidMount() {
    this.props.loadProducts()
  }

  render() {
    return (
      <div>
        <h1 className="admin-view-headline">Admin View</h1>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Product Name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Product Summary</Form.Label>
              <Form.Control type="text" placeholder="Summary" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Product Description</Form.Label>
              <Form.Control type="text" placeholder="Description" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Price</Form.Label>
              <Form.Control type="integer" placeholder="Price" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Image Url</Form.Label>
              <Form.Control type="text" placeholder="Image Url" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Inventory to Add</Form.Label>
              <Form.Control
                type="integer"
                placeholder="How many of this product?"
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
                  <p className="product-price">{product.price}</p>
                  <div className="input-group plus-minus-input">
                    <div className="input-group-button">
                      <button
                        type="button"
                        className="button hollow circle"
                        data-quantity="minus"
                        data-field="quantity"
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </button>
                    </div>
                    <input
                      className="input-group-field"
                      type="number"
                      name="quantity"
                      value="0"
                    />
                    <div className="input-group-button">
                      <button
                        type="button"
                        className="button hollow circle"
                        data-quantity="plus"
                        data-field="quantity"
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </button>
                    </div>
                  </div>
                  <br />
                  <Button
                    variant="secondary"
                    className="delete-product"
                    type="submit"
                  >
                    Delete Product
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
  }
}

const mapDispatch = dispatch => {
  return {
    loadProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapState, mapDispatch)(adminView)
