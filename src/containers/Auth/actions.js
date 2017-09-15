import {
  CLEAR_TOKEN,
  LOGOUT,
  SUBMIT_FORGOT_PASSWORD_FORM,
  SUBMIT_LOGIN_FORM,
  SUBMIT_RESET_PASS_FORM,
} from './constants'

export const clearToken = () => ({ type: CLEAR_TOKEN })

export const logout = () => ({ type: LOGOUT })

export const submitForgotPass = ({ email }) => ({
  type: SUBMIT_FORGOT_PASSWORD_FORM,
  payload: {
    request: {
      data: { email },
      method: 'post',
      // url: '/v1/profile/password/reset',
    },
  },
})

export const submitLogin = ({ email, password, vendorId }) => {
  const request = {
    data: { username: email, password },
    method: 'post',
    // url: '/v1/tokens',
    headers: {},
  }

  if (vendorId) {
    request.headers['vendor-id'] = vendorId
  }

  return {
    type: SUBMIT_LOGIN_FORM,
    payload: {
      request,
    },
  }
}

export const submitResetPass = ({ password, token }) => ({
  type: SUBMIT_RESET_PASS_FORM,
  payload: {
    request: {
      data: { password, token },
      method: 'put',
      // url: '/v1/profile/password',
    },
  },
})
