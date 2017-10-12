import {
  CLEAR_APPLICANTS,
  CREATE_APPLICANT,
  FIND_APPLICANTS,
  FIND_APPLICANTS_TOTALS,
  GET_APPLICANT,
  REMOVE_APPLICANT,
  UPDATE_APPLICANT,
} from './constants'

import services from 'feathers/services'

const applicants = services.applicants

export const clearApplicants = () => ({ type: CLEAR_APPLICANTS })

export const createApplicant = data => dispatch =>
  applicants
    .create(data)
    .then(response => dispatch({ type: CREATE_APPLICANT, payload: response }))

/**
 * @return { data: Array, limit: Int, skip: Int, total: Int }
 */
export const findApplicants = params => dispatch =>
  applicants
    .find(params)
    .then(response => dispatch({ type: FIND_APPLICANTS, payload: response }))

// same as findApplicants() but this sets $limit to ZERO & dispatches
export const findApplicantsTotals = query => dispatch =>
  Promise.all([
    applicants.find({ query: { ...query.query, archived: [true, false], flagged: [true, false], $limit: 0, $skip: 0 } }),
    applicants.find({ query: { ...query.query, archived: false, flagged: true, $limit: 0, $skip: 0 } }),
    applicants.find({ query: { ...query.query, archived: true, flagged: false, $limit: 0, $skip: 0 } }),
  ]).then(([all, flagged, archived]) =>
    dispatch({
      type: FIND_APPLICANTS_TOTALS,
      payload: { all: all.total, archived: archived.total, flagged: flagged.total },
    }),
  )

export const getApplicant = id => dispatch =>
  applicants
    .get(id)
    .then(response => dispatch({ type: GET_APPLICANT, payload: response }))

export const removeApplicant = id => dispatch =>
  applicants.remove(id).then(() => dispatch({ type: REMOVE_APPLICANT }))

export const updateApplicant = (id, params) => dispatch =>
  applicants
    .patch(id, params)
    .then(response => dispatch({ type: UPDATE_APPLICANT, payload: response }))
