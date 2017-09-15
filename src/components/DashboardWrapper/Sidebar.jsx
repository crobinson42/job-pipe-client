import React from 'react'
// import PropTypes from 'prop-types'

import { history } from 'routes'

const Sidebar = () => (
  <div className="sidebar bg-light">
    <li onClick={() => history.push('/dashboard')}>Home</li>
    <li onClick={() => history.push('/dashboard/new-service')}>New Data Service</li>
    <li onClick={() => history.push('/dashboard/settings')}>Settings</li>
  </div>
)

Sidebar.propTypes = {}
Sidebar.defaultProps = {}

export default Sidebar
