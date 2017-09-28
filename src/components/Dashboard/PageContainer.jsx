import React from 'react'
import PropTypes from 'prop-types'

const PageContainer = ({ children }) => (
  <div className="container-fluid">
    {children}
  </div>
)

PageContainer.propTypes = {
  children: PropTypes.any.isRequired,
}
PageContainer.defaultProps = {}

export default PageContainer
