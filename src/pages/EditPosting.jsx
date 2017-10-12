import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import feathers from 'feathers/services'
import { createForm, deleteForm, updateForm } from 'containers/Forms/actions'
import {
  addElement,
  clearFormBuilder,
  setCurrentFormBuilder,
} from 'containers/FormBuilder/actions'

import BuildingFormContainer from 'containers/FormBuilder/BuildingFormContainer'
import EditingElementModal from 'containers/FormBuilder/EditingElementModal'
import DeleteConfirmButton from '../components/Buttons/DeleteConfirmButton'

class EditPosting extends Component {
  static propTypes = {
    addElement: PropTypes.func.isRequired,
    clearFormBuilder: PropTypes.func.isRequired,
    createForm: PropTypes.func.isRequired,
    deleteForm: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    formBuilder: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    setCurrentFormBuilder: PropTypes.func.isRequired,
    updateForm: PropTypes.func.isRequired,
  }

  static defaultProps = {}

  constructor(props) {
    super(props)

    this.state = {
      description: '',
      loading: false,
      title: '',
      titleError: false,
    }

    Object.defineProperty(this, 'id', { get: () => this.props.match.params.id })
  }


  componentDidMount() {
    if (this.id) {
      this.setState({
        loading: true,
      })

      feathers.forms.get(this.id).then((data) => {
        this.setState({
          description: data.description,
          loading: false,
          title: data.title,
        })

        this.props.setCurrentFormBuilder(data.formShape)
      })
    }
  }

  componentWillUnmount() {
    this.props.clearFormBuilder()
  }

  createOrUpdate = () => {
    // reset titleError
    this.setState({
      titleError: false,
    })

    // get title value *required
    const title = this.state.title

    if (!title || title.trim() === '') {
      this.setState({
        titleError: true,
      })

      return
    }

    // get description val
    const description = this.state.description
    // get formShape
    const formShape = {
      elementsById: this.props.formBuilder.elementsById,
      elementsPositionById: this.props.formBuilder.elementsPositionById,
    }

    const data = {
      description,
      formShape,
      title,
      version: new Date().getTime(),
    }

    // check if this form has an id
    // create or update
    if (this.id) {
      // update
      this.props.updateForm(this.id, data)
    } else {
      // create
      this.props.createForm(data)
    }
  }

  deletePosting = () => {
    this.props.deleteForm(this.id)
    this.props.history.push('/dashboard/postings')
  }

  render() {
    const { addElement } = this.props

    return (
      <div className="container-fluid">
        <h4>Posting</h4>

        <div className="my-2">
          <div className="row">
            <div className="col-md-4">
              <input
                className="form-control"
                placeholder="Title"
                onChange={e => this.setState({ title: e.target.value })}
                type="text"
                value={this.state.title}
              />

              {this.state.titleError && (
                <span className="text-danger">Required</span>
              )}
            </div>

            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="description"
                onChange={e => this.setState({ description: e.target.value })}
                type="text"
                value={this.state.description}
              />
            </div>
          </div>

          <div className="row m-3">
            <DeleteConfirmButton confirmCallback={this.deletePosting} />
            {'\u00A0'}
            <button className="btn btn-success" onClick={this.createOrUpdate}>
              Save Posting
            </button>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-md-4">
            <ul className="list-group">
              <li className="list-group-item">
                <div className="text-center">Add Form Elements</div>
              </li>
              <li className="list-group-item">
                <a
                  className="btn btn-outline-info"
                  onClick={() => addElement('textBox')}
                >
                  Text Box
                </a>
              </li>
              <li className="list-group-item">
                <a
                  className="btn btn-outline-info"
                  onClick={() => addElement('sectionTitle')}
                >
                  Section Title
                </a>
              </li>
              <li className="list-group-item">
                <a
                  className="btn btn-outline-info"
                  onClick={() => addElement('divider')}
                >
                  Divider
                </a>
              </li>
              <li className="list-group-item">
                <a
                  className="btn btn-outline-info"
                  onClick={() => addElement('text')}
                >
                  Text Input
                </a>
              </li>
              <li className="list-group-item">
                <a
                  className="btn btn-outline-info"
                  onClick={() => addElement('radio')}
                >
                  Radio Button
                </a>
              </li>
              <li className="list-group-item">
                <a
                  className="btn btn-outline-info"
                  onClick={() => addElement('checkbox')}
                >
                  Checkbox
                </a>
              </li>
              <li className="list-group-item">
                <a
                  className="btn btn-outline-info"
                  onClick={() => addElement('select')}
                >
                  Select Dropdown
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-8">
            <BuildingFormContainer />
          </div>

          <EditingElementModal />
        </div>
      </div>
    )
  }
}

const enhance = compose(
  withRouter,
  connect(state => ({ formBuilder: state.formBuilder }), {
    addElement,
    clearFormBuilder,
    createForm,
    deleteForm,
    setCurrentFormBuilder,
    updateForm,
  }),
)

export default enhance(EditPosting)
