import axios from 'axios'
// import qs from 'query-string'
import store from 'store'

export const api = axios.create({
  // dev
  baseURL: process.env.REACT_APP_API_URL,
  // our backend expects this for data jenk instead of json
  // transformRequest: [qs.stringify],
})

export const apiOptions = {
  returnRejectedPromiseOnError: true,

  interceptors: {
    request: [
      ({ getState }, config) => {
        const { auth } = store.getState()
        const token = auth.token

        if (token) {
          // eslint-disable-next-line
          config.headers['Authorization'] = `${token}`
        }

        return config
      },
    ],
  },
}
