import React from 'react'
// import PropTypes from 'prop-types'

const index = () => (
  <form>
    <div className="form-group">
      <label htmlFor="InputEmail">Email</label>

      <input
        type="email"
        className="form-control"
        id="InputEmail"
        placeholder="Email"
      />

      <small id="emailHelp" className="form-text text-muted">
        We'll never share your email with anyone else.
      </small>
    </div>

    <div className="form-group">
      <label htmlFor="InputPassword">Password</label>
      <input
        type="password"
        className="form-control"
        id="InputPassword"
        placeholder="Password"
      />
    </div>

    <div className="form-check">
      <label className="form-check-label">
        <input type="checkbox" className="form-check-input" />
        {' '}
        Remember Me
      </label>
    </div>

    <a href="/login" className="card-link btn btn-outline-primary">
      Submit
    </a>
  </form>
)

index.propTypes = {}
index.defaultProps = {}

export default index
