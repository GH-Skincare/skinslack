import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/singleProduct'

export class singleProduct extends React.Component {
  // constructor(props){
  //   super(props)
  // }

  render() {
    return (
      <div>
        <h1>TESTING: This should render on single product page view.</h1>
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

export default connect(mapState, mapDispatch)(singleProduct)
