import React from 'react'
import PropTypes from 'prop-types'

const CheckboxEdit = ({ element: { id, fieldLabel }, fieldChangeHandler }) => (
  <div className="form-group">
    <fieldLabel htmlFor="checkboxEdit">Label</fieldLabel>

    <input
      className="form-control"
      id="checkboxEdit"
      type="text"
      defaultValue={fieldLabel}
      onChange={e => fieldChangeHandler('fieldLabel', e.target.value)}
    />
  </div>
)

CheckboxEdit.propTypes = {
}
CheckboxEdit.defaultProps = {
}

export default CheckboxEdit
