/**
 * Util method to get an array of siblings belonging to same parent
 * @param elementsById {object}
 * @param parentId {number}
 */
export const getSiblings = ({ elementsById, parentId }) =>
  Object.keys(elementsById).filter(id => elementsById[id].parentId === parentId)

/**
 * This util method will convert the passed object from redux state 'elementsPositionById'
 * into an array that looks like this: [ [id, pos], [id. pos] ]
 * @param elementsPositionById {object}
 * @return {Array}
 */
export const makeElementsPositionArray = (elementsPositionById = {}) => {
  if (typeof elementsPositionById !== 'object') {
    throw new Error(
      'makeElementsPosition() param must be an object from the state tree',
    )
  }

  const list = Object.entries(elementsPositionById).sort(
    (a, b) => (a[1] < b[1] ? -1 : 1),
  )

  return list
}

/**
 * This method reverses the util method 'makeElementPositionArray'
 * by taking an array of arrays (ie: [ [id, pos] ]) and converting
 * it to an object of keys (ie: { id: pos }).
 * @param elementsList {array}
 * @return {Object}
 */
export const makeElementsPositionById = (elementsList = []) =>
  elementsList.reduce((acc, pair) => {
    acc[pair[0]] = pair[1]

    return acc
  }, {})
