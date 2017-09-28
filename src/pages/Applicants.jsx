import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'

import ApplicantsTable from 'components/Dashboard/ApplicantsTable'

// @withRouter
// @connect(state => ({}),
//   {})
class Dashboard extends Component {
  static propTypes = {}

  // static defaultProps = {}

  render() {
    return (
      <div className="container-fluid">
        <h4>Applicants</h4>

        <div className="row">
          <div className="col-md-6 col-lg-4 mx-auto my-3 justify-content-center">
            <ul className="nav nav-pills nav-fill">
              <li className="nav-item">
                <a className="nav-link active">All <span className="badge badge-secondary">40</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Flagged <span className="badge badge-secondary">4</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Archived <span className="badge badge-secondary">7</span></a>
              </li>
            </ul>
          </div>
        </div>

        <ApplicantsTable />
      </div>
    )
  }
}

export default Dashboard
