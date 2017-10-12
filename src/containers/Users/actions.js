import { AUTHENTICATION_SUCCESS, CLEAR_TOKEN, LOGOUT } from './constants'

import feathers from 'feathers'

export const clearToken = () => ({ type: CLEAR_TOKEN })

export const logout = () => ({ type: LOGOUT })

export const authenticate = ({ email, password }) => dispatch => {
  let accessToken = null

  return feathers
    .authenticate({ strategy: 'local', email, password })
    .then(response => {
      accessToken = response.accessToken

      return feathers.passport.verifyJWT(response.accessToken)
    })
    .then(payload => feathers.service('users').get(payload.userId))
    .then(user => {
      feathers.set('user', user)

      dispatch({
        type: AUTHENTICATION_SUCCESS,
        payload: {
          accessToken,
          user,
        },
      })
    })
}
