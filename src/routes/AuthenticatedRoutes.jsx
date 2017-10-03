/**
 * HOC wrapper for routes to verify user is authed.
 * A redirect will be rendered if user is not authed
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

class AuthenticatedRoute extends Component {
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

  isUserAuthed = () => !!this.props.accessToken

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

    return <div>{this.props.children}</div>
  }
}

const enhance = compose(
  withRouter,
  connect(state => ({ accessToken: state.auth.accessToken })),
)

export default enhance(AuthenticatedRoute)
