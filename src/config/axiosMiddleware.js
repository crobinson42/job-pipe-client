import { multiClientMiddleware } from 'redux-axios-middleware'

import { api, apiOptions } from './api'

export default () => multiClientMiddleware(
  {
    default: {
      client: api,
      options: apiOptions,
    },
  },
)
