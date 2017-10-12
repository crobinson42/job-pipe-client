import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { getAllQueryParams } from 'utils/urlUtils'

import ApplicantsTable from 'components/Dashboard/ApplicantsTable'
import ApplicantsViewNav from 'containers/Applicants/ApplicantsViewNav'
import Pagination from 'components/Pagination'

import { findApplicants, findApplicantsTotals } from 'containers/Applicants/actions'

const PAGE_LIMIT = 20

/**
 * This component takes url search params to control the page state.
 * The URL search params always take precedence over internal
 * component state.
 */

class Applicants extends Component {
  static propTypes = {
    applicants: PropTypes.object.isRequired,
    findApplicants: PropTypes.func.isRequired,
    findApplicantsTotals: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
  }

  // static defaultProps = {}

  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      urlSearch: props.location.search,
      totalPages: 1,
    }
  }

  componentDidMount() {
    this.fetch()
  }

  componentDidUpdate() {
    this.evaluateFetch()
  }

  /**
   * This method w/ evaluate the location.search params and the component
   * state to see if a fetch is needed and trigger a fetch.
   */
  evaluateFetch = () => {
    if (this.props.location.search !== this.state.urlSearch) this.fetch()
  }

  /**
   * This method will formulate the fetch query based off the url
   * search params, update the state and trigger the fetch
   */
  fetch = () => {
    // get url params
    const urlParams = getAllQueryParams(this.props.location.search)

    const $limit = PAGE_LIMIT
    const page = urlParams.page || 1
    const $skip = (page - 1) * $limit

    const query = {
      query: {
        $limit,
        $skip,
      },
    }

    if (urlParams.filter) {
      query.query[urlParams.filter] = true
    }

    if (urlParams.posting) {
      query.query.form = urlParams.posting
    }

    this.props.findApplicants(query)
    this.props.findApplicantsTotals(query)

    this.setState({
      urlSearch: this.props.location.search,
    })
  }

  render() {
    const page = this.state.page
    const totalPages = Math.ceil(this.props.applicants.total / PAGE_LIMIT)

    return (
      <div className="container-fluid">
        <h4>Applicants</h4>

        <div className="row">
          <ApplicantsViewNav />
        </div>

        <ApplicantsTable applicants={this.props.applicants.applicants} />

        <div className="mt-3">
          {totalPages > 1 && (
            <Pagination currentPage={page} total={totalPages} />
          )}
        </div>
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
    { findApplicants, findApplicantsTotals },
  ),
)

export default enhance(Applicants)
