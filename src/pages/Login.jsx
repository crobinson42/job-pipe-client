import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'

import AuthForm from 'components/AuthForm'

const containerStyle = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

// @withRouter
// @connect(state => ({}),
//   {})
class Login extends Component {
  static propTypes = {}

  // static defaultProps = {}

  render() {
    return (
      <div className="container-fluid" style={containerStyle}>
        <div className="col-md-4 col-sm-10">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center">Login</h4>

              <AuthForm />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
