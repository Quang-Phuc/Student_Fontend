import {callApiToken} from "../../utils/apiCaller";
import {BASE_URL} from "../../constant/common";
import * as Types from "../../constant/me";
import * as ErrorTypes from '../../constant/common';
import * as Messages from "../../constant/message";

export const actGetUserInfoRequest = () => {
    return dispatch => {
        return callApiToken(`${BASE_URL}/api/v1/users/me`, 'GET', null).then( res => {
            dispatch(GetUserInfo(res.data))
        });
    }
}

export const GetUserInfo = (payload) => {
    return {
        type : Types.GET_INFO,
        payload
    }
}


export const actUpdatePassword = (user) => {
    return dispatch => {
        return callApiToken(`${BASE_URL}/api/v1/users/updatePassword`, 'POST', user).then( res => {
            if(!res) {
                dispatch(
                    [
                        {type: ErrorTypes.SET_ERROR, error: Messages.MESSAGE_UPDATE_PASSWORD_FAIL, variant: 'error'}])
            }
            if(res.status == 204) {
                dispatch([updatePassword(res.data), {type: ErrorTypes.SET_ERROR, error: Messages.MESSAGE_UPDATE_PASSWORD_SUCCESS, variant: 'success'}])
            }else{
                dispatch(
                    [
                        {type: ErrorTypes.SET_ERROR, error: Messages.MESSAGE_UPDATE_PASSWORD_FAIL, variant: 'error'}])
            }
        }).catch(res => {
            dispatch([updatePassword(res.data), {type: ErrorTypes.SET_ERROR, error: Messages.MESSAGE_UPDATE_PASSWORD_FAIL, variant: 'error'}])


    });
    }
}

export const actUpdateProfile= (user) => {
    return dispatch => {
        return callApiToken(`${BASE_URL}/api/v1/users/updateProfile`, 'POST', user).then( res => {
            if(!res) {
                dispatch(
                    [
                        {type: ErrorTypes.SET_ERROR, error: Messages.MESSAGE_UPDATE_PROFILE_FAIL, variant: 'error'}])
            }
            // updatePassword(res.data),
            if(res.status == 204) {
                dispatch([ {type: ErrorTypes.SET_ERROR, error: Messages.MESSAGE_UPDATE_PROFILE_SUCCESS, variant: 'success'}])
            }else{
                dispatch(
                    [
                        {type: ErrorTypes.SET_ERROR, error: Messages.MESSAGE_UPDATE_PROFILE_FAIL, variant: 'error'}])
            }
        }).catch(res => {
            console.log(res)
            dispatch([updatePassword(res.data), {type: ErrorTypes.SET_ERROR, error: Messages.MESSAGE_UPDATE_PROFILE_FAIL, variant: 'error'}])


        });
    }
}

export const updateProfile = (payload) => {
    return {
        type : Types.UPDATE_PASSWORD,
        payload
    }
}

export const updatePassword = (payload) => {
    return {
        type : Types.UPDATE_PASSWORD,
        payload
    }
}