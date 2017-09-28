import React from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'

import store from 'store'

const containerTarget = {
  canDrop(props, monitor) {
    const parentId = props.parentId
    const { elementId } = monitor.getItem()

    const { formBuilder: { elementsById } } = store.getState()

    // don't let a parent drop it's own child
    return parentId !== elementsById[elementId].id
  },

  drop(props, monitor) {
    // the returned value here is available in DragSource endDrag callback
    return {
      elementId: monitor.getItem().elementId,
      parentId: props.parentId,
      position: props.position,
    }
  },
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  }
}

const DropTargetContainer = ({
  children,
  connectDropTarget,
  isDragging,
  isOver,
}) =>
  connectDropTarget(
    <div
      className="d-flex p-3"
      style={{
        backgroundColor: isOver ? 'lightgrey' : '',
        border: isDragging ? '1px dotted grey' : '1px solid rgba(0,0,0,0)',
      }}
    >
      {children}
    </div>,
  )

DropTargetContainer.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  isOver: PropTypes.bool.isRequired,
  parentId: PropTypes.number,
  position: PropTypes.number,
}
DropTargetContainer.defaultProps = {}

export default DropTarget('ELEMENT', containerTarget, collect)(
  DropTargetContainer,
)
