import * as Types from '../../constant/common';


export const actSetError = (error) => {
    return {
        type : Types.SET_ERROR,
        error
    }
}


export const clearSnackBar = () => {
    return {
        type : Types.SET_ERROR,
        error: ''
    }
}


