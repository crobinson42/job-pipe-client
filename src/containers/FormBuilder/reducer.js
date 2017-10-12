/* eslint-disable no-underscore-dangle */
import {
  ADD_ELEMENT,
  CLEAR_FORMBUILDER,
  DELETE_ELEMENT,
  EDITING_ELEMENT,
  ELEMENT_DRAGGING,
  MOVE_ELEMENT_POSITION,
  SET_CURRENT_FORMBUILDER,
  UPDATE_ELEMENT_FIELD,
} from './constants'

import { getSiblings } from './utils'

const initialState = {
  editingElement: null,
  elementsById: {},
  elementsPositionById: {},
  elementDragging: null,
}

export default function formBuilder(state = initialState, action) {
  switch (action.type) {
    case ADD_ELEMENT: {
      // get number of el under parent "0" (no parent)
      const position = getSiblings({
        elementsById: state.elementsById,
        parentId: action.payload.parentId,
      }).length

      return {
        ...state,
        elementsById: {
          ...state.elementsById,
          [action.payload.id]: action.payload,
        },
        elementsPositionById: {
          ...state.elementsPositionById,
          // we want a zero index position
          [action.payload.id]: position,
        },
      }
    }
    case CLEAR_FORMBUILDER:
      return {
        ...initialState,
        ...initialState.elementsPositionById,
        ...initialState.elementsById,
      }
    case DELETE_ELEMENT: {
      const newState = { ...state }

      delete newState.elementsById[action.payload]
      delete newState.elementsPositionById[action.payload]

      newState.elementsById = {
        ...newState.elementsById,
        ...newState.elementsPositionByIdById,
      }

      return newState
    }
    case EDITING_ELEMENT:
      return {
        ...state,
        editingElement: action.payload,
      }
    case ELEMENT_DRAGGING:
      return {
        ...state,
        elementDragging: action.payload,
      }
    case MOVE_ELEMENT_POSITION: {
      const { id, parentId, position } = action.payload

      const newState = {
        ...state,
        elementsById: {
          ...state.elementsById,
          [id]: {
            ...state.elementsById[id],
            parentId,
          },
        },
        elementsPositionById: { ...state.elementsPositionById },
      }

      // console.log(`previous pos ${state.elementsPositionById[id]} new pos ${position}`, action)

      // update all positions under previous parentId
      const previousParent = state.elementsById[id].parentId
      // const previousPosition = state.elementsPositionById[id]

      const previousSiblings = Object.values(newState.elementsById)
        // filter for siblings
        .filter(el => el.parentId === previousParent)
        // exclude the el being moved
        .filter(el => el.id !== id)
        // make list of key/val -> id/pos
        .map(el => [[el.id], newState.elementsPositionById[el.id]])
        // sort by pos index
        .sort((a, b) => (a[1] < b[1] ? -1 : 1))

      // console.log('previousSiblings', previousSiblings)

      // shift all siblings positions index
      for (let i = 0; i < previousSiblings.length; i++) {
        const _id = previousSiblings[i][0]
        newState.elementsPositionById[_id] = i
      }

      // update all positions under new parentId
      const newSiblings = Object.values(newState.elementsById)
        // filter for siblings
        .filter(el => el.parentId === parentId)
        // exclude the el being moved
        .filter(el => el.id !== id)
        // make list of key/val -> id/pos
        .map(el => [[el.id], newState.elementsPositionById[el.id]])
        // sort by pos index
        .sort((a, b) => (a[1] < b[1] ? -1 : 1))

      // shift all siblings from index of elements new position
      for (let i = position; i < newSiblings.length; i++) {
        const _id = newSiblings[i][0]
        newState.elementsPositionById[_id] = i + 1
      }

      newState.elementsPositionById[id] = position

      return newState
    }
    case SET_CURRENT_FORMBUILDER:
      return {
        ...state,
        ...action.payload,
      }
    case UPDATE_ELEMENT_FIELD: {
      const { id, field, value } = action.payload
      const newState = { ...state }

      newState.elementsById = { ...state.elementsById }
      newState.elementsById[id][field] = value

      return newState
    }
    default:
      return state
  }
}
