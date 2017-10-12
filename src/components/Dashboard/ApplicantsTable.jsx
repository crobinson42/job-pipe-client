import React from 'react'
import PropTypes from 'prop-types'

import Card from 'components/Dashboard/Card'

const ApplicantsTable = ({ applicants = [] }) => {
  return (
    <Card flushWidth title="All Applicants">
      <table className="table">
        <thead className="thead">
          <tr>
            <th />
            <th>Name</th>
            <th>Created</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map(a => (
            <tr key={a._id}>
              <th scope="row">{a.flagged && '🚩'}</th>
              <td>{`${a.firstName} ${a.lastName}`}</td>
              <td>{a.createdAt}</td>
              <td>{a.phone}</td>
              <td>{a.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

ApplicantsTable.propTypes = {
  applicants: PropTypes.array.isRequired,
}
ApplicantsTable.defaultProps = {}

export default ApplicantsTable
