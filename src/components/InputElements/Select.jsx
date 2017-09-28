import React from 'react'
import PropTypes from 'prop-types'


const Select = ({ elementChildren, label }) => (
  <select className="form-control" id={label} name={label}>
    {elementChildren.map(({ label }, i) => (
      <option key={`option${i}`} value={label}>
        {label}
      </option>
    ))}
  </select>
)

Select.propTypes = {
  elementChildren: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  label: PropTypes.string.isRequired,
}
Select.defaultProps = {}

export default Select
