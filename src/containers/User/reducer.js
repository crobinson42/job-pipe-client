import { LOGOUT, AUTHENTICATION_SUCCESS } from 'containers/Auth/constants'

const initialState = {}

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGOUT:
      return initialState
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        ...action.payload.user,
      }
    default:
      return state
  }
}
