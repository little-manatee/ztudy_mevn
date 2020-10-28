import { Router } from 'express'
import authController from '@controllers/v1/auth.controller'
import loginValidator from '@svalidators/login'
import registerValidator from '@svalidators/register'
import forgotPasswordValidator from '@svalidators/forgot-password'

const authRouter = new Router()

authRouter.post('/login', authController.login)
authRouter.post('/login', loginValidator, authController.login)
authRouter.post('/register', registerValidator, authController.register)
authRouter.post('/passwords/email', forgotPasswordValidator, authController.forgotPassword)

export default authRouter
