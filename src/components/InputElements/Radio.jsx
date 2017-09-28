import React from 'react'
import PropTypes from 'prop-types'

const Radio = ({ elementChildren, label }) => (
  <span>
    {elementChildren.sort((a, b) => a.position < b.position).map((radio, index) => {
      const radioId = `${label}${index}`

      return (
        <div key={`${radioId}`}>
          <input
            id={radioId}
            name={label}
            type="radio"
            value={radio.label}
          />{' '}
          <label htmlFor={radioId}>{radio.label}</label>
        </div>
      )
    })}
  </span>
)

Radio.propTypes = {
  elementChildren: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  label: PropTypes.string.isRequired,
}
Radio.defaultProps = {}

export default Radio
