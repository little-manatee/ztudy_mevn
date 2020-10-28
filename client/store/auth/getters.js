import { GET_TOKEN } from './actions'

export default {
    [GET_TOKEN](state) {
        return state.token
    },
}
