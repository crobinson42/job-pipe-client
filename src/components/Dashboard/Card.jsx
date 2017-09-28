import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ children, flushWidth, title }) => (
  <div className="card">
    <div className="card-header">{title}</div>

    {!flushWidth ? <div className="card-body">{children}</div> : children}
  </div>
)

Card.propTypes = {
  children: PropTypes.any.isRequired,
  flushWidth: PropTypes.bool,
  title: PropTypes.string.isRequired,
}
Card.defaultProps = {
  flushWidth: false,
}

export default Card
