import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'

// @withRouter
// @connect(state => ({}),
//   {})
class Dashboard extends Component {
  static propTypes = {}

  // static defaultProps = {}

  render() {
    return (
      <div className="container-fluid">
        <h4>
          Data Endpoints
        </h4>

        <table className="table">
          <thead className="thead-default">
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Dashboard
