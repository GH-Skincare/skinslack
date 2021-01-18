import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Navbar, Nav} from 'react-bootstrap'

const Navigationbar = ({handleClick, isLoggedIn}) => (
  <div>
    {/* <h1 className="title">JIL SkinCare</h1>
    <h1 className="title-headline">Skincare That Lasts...</h1> */}
    <Navbar className="nav-bar" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand className="brand-name" href="/home">
        JIL SkinCare
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/allproducts">All Products</Nav.Link>
        </Nav>
        <Nav>
          <nav>
            {isLoggedIn ? (
              <div>
                {/* The navbar will show these links after you log in */}
                <Link to="/home" className="nav-links">
                  Home
                </Link>
                <Link to="/orders" className="nav-links">
                  Orders
                </Link>
                <a href="#" onClick={handleClick} className="nav-links">
                  Logout
                </a>
              </div>
            ) : (
              <div>
                {/* The navbar will show these links before you log in */}
                <Link to="/login" className="nav-links">
                  Login
                </Link>
                <Link to="/signup" className="nav-links">
                  Sign Up
                </Link>
              </div>
            )}
          </nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navigationbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
