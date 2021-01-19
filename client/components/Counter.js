//create a counter component here
//use this counter component in all products view, single product and admin view

import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({type: 'INCREMENT'})
  }

  decrement = () => {
    this.props.dispatch({type: 'DECREMENT'})
  }

  render() {
    console.log('what is this.props:', this.props.count)
    return (
      <div>
        <h2 className="product-quantity">Quantity</h2>
        <div>
          <Button
            className="counter-buttons"
            variant="outline-info"
            type="submit"
            onClick={this.decrement}
          >
            -
          </Button>
          <span className="count-num">{this.props.count}</span>
          <Button
            className="counter-buttons"
            variant="outline-info"
            type="submit"
            onClick={this.increment}
          >
            +
          </Button>
        </div>
      </div>
    )
  }
}

function mapState(state) {
  return {
    count: state.counter.count
  }
}

export default connect(mapState)(Counter)
