import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateSingleProduct} from '../store/adminview'
import {Button, Form, Col} from 'react-bootstrap'

export class UpdateForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      summary: '',
      description: '',
      imageUrl: '',
      price: 0,
      inventory: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.updateProductInfo(this.props.productId, this.state)
  }

  render() {
    return (
      <div>
        <center>
          <h1 className="admin-view-headline">Update Product</h1>
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
                <Form.Label>Inventory</Form.Label>
                <Form.Control
                  type="integer"
                  name="inventory"
                  placeholder="How many of this product?"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button
                className="update-product"
                variant="secondary"
                type="submit"
              >
                Update Product
              </Button>
            </Form.Row>
          </Form>
        </center>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  updateProductInfo: (id, product) => dispatch(updateSingleProduct(id, product))
})

export default connect(null, mapDispatch)(UpdateForm)
