import * as Types from '../../constant/common';

export const openModal = ({modalProps, modalType}) => {
    return {
        type : Types.OPEN_MODAL,
        modalProps,
        modalType
    }
}

export const closeModal = () => {
    return {
        type : Types.CLOSE_MODAL,
    }
}

export const openModalSignUp = ({modalProps, modalType}) => {
    return {
        type : Types.OPEN_MODAL_SIGN_UP,
        modalProps,
        modalType
    }
}
