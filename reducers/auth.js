import * as Types from '../constant/auth'
import {setToken, getToken, removeToken} from "../utils/auth";


const initialState = {
    user: {},
    accessToken: getToken('token'),
    error: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case Types.LOGIN:
            var payload = action.payload
            state.user = payload.user
            state.accessToken = payload.accessToken
            setToken('token', state.accessToken)
            return state
        case Types.LOGOUT:
            return { ...state, user: null };
        case Types.SET_FORM_AUTH_ERROR:
            state.error = action.error
            return state
        case Types.SET_USER: {
            return { ...state, user: action.user };
        }
        case Types.SET_ERROR: {
            return { ...state, error: action.message, variant: action.variant };
        }
        default:
            return state
    }
}
