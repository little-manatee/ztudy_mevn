import { Router } from 'express'
import authController from '@controllers/v1/auth.controller'
import loginValidator from '@svalidators/login'
import registerValidator from '@svalidators/register'

const authRouter = new Router()

authRouter.post('/login', authController.login)
authRouter.post('/login', loginValidator, authController.login)
authRouter.post('/register', registerValidator, authController.register)

export default authRouter
