import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import auth from 'containers/Auth/reducer'
import formBuilder from 'containers/FormBuilder/reducer'
import user from 'containers/User/reducer'

const reducers = combineReducers({
  auth,
  form: formReducer,
  formBuilder,
  user,
})

export default reducers
