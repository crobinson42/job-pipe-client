import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteElement, editElement } from './actions'

class EditableElementControls extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    deleteElement: PropTypes.func.isRequired,
    editElement: PropTypes.func.isRequired,
    element: PropTypes.object.isRequired,
  }

  // static defaultProps = {}

  state = {
    showEditControls: false,
  }

  deleteElement = () => this.props.deleteElement(this.props.element.id)

  editElement = () => this.props.editElement(this.props.element.id)

  handleMouseEnter = () => {
    this.setState({
      showEditControls: true,
    })
  }

  handleMouseLeave = () => {
    this.setState({
      showEditControls: false,
    })
  }

  renderEditControls = () => {
    if (this.state.showEditControls) {
      return (
        <div
          style={{ position: 'relative', bottom: 0, left: 0, height: '50px' }}
        >
          {this.props.element.editable && (
            <span className="bg-primary p-1 rounded-bottom">
              <a onClick={this.editElement}>Edit</a>
            </span>
          )}{' '}
          <span className="bg-danger p-1 rounded-bottom">
            <a onClick={this.deleteElement}>X</a>
          </span>
        </div>
      )
    }

    return null
  }

  render() {
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={{ position: 'relative' }}
      >
        {this.props.children}

        {this.renderEditControls()}
      </div>
    )
  }
}

export default connect(null, { deleteElement, editElement })(
  EditableElementControls,
)
