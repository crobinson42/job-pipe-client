import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import auth from 'containers/Auth/reducer'

const reducers = combineReducers({
  auth,
  form: formReducer,
})

export default reducers
