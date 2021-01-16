import React from 'react'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AllProducts from './AllProducts'

export default class Routes extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={navbar} />
          <Route exact path="/allproducts" component={AllProducts} />
        </Switch>
      </Router>
    )
  }
}
