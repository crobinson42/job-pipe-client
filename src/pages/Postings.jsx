import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import moment from 'moment-timezone'

import { history } from 'routes'
import { findForms } from 'containers/Forms/actions'

class CreatePosting extends Component {
  static propTypes = {
    findForms: PropTypes.func.isRequired,
    forms: PropTypes.array.isRequired,
  }

  // static defaultProps = {}

  componentDidMount() {
    this.props.findForms()
  }

  render() {
    return (
      <div className="container-fluid">
        <h4>Postings</h4>

        <div className="py-3">
          <Link className="btn btn-primary" to="/dashboard/postings/create">
            New Posting
          </Link>
        </div>

        <table className="table table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Created</th>
            </tr>
          </thead>

          <tbody>
            {this.props.forms.map(f => (
              <tr key={f._id} onClick={() => history.push(`/dashboard/postings/${f._id}`)}>
                <td>{f.title}</td>
                <td>{f.description.substr(0, 70)}</td>
                <td>{moment(f.createdAt).format('MMM Do YYYY, h:mm:ss a')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

const enhance = compose(
  withRouter,
  connect(state => ({ forms: state.forms.forms }), { findForms }),
)

export default enhance(CreatePosting)
