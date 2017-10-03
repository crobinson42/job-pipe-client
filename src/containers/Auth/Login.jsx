import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import ReactLoading from 'react-loading'

import { authenticate } from 'containers/Auth/actions'

import RenderFieldError from 'components/Form/FieldError'

class Login extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    successHandler: PropTypes.func.isRequired,
  }

  // static defaultProps = {}

  static validation = values => {
    const errors = {}

    if (!values.email || values.email.indexOf('@') === -1)
      errors.email = 'Email Required'
    if (!values.password || values.password.length < 6)
      errors.password = 'Password Required'

    return errors
  }

  state = {
    failedAttempt: false,
    loading: false,
  }

  submitHandler = values => {
    this.setState({
      failedAttempt: false,
      loading: true,
    })

    return authenticate(values)(this.props.dispatch)
      .then(() => this.props.successHandler())
      .catch(err => {
        this.setState({
          failedAttempt: true,
          loading: false,
        })

        throw new SubmissionError('failed')
      })
  }

  render() {
    const { loading } = this.state

    return (
      <form onSubmit={this.props.handleSubmit(this.submitHandler)}>
        <div className="form-group">
          <label htmlFor="InputEmail">Email</label>

          <Field
            className="form-control"
            component="input"
            id="InputEmail"
            name="email"
            placeholder="Email"
            type="email"
          />

          <RenderFieldError field="email" form={this.props.form} />
        </div>

        <div className="form-group">
          <label htmlFor="InputPassword">Password</label>

          <Field
            className="form-control"
            component="input"
            id="InputPassword"
            name="password"
            placeholder="Password"
            type="password"
          />

          <RenderFieldError field="password" form={this.props.form} />
        </div>

        <div className="text-danger text-center">
          {this.state.failedAttempt && 'Invalid login'}
        </div>

        <div className="p-2">
          <button className="btn btn-outline-primary" disabled={loading}>
            {loading ? (
              <ReactLoading
                color="blue"
                delay={0}
                height="25px"
                type="bubbles"
                width="25px"
              />
            ) : (
              'Login'
            )}
          </button>
        </div>
      </form>
    )
  }
}

const enhance = compose(
  reduxForm({ form: 'login', validate: Login.validation }),
  connect(
    state => ({
      authed: !!state.auth.accessToken,
      form: state.form.login,
    }),
    dispatch => ({ dispatch }),
  ),
)

export default enhance(Login)
