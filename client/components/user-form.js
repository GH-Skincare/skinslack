import React, {Component} from 'react'
import {connect} from 'react-redux'

export class UserForm extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <form>
        <div>
          <h4>User Form</h4>
          <label htmlFor="firstName">First Name:</label>
          <input name="firstName" type="text" />

          <label htmlFor="lastName">Last Name:</label>
          <input name="lastName" type="text" />

          <label htmlFor="email">Email:</label>
          <input name="email" type="email" />

          <label htmlFor="password">Password</label>
          <input name="password" type="password" />

          <button type="submit" className="">
            Submit
          </button>
        </div>
      </form>
    )
  }
}
