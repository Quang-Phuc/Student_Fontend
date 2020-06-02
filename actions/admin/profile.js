import * as Types from '../../constant/user';
import {callApiToken} from "../../utils/apiCaller";
import {BASE_URL} from "../../constant/common";
import { toastErr, toastSuccess } from '../../helpers/toastHelper';
import { delCategory } from '../../apis/category';
import {STATUS_CODE} from '../../constant/common';

// FETCH DATA CATEGORIES
export const actFetchDataProfileRequest = () => {
    return dispatch => {
        return callApiToken(`${BASE_URL}/api/v1/users/me`, 'GET', null).then( res => {
            if(res && res.data) dispatch(actAdminFetchProfile(res.data))
        });
    }
}

export const actAdminFetchProfile = (payload) => {
    return {
        type : Types.GET_PROFILE,
        payload
    }
}
