import React from 'react'
// import PropTypes from 'prop-types'

const SectionTitleEdit = ({ element: { id, value }, fieldChangeHandler }) => (
  <div className="form-group">
    <label htmlFor="sectionTitleEdit">Title</label>

    <input
      className="form-control"
      id="sectionTitleEdit"
      type="text"
      defaultValue={value}
      onChange={e => fieldChangeHandler('value', e.target.value)}
    />
  </div>
)

SectionTitleEdit.propTypes = {}
SectionTitleEdit.defaultProps = {}

export default SectionTitleEdit
