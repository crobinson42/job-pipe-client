import React from 'react'
// import PropTypes from 'prop-types'

const Row = ({ children }) => {
  return (
    <div className="border border-primary p-3 row">
      {children}
    </div>
  )
}

Row.propTypes = {}
Row.defaultProps = {}

export default Row
