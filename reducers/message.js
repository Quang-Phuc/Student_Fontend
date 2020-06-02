import * as Types from '../constant/common'
import {setToken, getToken, removeToken} from "../utils/auth";


const initialState = {
    variant: '',
    error: ''
}


export default (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_ERROR:
            var { error, variant } = action;
            state.variant = variant;
            state.error = error;
            return {...state}
        default:
            return state
    }
}
