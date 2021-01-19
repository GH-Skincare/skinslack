import React from 'react'
// import {connect} from 'react-redux'

class SelectNum extends React.Component {
  changeQuant() {}

  render() {
    return (
      <div>
        <form>
          <h1>Quantity:</h1>
          <fieldset>
            <select id="selQuant">
              <option value="zero">0</option>
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
              <option value="four">4</option>
              <option value="five">5</option>
              <option value="six">6</option>
              <option value="seven">7</option>
              <option value="eight">8</option>
              <option value="nine">9</option>
              <option value="ten">10</option>
            </select>
            <input type="button" value="Update" onClick={changeQuant} />
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
