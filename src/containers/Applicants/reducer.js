import {
  CLEAR_APPLICANTS,
  CREATE_APPLICANT,
  FIND_APPLICANTS,
  FIND_APPLICANTS_TOTALS,
  GET_APPLICANT,
  REMOVE_APPLICANT,
  UPDATE_APPLICANT,
} from './constants'

const initialState = {
  applicants: [],
  isLoading: false,
  total: 0,
  totalArchived: 0,
  totalFlagged: 0,
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case CLEAR_APPLICANTS:
      return {
        ...initialState,
      }
    case CREATE_APPLICANT: {
      const newState = {
        ...state,
        applicants: action.payload,
      }

      return newState
    }
    case FIND_APPLICANTS: {
      const newState = {
        ...state,
        applicants: action.payload.data,
      }

      return newState
    }
    case FIND_APPLICANTS_TOTALS:
      return {
        ...state,
        total: action.payload.all,
        totalArchived: action.payload.archived,
        totalFlagged: action.payload.flagged,
      }
    case GET_APPLICANT: {
      const newState = {
        ...state,
        applicants: action.payload,
      }

      return newState
    }
    case REMOVE_APPLICANT: {
      const newState = {
        ...state,
      }

      newState.applicants = newState.applicants.filter(
        ({ _id }) => _id !== action.payload,
      )

      return newState
    }
    case UPDATE_APPLICANT: {
      const newState = {
        ...state,
      }

      for (let i = 0; i < newState.applicants.length - 1; i++) {
        if (newState.applicants[i]._id === action.payload._id) {
          i = newState.applicants.length
          newState.applicants[i] = action.payload
        }
      }

      return newState
    }
    default:
      return state
  }
}
