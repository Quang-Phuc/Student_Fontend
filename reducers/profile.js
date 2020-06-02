import * as Types from '../constant/user'


const initialState = {
    profile: {},
}


export default (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_PROFILE:
            return {
                ...state,
                profile: action.payload
            }
        default:
            return state
    }
}
