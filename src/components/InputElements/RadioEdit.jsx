import React from 'react'
import PropTypes from 'prop-types'
import schemas from './schemas'

const RadioEdit = ({ element, fieldChangeHandler }) => {
  const addElementChild = () => {
    // make a copy of the schema object
    const childSchema = { ...schemas.select.elementChildren[0] }
    // push onto the children array
    element.elementChildren.push(childSchema)

    fieldChangeHandler('elementChildren', element.elementChildren)
  }

  const elementChildrenChangeHandler = (index, field, newValue) => {
    // get the child element by index
    const childEl = element.elementChildren[index]
    // update the child index object
    childEl[field] = newValue

    fieldChangeHandler('elementChildren', element.elementChildren)
  }

  const removeElementChild = (index) => {
    delete element.elementChildren[index]

    fieldChangeHandler('elementChildren', element.elementChildren)
  }

  return (
    <div>
      <div className="form-group">
        <label htmlFor="selectEdit">Label</label>

        <input
          className="form-control"
          id="selectEdit"
          type="text"
          defaultValue={element.label}
          onChange={e => fieldChangeHandler('label', e.target.value)}
        />
      </div>

      <div>
        <h6>Dropdown Options</h6>

        <button className="btn btn-default">
          <a onClick={addElementChild}>Add Option</a>
        </button>

        <div className="pt-3">
          {element.elementChildren.map((el, i) => (
            <div key={i} className="input-group mb-2 mr-sm-2 mb-sm-0">
              <input
                className="form-control"
                id="selectEdit"
                type="text"
                defaultValue={el.label}
                onChange={e =>
                  elementChildrenChangeHandler(i, 'label', e.target.value)}
              />

              <div className="input-group-addon">
                <a onClick={e => removeElementChild(i)}>Remove</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

RadioEdit.propTypes = {}
RadioEdit.defaultProps = {}

export default RadioEdit
