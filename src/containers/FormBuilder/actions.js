import {
  ADD_ELEMENT,
  DELETE_ELEMENT,
  ELEMENT_DRAGGING,
  EDITING_ELEMENT,
  MOVE_ELEMENT_POSITION,
  UPDATE_ELEMENT_FIELD,
} from './constants'
import elementSchemas from 'components/InputElements/schemas'

import { getSiblings } from './utils'

export const addElement = type => (dispatch) => {
  const payload = {
    // deep clone
    ...JSON.parse(JSON.stringify(elementSchemas[type])),
    id: Math.random(),
    parentId: 0,
  }

  dispatch({
    type: ADD_ELEMENT,
    payload,
  })
}

export const deleteElement = id => ({ type: DELETE_ELEMENT, payload: id })

export const editElement = (id = null) => ({
  type: EDITING_ELEMENT,
  payload: id,
})

// expects the payload param to be an element ID
export const elementDragging = (payload = null) => ({
  type: ELEMENT_DRAGGING,
  payload,
})

export const moveElement = (id, parentId, position) => (dispatch, getState) => {
  const { formBuilder: { elementsById } } = getState()

  let pos = position

  // if the position is not zero - make sure it's correct
  if (!pos) {
    // make sure the correct position number in the event we're
    // trying to move to the last position index under parent
    const numberOfSiblings = getSiblings({ elementsById, parentId }).length

    pos = position >= numberOfSiblings ? numberOfSiblings : position
  }

  const payload = {
    id,
    parentId,
    position: pos,
  }

  dispatch({
    type: MOVE_ELEMENT_POSITION,
    payload,
  })
}

/**
 * Util method that updates a field - the params object is passed straight to payload for the reducer
 * @param params {object}
 */
export const updateElementField = params => ({
  type: UPDATE_ELEMENT_FIELD,
  payload: params,
})
