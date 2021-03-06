import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import applicants from 'containers/Applicants/reducer'
import auth from 'containers/Auth/reducer'
import forms from 'containers/Forms/reducer'
import formBuilder from 'containers/FormBuilder/reducer'
import user from 'containers/User/reducer'

const reducers = combineReducers({
  applicants,
  auth,
  forms,
  form: formReducer,
  formBuilder,
  user,
})

export default reducers
