import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import { history } from 'routes'

// @connect(state => ({}),
//   {})
class CreatePosting extends Component {
  static propTypes = {}

  // static defaultProps = {}

  render() {
    return (
      <div className="container-fluid">
        <h4>Postings</h4>

        <div className="py-3">
          <Link className="btn btn-primary" to="/dashboard/postings/create">New Posting</Link>
        </div>

        <table className="table">
          <thead className="thead-default">
            <tr>
              <th>Title</th>
              <th>Created</th>
              <th>Updated</th>
            </tr>
          </thead>

          <tbody>
            <tr onClick={() => history.push('/dashboard/postings/123')}>
              <td>Security Guard</td>
              <td>1/1/2017</td>
              <td>3/15/2017</td>
            </tr>
            <tr onClick={() => history.push('/dashboard/postings/432')}>
              <td>Dispatcher</td>
              <td>1/1/2017</td>
              <td>3/15/2017</td>
            </tr>
            <tr onClick={() => history.push('/dashboard/postings/53432')}>
              <td>Patrol Driver</td>
              <td>1/1/2017</td>
              <td>3/15/2017</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default withRouter(CreatePosting)
