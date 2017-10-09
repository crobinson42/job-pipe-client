import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import ApplicantsTable from 'components/Dashboard/ApplicantsTable'
import ApplicantsViewNav from 'containers/Applicants/ApplicantsViewNav'

import { findApplicants } from 'containers/Applicants/actions'

class Applicants extends Component {
  static propTypes = {}

  // static defaultProps = {}

  componentDidMount() {
    this.fetch()
  }

  fetch = () =>
    this.props.findApplicants({
      query: this.props.applicants.query,
      skip: this.props.applicants.skip,
    })

  render() {
    return (
      <div className="container-fluid">
        <h4>Applicants</h4>

        <div className="row">
          <ApplicantsViewNav />
        </div>

        <ApplicantsTable />
      </div>
    )
  }
}

const enhance = compose(
  withRouter,
  connect(
    state => ({
      applicants: state.applicants,
    }),
    { findApplicants },
  ),
)

export default enhance(Applicants)
