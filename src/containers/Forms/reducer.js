import {
  CLEAR_FORMS,
  CREATE_FORM,
  DELETE_FORM,
  FIND_FORMS,
  GET_FORM,
  REMOVE_FORM,
  UPDATE_FORM,
} from './constants'

const initialState = {
  forms: [],
  isLoading: false,
  total: 0,
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case CLEAR_FORMS:
      return {
        ...initialState,
      }
    case CREATE_FORM: {
      const newState = {
        ...state,
        forms: [...state.forms.push(action.payload)],
      }

      return newState
    }
    case DELETE_FORM:
      return {
        ...state,
        forms: [...state.forms.filter(f => f._id !== action.payload)],
      }
    case FIND_FORMS: {
      const newState = {
        ...state,
        forms: action.payload.data,
        total: action.payload.total,
      }

      return newState
    }
    case GET_FORM: {
      const newState = {
        ...state,
        forms: [...state.forms.push(action.payload)],
      }

      return newState
    }
    case REMOVE_FORM: {
      const newState = {
        ...state,
      }

      newState.forms = newState.forms.filter(
        ({ _id }) => _id !== action.payload,
      )

      return newState
    }
    case UPDATE_FORM: {
      const newState = {
        ...state,
      }

      for (let i = 0; i < newState.forms.length - 1; i++) {
        if (newState.forms[i]._id === action.payload._id) {
          i = newState.forms.length
          newState.forms[i] = action.payload
        }
      }

      return newState
    }
    default:
      return state
  }
}
