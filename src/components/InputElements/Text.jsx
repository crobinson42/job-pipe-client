import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ label, type, validation }) => {
  const changeHandler = (e) => {
    console.log(e.target)
  }

  return (
    <input
      id={label}
      name={label}
      onChange={changeHandler}
      type={type}
    />
  )
}

Text.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  validation: PropTypes.object,
}
Text.defaultProps = {
  type: 'text',
  validation: {},
}

export default Text
