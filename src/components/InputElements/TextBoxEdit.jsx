import React from 'react'
// import PropTypes from 'prop-types'

const TextBoxEdit = ({ element: { id, value }, fieldChangeHandler }) => (
  <div className="form-group">
    <label htmlFor="textboxEdit">Text</label>

    <textarea
      className="form-control"
      id="textboxEdit"
      type="text"
      defaultValue={value}
      onChange={e => fieldChangeHandler('value', e.target.value)}
    />
  </div>
)

TextBoxEdit.propTypes = {}
TextBoxEdit.defaultProps = {}

export default TextBoxEdit
