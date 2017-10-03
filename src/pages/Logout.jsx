import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import Loading from 'react-loading'

import feathers from 'feathers'

const containerStyle = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

class Logout extends Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
  }

  componentDidMount() {
    feathers
      .logout()
      .then(this.redirect)
      .catch(this.redirect)
  }

  componentDidUpdate() {
    if (!this.props.authed) this.redirect()
  }

  redirect = () => this.props.history.push('/login')

  render() {
    return (
      <div className="container-fluid" style={containerStyle}>
        <div className="col-md-4 col-sm-10">
          <div className="card">
            <div className="card-body d-flex flex-column">
              <div>
                <h4 className="card-title text-center">Logging out...</h4>
              </div>

              <div className="mx-auto">
                <Loading color="blue" delay={0} height="50px" width="50px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const enhance = compose(
  withRouter,
  connect(
    state => ({
      authed: !!state.auth.accessToken,
      form: state.form.login,
    }),
    dispatch => ({ dispatch }),
  ),
)
export default enhance(Logout)
