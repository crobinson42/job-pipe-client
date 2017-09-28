import React from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'

import store from 'store'

import { elementDragging, moveElement } from 'containers/FormBuilder/actions'
import ElementContainer from 'components/InputElements/ElementContainer'

const elementSource = {
  beginDrag(props) {
    const elementId = props.element.id

    // dispatch action for dragging, the element being drug and it's starting position
    store.dispatch(elementDragging(elementId))

    return {
      elementId,
    }
  },
  endDrag(props, monitor) {
    // dispatch action for dragging ended
    store.dispatch(elementDragging(false))

    const dropResult = monitor.getDropResult()

    // the el wasn't dropped in a target
    if (!dropResult) return

    store.dispatch(
      moveElement(
        dropResult.elementId,
        dropResult.parentId,
        dropResult.position,
      ),
    )
  },
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }
}

const DraggableElement = ({
  children,
  connectDragSource,
  element,
  isDragging,
}) =>
  connectDragSource(
    <div
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      <ElementContainer element={element}>{children}</ElementContainer>
    </div>,
  )

DraggableElement.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
}
DraggableElement.defaultProps = {}

export default DragSource('ELEMENT', elementSource, collect)(DraggableElement)
