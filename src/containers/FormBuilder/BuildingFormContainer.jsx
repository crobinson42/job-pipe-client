import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import DraggableElement from './DraggableElement'
import DropTarget from './DropTarget'
import EditableElementControls from './EditableElementControls'
import Modal from 'components/Modal'

class BuildingFormContainer extends Component {
  static propTypes = {
    elementsById: PropTypes.object.isRequired,
    elementsPositionById: PropTypes.object.isRequired,
    elementDragging: PropTypes.any,
  }

  static defaultProps = {
    elementDragging: null,
  }

  renderElements = (elements = []) =>
    elements
      .sort(
        (a, b) =>
          this.props.elementsPositionById[a.id] >
          this.props.elementsPositionById[b.id],
      )
      .map((el, i) => {
        // get this elements children
        const children = Object.values(this.props.elementsById).filter(
          _el => _el.parentId === el.id,
        )

        const elPos = this.props.elementsPositionById[el.id]

        return (
          <div key={el.id}>
            <DropTarget isDragging={!!this.props.elementDragging} parentId={el.parentId} position={elPos} />

            <EditableElementControls element={el}>
              <DraggableElement element={el}>
                {!children.length ? (
                  <DropTarget isDragging={!!this.props.elementDragging} parentId={el.id} position={0} />
                ) : (
                  this.renderElements(children)
                )}
              </DraggableElement>
            </EditableElementControls>

            {i + 1 === elements.length && (
              <DropTarget isDragging={!!this.props.elementDragging} parentId={el.parentId} position={elPos + 1} />
            )}
          </div>
        )
      })

  render() {
    const topLevelContainers = Object.values(this.props.elementsById).filter(
      el => !el.parentId,
    )

    return (
      <div className="bg-light border border-secondary d-flex flex-column p-3 rounded">
        {this.renderElements(topLevelContainers)}
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(
  connect(
    ({ formBuilder: { elementsById, elementsPositionById, elementDragging } }) => ({
      elementsById,
      elementsPositionById,
      elementDragging,
    }),
    null,
  )(BuildingFormContainer),
)
