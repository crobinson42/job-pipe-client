/* globals io, feathers,  */
let socket
let client

console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL)

try {
  socket = io(process.env.REACT_APP_API_URL, { transports: ['websocket'] })
  client = feathers()
    .configure(feathers.hooks())
    .configure(feathers.socketio(socket))
    .configure(feathers.authentication())
} catch (e) {
  console.log('Feathers client, socket.io initialization error')
  throw new Error(e)
}

export default client
