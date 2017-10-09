import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import LoginForm from 'containers/Auth/Login'

const containerStyle = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

class Login extends Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
  }

  componentDidUpdate() {
    if (this.props.authed) this.redirect()
  }

  redirect = () => this.props.history.push('/dashboard')

  render() {
    return (
      <div className="container-fluid" style={containerStyle}>
        <div className="col-md-4 col-sm-10">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center">Login</h4>

              <LoginForm successHandler={this.redirect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(
  connect(state => ({ authed: !!state.auth.accessToken }))(Login),
)
