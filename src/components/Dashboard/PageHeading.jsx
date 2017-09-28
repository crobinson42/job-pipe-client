import React from 'react'
import PropTypes from 'prop-types'

const PageHeading = ({ children }) => (
  <h4>{children}</h4>
)

PageHeading.propTypes = {
  children: PropTypes.any.isRequired,
}
PageHeading.defaultProps = {}

export default PageHeading
