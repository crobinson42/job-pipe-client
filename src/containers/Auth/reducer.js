import { CLEAR_TOKEN, LOGOUT, AUTHENTICATION_SUCCESS } from './constants'

const initialState = {
  accessToken: null,
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case CLEAR_TOKEN:
      // todo: clear localstorage accessToken by feathers client?

      return {
        ...state,
        accessToken: null,
      }
    case LOGOUT:
      return initialState
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.accessToken,
      }
    default:
      return state
  }
}
