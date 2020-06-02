import * as Types from '../constant/user'
import {setToken, getToken, removeToken} from "../utils/auth";


const initialState = {
    message: '',
}


export default (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_ACTIVE_USER_MESSAGE:
            // state.message = action.message
            return Object.assign({}, state, {message: action.message})
        default:
            return state
    }
}
