import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <h3 className="welcome-user-email">Welcome, {email}!</h3>
      <h1>
        NOTE TO TEAM: I think it would be nice to have all products also showing
        on the main sign in page? Or do we want the customer to sign in and
        simply see their account settings here?{' '}
      </h1>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
