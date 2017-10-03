import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import ReactLoading from 'react-loading'

import service from 'feathers/services'
import { authenticate } from 'containers/Auth/actions'
import RenderFieldError from '../components/Form/FieldError'

const containerStyle = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

class Register extends Component {
  static propTypes = {
    accessToken: PropTypes.string,
    authenticate: PropTypes.func.isRequired,
    form: PropTypes.shape({
      fields: PropTypes.object,
      submitErrors: PropTypes.object,
      syncErrors: PropTypes.object,
    }).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    user: PropTypes.object,
  }

  static defaultProps = {
    accessToken: null,
    user: null,
  }

  static validation(values) {
    const errors = {}

    if (!values.firstName) errors.firstName = 'First name required'
    if (!values.lastName) errors.lastName = 'Last name required'
    if (!values.organizationName) {
      errors.organizationName = 'Organization name required'
    }
    if (!values.email || values.email.indexOf('@') === -1) {
      errors.email = 'Valid email required'
    }

    if (!values.password) {
      errors.password = 'Password required'
    } else if (values.password.length < 6) {
      errors.password = 'Password must be longer'
    }

    if (
      !values.passwordConfirmation ||
      values.passwordConfirmation !== values.password
    ) {
      errors.passwordConfirmation = "Password doesn't match"
    }

    return errors
  }

  state = {
    loading: false,
  }

  componentDidUpdate() {
    if (this.props.user && this.props.accessToken) {
      this.props.history.push('/dashboard')
    }
  }

  submitRegistrationForm = ({
    email,
    firstName,
    lastName,
    organizationName: name,
    password,
  }) => {
    this.setState({
      loading: true,
    })

    // restructure the data before sending to backend
    const data = {
      organization: {
        name,
      },
      user: {
        email,
        firstName,
        lastName,
        password,
      },
    }

    return service.registration
      .create(data)
      .then(() => {
        this.props.authenticate({
          email: data.user.email,
          password: data.user.password,
        })
      })
      .catch(({ errors }) => {
        this.setState({
          loading: false,
        })

        if (errors.email) {
          throw new SubmissionError({ email: 'Email address taken' })
        }
      })
  }

  renderError = field => (
    <div className="col-md-3">
      <RenderFieldError field={field} form={this.props.form} />
    </div>
  )

  render() {
    return (
      <div className="container-fluid" style={containerStyle}>
        <div className="col-md-8 col-sm-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center">Register</h4>

              <form
                className="form-horizontal"
                onSubmit={this.props.handleSubmit(this.submitRegistrationForm)}
              >
                <div className="row">
                  <div className="col-md-3 field-label-responsive">
                    <label htmlFor="organizationName">Organization</label>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                        <div
                          className="input-group-addon"
                          style={{ width: '2.6rem' }}
                        >
                          <i className="fa fa-building" />
                        </div>
                        <Field
                          name="organizationName"
                          className="form-control"
                          component="input"
                          id="organizationName"
                          placeholder="Name"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  {this.renderError('organizationName')}
                </div>

                <div className="row">
                  <div className="col-md-10 ml-auto mr-auto col-lg-8">
                    <hr />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-3 field-label-responsive">
                    <label htmlFor="firstName">First Name</label>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                        <div
                          className="input-group-addon"
                          style={{ width: '2.6rem' }}
                        >
                          <i className="fa fa-user" />
                        </div>
                        <Field
                          name="firstName"
                          className="form-control"
                          component="input"
                          id="firstName"
                          placeholder="John"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  {this.renderError('firstName')}
                </div>

                <div className="row">
                  <div className="col-md-3 field-label-responsive">
                    <label htmlFor="lastName">Last Name</label>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                        <div
                          className="input-group-addon"
                          style={{ width: '2.6rem' }}
                        >
                          <i className="fa fa-user" />
                        </div>
                        <Field
                          component="input"
                          className="form-control"
                          id="lastName"
                          placeholder="Doe"
                          name="lastName"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  {this.renderError('lastName')}
                </div>

                <div className="row">
                  <div className="col-md-3 field-label-responsive">
                    <label htmlFor="email">E-Mail Address</label>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                        <div
                          className="input-group-addon"
                          style={{ width: '2.6rem' }}
                        >
                          <i className="fa fa-at" />
                        </div>
                        <Field
                          component="input"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="you@example.com"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>

                  {this.renderError('email')}
                </div>

                <div className="row">
                  <div className="col-md-3 field-label-responsive">
                    <label htmlFor="password">Password</label>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group has-danger">
                      <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                        <div
                          className="input-group-addon"
                          style={{ width: '2.6rem' }}
                        >
                          <i className="fa fa-key" />
                        </div>
                        <Field
                          component="input"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Password"
                          type="password"
                        />
                      </div>
                    </div>
                  </div>

                  {this.renderError('password')}
                </div>

                <div className="row">
                  <div className="col-md-3 field-label-responsive">
                    <label htmlFor="password">Confirm Password</label>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                        <div
                          className="input-group-addon"
                          style={{ width: '2.6rem' }}
                        >
                          <i className="fa fa-repeat" />
                        </div>
                        <Field
                          component="input"
                          className="form-control"
                          id="password-confirm"
                          name="passwordConfirmation"
                          placeholder="Password"
                          type="password"
                        />
                      </div>
                    </div>
                  </div>

                  {this.renderError('passwordConfirmation')}
                </div>

                <div className="row">
                  <div className="col-md-3" />
                  <div className="col-md-6">
                    <button
                      disabled={this.state.loading}
                      type="submit"
                      className="btn btn-outline-success"
                    >
                      {this.state.loading ? (
                        <ReactLoading
                          color="white"
                          delay={0}
                          height="25px"
                          type="bubbles"
                          width="25px"
                        />
                      ) : (
                        <span>
                          <i className="fa fa-user-plus" /> Register
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const enhance = compose(
  withRouter,
  reduxForm({ form: 'register', validate: Register.validation }),
  connect(
    state => ({
      accessToken: state.auth.accessToken,
      form: state.form.register,
      user: state.user,
    }),
    { authenticate },
  ),
)

export default enhance(Register)
