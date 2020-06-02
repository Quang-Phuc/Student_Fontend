import * as Types from '../../constant/user';
import axios from 'axios';
import {BASE_URL, SERVER_URL} from "../../components/LoginBox/constants";
import * as Messages from "../../constant/message";
import {closeModal} from "../web/modal";
import {MESSAGE_LOGIN_NOT_ACTIVE, MESSAGE_USER_NOT_FOUND} from "../../constant/message";
import * as ErrorTypes from "../../constant/common";
import Router from "next/router";

export const actActiveUserRequest = (token) => {
    return dispatch =>
        axios
            .post(`${BASE_URL}/api/v1/users/activeUser`,token)
            .then(res => {

                var error = Messages.MESSAGE_TOKEN_ACTIVE_VALID;
                dispatch([{
                    type: Types.SET_ACTIVE_USER_MESSAGE,
                    message: error,
                }])
            }).catch(res => {
            var error = '';
            if (res.response.statusText == 'Not Found') {
                error = Messages.MESSAGE_TOKEN_INVALID
            }else{
                error = Messages.MESSAGE_TOKEN_ACTIVE_VALID
            }

            dispatch([{
                type: Types.SET_ACTIVE_USER_MESSAGE,
                message: error,
            }])
        })
}


export const actForgetPassword = (user) => {
    return dispatch => {
        axios
            .post(`${BASE_URL}/api/v1/users/forgotPassword`, user)
            .then(res => {
                setTimeout(function () {
                    dispatch([
                        {type: ErrorTypes.SET_ERROR, error: Messages.MESSAGE_FORGET_PASSWORD, variant: 'success'}
                        ,{type: 'SET_IS_LOADING', isLoading: false}, closeModal()])
                }, 2000)
            }).catch(res => {
            dispatch([
                {type: ErrorTypes.SET_ERROR, error: Messages.MESSAGE_FORGET_PASSWORD, variant: 'success'}
                ,{type: 'SET_IS_LOADING', isLoading: false}, closeModal()])
        })
    }

}

export const actResetPasswordRequest = (user) => {
    return dispatch =>
        axios
            .post(`${BASE_URL}/api/v1/users/resetPassword`,user)
            .then(res => {
                Router.push(`/`);
                setTimeout(function () {
                    dispatch([
                        {type: ErrorTypes.SET_ERROR, error: Messages.MESSAGE_RESET_PASSWORD_SUCCESS, variant: 'success'}])
                }, 2000)
            }).catch(res => {
            var error = '';
            if (res.response.statusText == 'Not Found') {
                error = Messages.MESSAGE_TOKEN_INVALID
            }else{
                error = Messages.MESSAGE_TOKEN_ACTIVE_VALID
            }

            dispatch([{
                type: Types.SET_ACTIVE_USER_MESSAGE,
                message: error,
            }])
        })
}

