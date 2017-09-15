import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import axiosMiddlewares from 'config/axiosMiddleware'
import reducers from './reducers'
import { recoverReduxState } from 'config/localStorageUtils.js'
import { saveStateSubscribor, failedAxiosRequestMiddleware } from 'config/storeUtils'

const middlewares = [
  axiosMiddlewares(),
  failedAxiosRequestMiddleware,
  thunk,
]

const initialState = recoverReduxState()

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    (window.devToolsExtension ? window.devToolsExtension() : f => f),
  ),
)

store.subscribe(saveStateSubscribor)

export default store
