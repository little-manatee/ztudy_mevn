import { Router } from 'express'
import authController from '@controllers/v1/auth.controller'
import loginValidator from '@svalidators/login'
import registerValidator from '@svalidators/register'
import emailConfirmValidator from '@svalidators/email-confirm'
import authMiddleware from '@middleware/auth'
import forgotPasswordValidator from '@svalidators/forgot-password'
import resetPasswordValidator from '@svalidators/reset-password'

const authRouter = new Router()

authRouter.post('/login', loginValidator, authController.login)
authRouter.post('/register', registerValidator, authController.register)
authRouter.post('/emails/confirm', emailConfirmValidator, authController.confirmEmail)
authRouter.post('/emails/resend', authMiddleware, authController.resendConfirmEmail)
authRouter.post('/passwords/email', forgotPasswordValidator, authController.forgotPassword)
authRouter.post('/passwords/reset', resetPasswordValidator, authController.resetPassword)

export default authRouter
