import {
  CLEAR_FORMS,
  CREATE_FORM,
  DELETE_FORM,
  FIND_FORMS,
  GET_FORM,
  REMOVE_FORM,
  UPDATE_FORM,
} from './constants'

import services from 'feathers/services'

const forms = services.forms

export const clearForms = () => ({ type: CLEAR_FORMS })

export const createForm = data => dispatch =>
  forms
    .create(data)
    .then(response => dispatch({ type: CREATE_FORM, payload: response }))

export const deleteForm = id => dispatch =>
  forms
    .remove(id)
    .then(() => dispatch({ type: DELETE_FORM, payload: id }))

/**
 * @return { data: Array, limit: Int, skip: Int, total: Int }
 */
export const findForms = params => dispatch =>
  forms
    .find(params)
    .then(response => dispatch({ type: FIND_FORMS, payload: response }))


export const getForm = id => dispatch =>
  forms
    .get(id)
    .then(response => dispatch({ type: GET_FORM, payload: response }))

export const removeForm = id => dispatch =>
  forms
    .remove(id)
    .then(() => dispatch({ type: REMOVE_FORM }))

export const updateForm = (id, params) => dispatch =>
  forms
    .patch(id, params)
    .then(response => dispatch({ type: UPDATE_FORM, payload: response }))
