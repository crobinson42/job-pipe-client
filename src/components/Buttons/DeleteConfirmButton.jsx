import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DeleteConfirmButton extends Component {
  static propTypes = {
    confirmCallback: PropTypes.func.isRequired,
  }

  state = {
    confirm: false,
  }

  setConfirmHandler = (confirm = false) => () => this.setState({ confirm })

  render() {
    if (this.state.confirm) {
      return (
        <div>
          <button
            className="btn btn-default"
            onClick={this.setConfirmHandler()}
          >
            Cancel
          </button>{' '}
          <button
            className="btn btn-warning"
            onClick={this.props.confirmCallback}
          >
            Confirm Delete
          </button>
        </div>
      )
    }

    return (
      <button className="btn btn-danger" onClick={this.setConfirmHandler(true)}>
        Delete
      </button>
    )
  }
}

export default DeleteConfirmButton
