import React from 'react'
// import PropTypes from 'prop-types'

const TextBox = ({ value }) => {
  return (
    <div className="border border-default p-1 rounded">
      {value}
    </div>
  )
}

TextBox.propTypes = {}
TextBox.defaultProps = {}

export default TextBox
