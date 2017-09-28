import React from 'react'
// import PropTypes from 'prop-types'
import { history } from 'routes'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand">Navbar</a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" onClick={() => history.push('/dashboard')}>
            Home
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => history.push('/dashboard/applicants')}
          >
            Applicants
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => history.push('/dashboard/postings')}
          >
            Postings
          </a>
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            href="http://example.com"
            id="navbarDropdownMenuLink"
          >
            Settings
          </a>
          <div
            className="dropdown-menu"
          >
            <a className="dropdown-item" onClick={() => history.push('/dashboard/settings/account')}>Account</a>
            <a className="dropdown-item" onClick={() => history.push('/dashboard/settings/user')}>Users</a>
          </div>
        </li>
      </ul>

      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </nav>
)

Navbar.propTypes = {}
Navbar.defaultProps = {}

export default Navbar
