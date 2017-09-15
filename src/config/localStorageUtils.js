import { logError } from '../utils/logUtils'
// import UserReducer from 'containers/User/reducer'

const LS_REDUX_KEY = 'app::redux::state'

/**
 * Checks to see if localStorage is available in the global env
 * @return {boolean}
 */
export const isLocalStorageAvailable = () => {
  if (!localStorage) {
    logError('LocalStorage is not available')

    return false
  }

  return true
}

/**
 * This will attempt to recover redux state from localStorage.
 * If no state is found or it errors, an empty object is returned.
 * If state is found, the tokenExpire prop is checked on the user key.
 * If the tokenExpire is past, we run the reducer to reset the user to initial state.
 * @return {object}
 */
export const recoverReduxState = () => {
  if (!isLocalStorageAvailable()) return {}

  let recoveredState = {}

  try {
    recoveredState = JSON.parse(localStorage.getItem(LS_REDUX_KEY)) || recoveredState
  } catch (e) {
    // errored - delete the existing localStorage state
    localStorage.removeItem(LS_REDUX_KEY)

    logError('LocalStorage is not available')
  }

  // check tokenExpire
  const tokenExpire = recoveredState.user && recoveredState.user.tokenExpire

  if (tokenExpire < (new Date().getTime())) {
    // recoveredState.user = UserReducer(undefined, { type: undefined })
  }

  return recoveredState
}

/**
 * This method will save the redux state object passed in.
 * @param {object} state
 * @return {boolean}
 */
export const saveReduxState = (state) => {
  if (!isLocalStorageAvailable()) return false

  try {
    localStorage.setItem(LS_REDUX_KEY, JSON.stringify(state))
  } catch (e) {
    // errored - delete the existing localStorage state
    localStorage.removeItem(LS_REDUX_KEY)

    logError('LocalStorage is not available')

    return false
  }

  return true
}
