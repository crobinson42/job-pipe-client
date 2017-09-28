import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ fieldLabel }) => (
  <div>
    <input id={fieldLabel} name={fieldLabel} type="checkbox" value={fieldLabel} />{' '}
    <label htmlFor={fieldLabel}>{fieldLabel}</label>
  </div>
)

Checkbox.propTypes = {
  fieldLabel: PropTypes.string.isRequired,
}

Checkbox.defaultProps = {}

export default Checkbox
