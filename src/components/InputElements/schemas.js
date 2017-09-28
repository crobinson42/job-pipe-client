const schemas = {
  checkbox: {
    editable: true,
    type: 'checkbox',
    fieldLabel: 'Checkbox Text',
  },

  divider: {
    type: 'divider',
  },

  radio: {
    editable: true,
    elementChildren: [
      {
        label: 'Option 1',
      },
      {
        label: 'Option 2',
      },
      {
        label: 'Option 3',
      },
    ],
    label: 'Label',
    type: 'radio',
    validation: {},
  },

  select: {
    editable: true,
    elementChildren: [
      {
        label: 'Option 1',
      },
      {
        label: 'Option 2',
      },
      {
        label: 'Option 3',
      },
    ],
    label: 'Label',
    type: 'select',
  },

  sectionTitle: {
    editable: true,
    type: 'sectionTitle',
    value: 'Section Title',
  },

  text: {
    editable: true,
    label: 'Label',
    type: 'text',
  },

  textBox: {
    editable: true,
    type: 'textBox',
    value: 'Edit this text box...',
  },
}

export default schemas
