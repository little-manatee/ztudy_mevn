import config from '@config'
import jwt from 'jsonwebtoken'
import User from '@models/User'

export default (req, res, next) => {
    try {
        let token = req.headers.access_token
        if (!token) {
            token = req.body.access_token
        }
        if (!token) {
            token = req.params.token
        }
        if (!token) {
            return res.status(401).json({
                message: 'ERROR 401: Unauthorized.',
            })
        }
        const data = jwt.verify(token, config.jwtSecret)

        User.findById(data.id)
            .then((user) => {
                if (!user) {
                    throw new Error()
                }
                //console.log('authMiddleware OK', user.email)
                req.user = user
                return next()
            })
            .catch((error) => {
                return res.status(401).json({
                    message: 'ERROR 401: Unauthorized.',
                })
            })
    } catch (error) {
        return res.status(400).json({
            message: 'ERROR 400: Bad Request.',
        })
    }
}
