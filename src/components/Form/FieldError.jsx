import React from 'react'
import PropTypes from 'prop-types'

/**
 * This component is meant for use within a reduxForm component
 */

const FieldError = ({ field, form }) => {
  const { fields, submitErrors, syncErrors: errors } = form

  if (
    (fields &&
      fields[field] &&
      fields[field].touched &&
      errors &&
      errors[field]) ||
    (submitErrors && submitErrors[field])
  ) {
    return (
      <div className="form-control-feedback">
        <span className="text-danger align-middle">
          {(errors && errors[field]) || (submitErrors && submitErrors[field])}
        </span>
      </div>
    )
  }

  return null
}

FieldError.propTypes = {
  field: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
}
FieldError.defaultProps = {}

export default FieldError
