import React from 'react'
// import PropTypes from 'prop-types'

import { history } from 'routes'

const Home = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand">Something Awesome!</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Pricing</a>
          </li>
        </ul>

        <span className="navbar-text">
          <button
            className="btn btn-light"
            onClick={() => history.push('/login')}
          >
            Login
          </button>
        </span>
      </div>
    </nav>

    <div className="container-fluid" />
  </div>
)

Home.propTypes = {}
Home.defaultProps = {}

export default Home
