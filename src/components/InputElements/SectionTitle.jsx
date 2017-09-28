import React from 'react'
// import PropTypes from 'prop-types'

const SectionTitle = ({ value }) => {
  return (
    <div className="py-3">
      <h3>{value}</h3>
    </div>
  )
}

SectionTitle.propTypes = {}
SectionTitle.defaultProps = {}

export default SectionTitle
