import React from 'react'
// import {connect} from 'react-redux'

class SelectNum extends React.Component {
  render() {
    return (
      <div>
        <form>
          <small>Quantity:</small>
          <br />
          <fieldset>
            <select id={this.props.id}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </fieldset>
        </form>
      </div>
    )
  }
}

// const mapState = state => {
//   return {

//   }
// }

// const mapDispatch = dispatch => {
//   return {

//   }
// }

// export default connect(mapState, mapDispatch)(SelectNum)

export default SelectNum
