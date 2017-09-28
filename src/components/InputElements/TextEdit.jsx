import React from 'react'
import PropTypes from 'prop-types'

const TextEdit = ({ element: { id, label }, fieldChangeHandler }) => (
  <div className="form-group">
    <label htmlFor="textEdit">Name</label>

    <input
      className="form-control"
      id="textEdit"
      type="text"
      defaultValue={label}
      onChange={e => fieldChangeHandler('label', e.target.value)}
    />
  </div>
)

TextEdit.propTypes = {
}
TextEdit.defaultProps = {
}

export default TextEdit
