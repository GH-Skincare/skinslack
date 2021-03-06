import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me} from './store'
import AllProducts from './components/AllProducts'
import SingleProduct from './components/singleProduct'
import ActiveOrder from './components/activeOrder'
import AdminView from './components/adminView'
import AdminEdit from './components/AdminEdit'

/**
 * COMPONENT
 */
class Routes extends Component {
  async componentDidMount() {
    await this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
            <Route exact path="/allproducts" component={AllProducts} />
            <Route
              exact
              path="/singleproduct/:productId"
              component={SingleProduct}
            />
            <Route exact path="/cart" component={ActiveOrder} />
            <Route exact path="/admin" component={AdminView} />
            <Route exact path="/admin/:productId" component={AdminEdit} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        {/* guest view access below */}
        <Switch>
          <Route exact path="/allproducts" component={AllProducts} />
          <Route
            exact
            path="/singleproduct/:productId"
            component={SingleProduct}
          />
          <Route exact path="/cart" component={ActiveOrder} />
          <Route component={Login} />
        </Switch>
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
