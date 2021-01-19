//create a counter component here
//use this counter component in all products view, single product and admin view

import React from 'react'
import {connect} from 'react-redux'

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
        <h2>Counter</h2>
        <br />
        <div>
          <button type="submit" onClick={this.decrement}>
            -
          </button>
          <span>{this.props.count}</span>
          <button type="submit" onClick={this.increment}>
            +
          </button>
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
