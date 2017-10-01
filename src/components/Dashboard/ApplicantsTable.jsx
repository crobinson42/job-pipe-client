import React from 'react'
// import PropTypes from 'prop-types'

import Card from 'components/Dashboard/Card'

const ApplicantsTable = () => {
  return (
    <Card flushWidth title="All Applicants">
      <table className="table">
        <thead className="thead">
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

      <div>
        <nav>
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link" tabIndex="-1">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link">1</a>
            </li>
            <li className="page-item">
              <a className="page-link">2</a>
            </li>
            <li className="page-item">
              <a className="page-link">3</a>
            </li>
            <li className="page-item">
              <a className="page-link">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </Card>
  )
}

ApplicantsTable.propTypes = {}
ApplicantsTable.defaultProps = {}

export default ApplicantsTable
