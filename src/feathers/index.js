/* globals io, feathers,  */
import store from 'store'
import { AUTHENTICATION_SUCCESS } from 'containers/Auth/constants'

let accessToken = null
let socket = io
let client = {}

try {
  socket = io(process.env.REACT_APP_API_URL, { transports: ['websocket'] })
  client = feathers()
    .configure(feathers.hooks())
    .configure(feathers.socketio(socket))
    .configure(feathers.authentication({ storage: window.localStorage }))
} catch (e) {
  console.log('Feathers client, socket.io initialization error')
  throw new Error(e)
}

// we don't want to export a mutable object
const feathersClient = client

// Authenticate if their is a token & dispatch to store
feathersClient.authenticate().then((response) => {
  // if (!response.accessToken) throw Error('no jwt')

  accessToken = response.accessToken

  return feathersClient.passport.verifyJWT(accessToken)
})
  .then(payload => feathersClient.service('users').get(payload.userId))
  .then((user) => {
    feathersClient.set('user', user)

    store.dispatch({
      type: AUTHENTICATION_SUCCESS,
      payload: {
        accessToken,
        user,
      },
    })
  })
  .catch(() => console.info('Authentication needed'))


if (process.env.NODE_ENV !== 'production') {
  window.feathersClient = feathersClient
}

export default feathersClient
