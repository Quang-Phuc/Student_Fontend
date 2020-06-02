import * as Types from '../../constant/auth';
import * as ErrorTypes from '../../constant/common'
import axios from 'axios';
import {BASE_URL, SERVER_URL} from "../../components/LoginBox/constants";
import {closeModal} from '../web/modal'
import {MESSAGE_LOGIN_NOT_ACTIVE, MESSAGE_USER_NOT_FOUND, MESSAGE_LOGIN_ERROR} from "../../constant/message";
import Router from "next/router";

export const actLogin = (user) => {
    return dispatch => {
        axios
            .post(`${BASE_URL}/api/v1/auth/login`, user)
            .then(res => {
                axios.post(`${SERVER_URL}/api/Login`, res.data.user)
                setTimeout(function () {
                    dispatch([login(res.data), {type: 'SET_IS_LOADING', isLoading: false}, closeModal()])
                }, 2000)
            }).catch(res => {

            var errorMsg = '';
            var msg = res.response.data.message;
            if (res.response.status === 404) {
                errorMsg = MESSAGE_USER_NOT_FOUND
            } else {
                if (msg == 'Your account not active!!!') {
                    errorMsg = MESSAGE_LOGIN_NOT_ACTIVE
                }else{
                    errorMsg = MESSAGE_LOGIN_ERROR
                }
            }

            setTimeout(function () {
                dispatch(
                    [
                        {type: ErrorTypes.SET_ERROR, error: errorMsg, variant: 'error'},
                        {type: 'SET_IS_LOADING', isLoading: false}])
            }, 1000)
        })
    }

}

export const login = (payload) => {
    return {
        type: Types.LOGIN,
        payload
    }
}


export const logout = () => {
    return dispatch =>
        axios
            .get(`${SERVER_URL}/api/logout`)
            .then(() => {
                dispatch({ type: Types.LOGOUT });
                Router.push('/');
            })
            .catch(err => err);
};
