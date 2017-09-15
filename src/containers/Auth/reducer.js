import { CLEAR_TOKEN, LOGOUT, SUBMIT_LOGIN_FORM } from './constants'

const initialState = {}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case CLEAR_TOKEN:
      return {
        ...state,
        token: null,
      }
    case LOGOUT:
      return initialState
    case `${SUBMIT_LOGIN_FORM}_SUCCESS`:
      return {
        ...state,
        token: action.payload.data.token,
        ...action.payload.data.user,
      }
    default:
      return state
  }
}
