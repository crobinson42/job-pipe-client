import {
  endsWith,
  throttle,
} from 'lodash-es'

// import store from 'store'
import { logout } from 'containers/Auth/actions'
// import { saveReduxState } from './localStorageUtils.js'
import { history } from 'routes'

export const saveStateSubscribor = throttle(() => {
  // const { user, vendors } = store.getState()
  //
  // saveReduxState({
  //   user,
  //   vendors,
  // })
}, 3000)

export const failedAxiosRequestMiddleware = ({ dispatch }) => next => (action) => {
  const status = action.error && action.error.response && action.error.response.status

  if (endsWith(action.type, '_FAIL') && status === 401) {
    // clear the user state
    dispatch(logout())
    // redirect to login
    history.push('/login')

    return
  }

  next(action)
}
