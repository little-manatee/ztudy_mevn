import client from '@client/utils/axios'

// mutations
export const SET_AUTH = 'SET_AUTH'
export const UNSET_AUTH = 'UNSET_AUTH'

// actions
export const POST_LOGIN = 'POST_LOGIN'
export const POST_REGISTER = 'POST_REGISTER'
export const POST_FORGOT_PASSWORD = 'POST_FORGOT_PASSWORD'

export default {
    [POST_LOGIN]: (context, data) => client.post('auth/login', data),
    [POST_REGISTER]: (context, data) => client.post('auth/register', data),
    [POST_FORGOT_PASSWORD]: (context, data) => client.post('auth/passwords/email', data)
}
