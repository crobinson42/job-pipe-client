import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import ElementContainer from 'components/InputElements/ElementContainer'

class Posting extends Component {
  static propTypes = {}

  // static defaultProps = {}

  static fields = [
    {
      type: 'text',
      label: 'First Name',
      position: 1,
      validation: {
        min: undefined,
        max: undefined,
        required: true,
      },
    },
    {
      type: 'text',
      label: 'Last Name',
      position: 2,
      validation: {
        min: undefined,
        max: undefined,
        required: true,
      },
    },
    {
      type: 'email',
      label: 'Email',
      position: 3,
      validation: {
        min: undefined,
        max: undefined,
        required: true,
      },
    },
    {
      type: 'radio',
      label: 'Experience',
      children: [
        {
          label: '1-2 years',
          position: 1,
        },
        {
          label: '2-5 years',
          position: 2,
        },
        {
          label: '5+ years',
          position: 3,
        },
      ],
      position: 4,
      validation: {
        required: true,
      },
    },
    {
      type: 'checkbox',
      label: 'Driver License',
      position: 5,
    },
    {
      type: 'select',
      label: 'Shift Availability',
      children: [
        {
          label: 'Day Shift',
          position: 1,
        },
        {
          label: 'Swing Shift',
          position: 2,
        },
        {
          label: 'Grave Yard Shift',
          position: 3,
        },
      ],
      position: 5,
    },
    {
      type: 'date',
      label: 'Available Start Date',
      position: 5,
      validation: {
        required: true,
      },
    },
  ]

  render() {
    const inputs = this.constructor.fields.map(field => <ElementContainer element={field} />)

    return (
      <div className="container-fluid">
        <h4>Posting</h4>

        {inputs}
      </div>
    )
  }
}

export default Posting
