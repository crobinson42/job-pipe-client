import React from 'react'
import PropTypes from 'prop-types'

import Navbar from './Navbar'
import './index.css'

const DashboardWrapper = ({ children }) => (
  <div className="">
    <div>
      <Navbar />
    </div>

    <main>{children}</main>
  </div>
)

DashboardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
DashboardWrapper.defaultProps = {}

export default DashboardWrapper
