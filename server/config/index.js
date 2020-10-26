import dotenv from 'dotenv'

dotenv.config()

export default {
    url: process.env.APP_URL || 'http://localhost:3000',
    databaseUrl:
        process.env.DATABASE_URL ||
        'mongodb://localhost:27017/ztudy_mevn_mongo'
}
