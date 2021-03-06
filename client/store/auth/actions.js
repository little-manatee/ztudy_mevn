import client from '@client/utils/axios'

// getters
export const GET_TOKEN = 'GET_TOKEN'

// mutations
export const SET_AUTH = 'SET_AUTH'
export const UNSET_AUTH = 'UNSET_AUTH'

// actions
export const POST_LOGIN = 'POST_LOGIN'
export const POST_REGISTER = 'POST_REGISTER'
export const POST_CONFIRM_EMAIL = 'POST_CONFIRM_EMAIL'
export const POST_RESENT_EMAIL_CONFIRM = 'POST_RESENT_EMAIL_CONFIRM'
export const POST_FORGOT_PASSWORD = 'POST_FORGOT_PASSWORD'
export const POST_RESET_PASSWORD = 'POST_RESET_PASSWORD'

export default {
    [POST_LOGIN]: (context, data) => client.post('auth/login', data),
    [POST_REGISTER]: (context, data) => client.post('auth/register', data),
    [POST_CONFIRM_EMAIL]: (context, data) => client.post('auth/emails/confirm', data),
    [POST_RESENT_EMAIL_CONFIRM]: (context, data) => client.post('auth/emails/resend', data),
    [POST_FORGOT_PASSWORD]: (context, data) => client.post('auth/passwords/email', data),
    [POST_RESET_PASSWORD]: (context, data) => client.post('auth/passwords/reset', data)
}
