import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { editElement, updateElementField } from './actions'

import elementMapper from 'components/InputElements/elementMapper'

import Modal from 'components/Modal'

class EditingElementModal extends Component {
  static propTypes = {
    elementsById: PropTypes.object.isRequired,
    editingElement: PropTypes.number,
  }

  static defaultProps = {
    editingElement: null,
  }

  handleClose = () => {
    this.props.editElement(null)
  }

  handleFieldChange = (field, value) => {
    this.props.updateElementField({
      id: this.props.editingElement,
      field,
      value,
    })
  }

  render() {
    const element = this.props.elementsById[this.props.editingElement]

    if (!element) return null

    const ElementEditForm = elementMapper.edit[element.type]

    return (
      <Modal
        onClose={this.handleClose}
        footer={
          <button
            className="btn btn-primary"
            onClick={this.handleClose}
          >
            Done
          </button>
        }
      >
        <ElementEditForm
          element={element}
          fieldChangeHandler={this.handleFieldChange}
        />
      </Modal>
    )
  }
}

export default connect(
  ({ formBuilder: { editingElement, elementsById } }) => ({
    editingElement,
    elementsById,
  }),
  { editElement, updateElementField },
)(EditingElementModal)
