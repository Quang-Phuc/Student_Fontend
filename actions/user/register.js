import * as Types from '../../constant/user';
import * as ErrorTypes from '../../constant/common'
import axios from 'axios';
import {BASE_URL} from "../../components/LoginBox/constants";
import {closeModal} from '../web/modal';
import * as Messages from "../../constant/message";

export const actRegister = (user) => {
    return dispatch =>
        axios
            .post(`${BASE_URL}/api/v1/auth/register`, user)
            .then(res => {
                setTimeout(function () {
                    dispatch([register(res.data), {
                        type: 'SET_IS_LOADING',
                        isLoading: false
                    }, closeModal(), {type: ErrorTypes.SET_ERROR, error: Messages.MESSAGE_REGISTER_SUCCESS, variant: 'success'}])
                }, 2000)
            }).catch(res => {
                console.log(res)

            setTimeout(function () {
                dispatch(
                    [
                        {type: ErrorTypes.SET_ERROR, error: Messages.MESSAGE_REGISTER_ERROR, variant: 'error'},
                        {type: 'SET_IS_LOADING', isLoading: false}])
            }, 1000)
        })
}


export const register = (payload) => {
    return {
        type: Types.REGISTER,
        payload
    }
}
