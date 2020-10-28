import Axios from 'axios'

const axios = Axios.create({
    baseURL: '/api/v1/',
})

axios.interceptors.request.use(function(config) {
    return config
})

export default axios