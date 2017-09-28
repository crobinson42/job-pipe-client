import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addElement } from 'containers/FormBuilder/actions'

import BuildingFormContainer from 'containers/FormBuilder/BuildingFormContainer'
import EditingElementModal from 'containers/FormBuilder/EditingElementModal'

class CreatePosting extends Component {
  static propTypes = {
    addElement: PropTypes.func.isRequired,
  }

  static defaultProps = {}

  render() {
    const { addElement } = this.props

    return (
      <div className="container-fluid">
        <h4>New Posting</h4>

        <div className="row">
          <div className="col-md-4">
            <ul className="list-group">
              <li className="list-group-item">
                <div className="text-center">Add Form Elements</div>
              </li>
              <li className="list-group-item">
                <a className="btn btn-primary" onClick={() => addElement('textBox')}>
                  Text Box
                </a>
              </li>
              <li className="list-group-item">
                <a className="btn btn-primary" onClick={() => addElement('sectionTitle')}>
                  Section Title
                </a>
              </li>
              <li className="list-group-item">
                <a className="btn btn-primary" onClick={() => addElement('divider')}>
                  Divider
                </a>
              </li>
              <li className="list-group-item">
                <a className="btn btn-primary" onClick={() => addElement('text')}>
                  Text Input
                </a>
              </li>
              <li className="list-group-item">
                <a className="btn btn-primary" onClick={() => addElement('radio')}>
                  Radio Button
                </a>
              </li>
              <li className="list-group-item">
                <a className="btn btn-primary" onClick={() => addElement('checkbox')}>
                  Checkbox
                </a>
              </li>
              <li className="list-group-item">
                <a className="btn btn-primary" onClick={() => addElement('select')}>
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

export default connect(null, { addElement })(CreatePosting)
