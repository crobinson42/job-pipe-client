import React from 'react'
import PropTypes from 'prop-types'

import elementMapper from './elementMapper'

const ElementContainer = ({ children, element }) => {
  if (!elementMapper[element.type]) {
    console.warn(`ElementMapper type does not exist: ${element.type}`, element)
    return null
  }

  const Element = elementMapper[element.type]

  return (
    <div>
      {element.label && <label htmlFor={element.label}>{element.label}</label>}
      {' '}
      <Element {...element}>
        {children}
      </Element>
    </div>
  )
}

ElementContainer.propTypes = {
  element: PropTypes.shape({
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
  }).isRequired,
}
ElementContainer.defaultProps = {}

export default ElementContainer
