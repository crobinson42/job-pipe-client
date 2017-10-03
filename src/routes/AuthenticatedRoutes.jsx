/**
 * HOC wrapper for routes to verify user is authed.
 * A redirect will be rendered if user is not authed
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Authenticated extends Component {
  static propTypes = {
    accessToken: PropTypes.string,
    children: PropTypes.node,
    location: PropTypes.object.isRequired,
  }

  static defaultProps = {
    accessToken: null,
    children: null,
    redirect: '/login',
  }

  isUserAuthed = () => (!!this.props.accessToken)

  renderRedirect = (pathname = '/login') => (
    <Redirect
      to={{
        pathname,
        state: { from: this.props.location },
      }}
    />
  )

  render() {
    if (!this.isUserAuthed()) {
      return this.renderRedirect()
    }

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default connect(state => ({ accessToken: state.auth.accessToken }))(Authenticated)
