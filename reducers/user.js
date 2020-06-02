import * as Types from '../constant/user'
import {setToken, getToken, removeToken} from "../utils/auth";


const initialState = {
    user: {}
}


export default (state = initialState, action) => {
    switch (action.type) {
        case Types.REGISTER:
            return state
        default:
            return state
    }
}
