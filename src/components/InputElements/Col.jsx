import React from 'react'
// import PropTypes from 'prop-types'

export const colSchema = {
  type: 'col',
}

const Col = ({ children }) => {
  return (
    <div className="border border-primary p-3 row">
      {children}
    </div>
  )
}

Col.propTypes = {}
Col.defaultProps = {}

export default Col
