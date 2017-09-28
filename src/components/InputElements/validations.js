// All validation methods return true if validation passes

const validationsMap = {
  max: (element, maxLength) => (element.value && element.value.length <= maxLength),

  min: (element, minLength) => (element.value && element.value.length >= minLength),

  required: (element) => {
    if (element.type === 'checkbox') {
      return element.checked
    } else if (element.type === 'radio') {
      // convert nodeList to array
      const matchingRadioElements = Array.prototype.slice.call(document.querySelectorAll(`[name="${element.name}"]`))
      // filter to make sure at least one of the matching elements are checked
      return !!matchingRadioElements.filter(e => e.checked).length
    }

    return (element.value && element.value.length)
  },
}

export default validationsMap
