import * as Types from '../constant/common'


const initialState = {
    modalType: null,
    modalProps: {
        open: false
    }
}


export default (state = initialState, action) => {
    switch (action.type) {
        case Types.OPEN_MODAL:
            return {
                modalProps: action.modalProps,
                modalType: action.modalType,
                type: action.type
            }
        case Types.CLOSE_MODAL:
            return initialState
        default:
            return state
    }
}
