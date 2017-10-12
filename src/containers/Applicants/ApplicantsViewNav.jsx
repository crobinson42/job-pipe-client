import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import { history } from 'routes'
import { getQueryParam, setUrlParams } from 'utils/urlUtils'

import { findForms } from 'containers/Forms/actions'

class ApplicantsViewNav extends Component {
  static propTypes = {
    applicants: PropTypes.object.isRequired,
    findForms: PropTypes.func.isRequired,
    forms: PropTypes.array.isRequired,
  }

  // static defaultProps = {}

  componentDidMount() {
    this.props.findForms()
  }

  filterClickHandler = filterName => () => {
    if (!filterName) setUrlParams({ filter: null }, history)
    else setUrlParams({ filter: filterName }, history)
  }

  postingClickHandler = e => {
    const val = e.target.value

    if (!val) setUrlParams({ posting: null }, history)
    else setUrlParams({ posting: val }, history)
  }

  render() {
    const filter = getQueryParam({ key: 'filter' })
    const posting = getQueryParam({ key: 'posting' })

    return (
      <div className="d-flex m-3">
        <div className="mr-3">
          <select
            className="custom-select"
            onChange={this.postingClickHandler}
            value={!posting ? 'all' : posting}
          >
            <option value="">All Postings</option>
            {this.props.forms.map(form => (
              <option value={form._id} key={form._id}>{form.title}</option>
            ))}
          </select>
        </div>

        <div>
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <a
                className={`nav-link ${!filter && 'active'}`}
                onClick={this.filterClickHandler()}
              >
                All{' '}
                <span className="badge badge-secondary">
                  {this.props.applicants.total}
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${filter === 'flagged' && 'active'}`}
                onClick={this.filterClickHandler('flagged')}
              >
                Flagged{' '}
                <span className="badge badge-secondary">
                  {this.props.applicants.totalFlagged}
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${filter === 'archived' && 'active'}`}
                onClick={this.filterClickHandler('archived')}
              >
                Archived{' '}
                <span className="badge badge-secondary">
                  {this.props.applicants.totalArchived}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

const enhance = compose(
  withRouter,
  connect(
    state => ({ applicants: state.applicants, forms: state.forms.forms }),
    { findForms },
  ),
)

export default enhance(ApplicantsViewNav)
