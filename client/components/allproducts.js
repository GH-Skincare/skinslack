import React from 'react'

class AllProducts extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>ALL PRODUCTS</h1>
        {this.props.products.map(product => (
          <div key={product.id}> {product.name} </div>
        ))}
        ;
      </div>
    )
  }
}

export default AllProducts
