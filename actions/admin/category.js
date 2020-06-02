import * as Types from '../../constant/category';
import {callApiToken} from "../../utils/apiCaller";
import {BASE_URL} from "../../constant/common";
import { toastErr, toastSuccess } from '../../helpers/toastHelper';
import { delCategory } from '../../apis/category';
import {STATUS_CODE} from '../../constant/common';

// FETCH DATA CATEGORIES
export const actFetchCategoriesRequest = () => {
    return dispatch => {
        return callApiToken(`${BASE_URL}/api/v1/categories`, 'GET', null).then( res => {
            dispatch(actAdminFetchCategories(res.data))
        });
    }
}

export const actAdminFetchCategories = (payload) => {
    return {
        type : Types.ADMIN_FETCH_CATEGORY,
        payload
    }
}


// DELETE CATEGORY
export const actDeleteCategoryRequest = (id) => {
    return dispatch => {
        return callApiToken(`${BASE_URL}/api/v1/categories/${id}`, 'DELETE', null).then( res => {
            if(res && res.status === STATUS_CODE.DELETED) {
                alert('Xóa thành công!');
                dispatch(actDeleteCategorySuccess(id))
            } else {
                alert('Có lỗi xảy ra!');
            }
        }).catch(() => {
            // err
        });
    }
}

export const actDeleteCategorySuccess = (id) => {
    return {
        type : Types.ADMIN_DEL_CATEGORY_SUCCESS,
        id
    }
}

// ADD CATEGORY
export const actAddCategoryRequest = (category) => {
    return dispatch => {
        return callApiToken(`${BASE_URL}/api/v1/categories`, 'post', category).then( res => {
            if(res && res.status === STATUS_CODE.SUCCESS) {
                alert('Thêm thành công!');
                dispatch(actAddCategorySuccess(id))
            } else {
                alert('Có lỗi xảy ra!');
            }
        }).catch(() => {
            // err
        });
    }
}

export const actAddCategorySuccess = (category) => {
    return {
        type : Types.ADMIN_ADD_CATEGORY_SUCCESS,
        category
    }
}

// FETCH CATEGORY BY ID
export const actFetchCategoriesRequestById = (id) => {
    return dispatch => {
        return callApiToken(`${BASE_URL}/api/v1/categories/${id}`, 'GET', null).then( res => {
            if(res && res.status === STATUS_CODE.SUCCESS) {
                dispatch(actGetCategoryByIdSuccess(res.data))
            } else {
                alert('Có lỗi xảy ra!');
            }
        }).catch(() => {
            // err
        });
    }
}

export const actGetCategoryByIdSuccess = (category) => {
    return {
        type : Types.ADMIN_EDITTING_CATEGORY,
        category
    }
}

// EDIT CATEGORY
export const actEditCategory = (id, category) => {
    return dispatch => {
        return callApiToken(`${BASE_URL}/api/v1/categories/${id}`, 'PATCH', category).then( res => {
            console.log(res);
            if(res && res.status === STATUS_CODE.SUCCESS) {
                alert('Cập nhật thành công!');
                dispatch(actUpdateCategorySuccess(res.data))
            } else {
                alert('Có lỗi xảy ra!');
            }
        }).catch(() => {
            // err
        });
    }
}

export const actUpdateCategorySuccess = (category) => {
    return {
        type : Types.ADMIN_EDIT_CATEGORY_SUCCESS,
        category
    }
}
