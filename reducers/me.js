import * as Types from '../constant/me'
import {setToken, getToken, removeToken} from "../utils/auth";


const initialState = {
    profile: {}
}


export default (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_INFO:
            return {...state, profile: action.payload}
        default:
            return state
    }
}
