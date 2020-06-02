import {BASE_URL} from '../constant/common';
import AxiosService from '../common/axiosService';

// http://localhost:3000/api/v1/categories
const url = 'api/v1/categories';
export const getListCategory = () => {
    return AxiosService.get(`${BASE_URL}/${url}`);
};

// http://localhost:3000/api/v1/categories METHOD: POST
export const addCategory = (data) => {
    return AxiosService.post(`${BASE_URL}/${url}`, data)
}

// http://localhost:3000/api/v1/categories/:id METHOD: PUT
export const editCategory = (data) => {
    return AxiosService.put(`${BASE_URL}/${url}/${data.id}`, data)
}

// http://localhost:3000/api/v1/categories/:id METHOD: DELETE
export const delCategory = cateId => {
    return AxiosService.delete(`${BASE_URL}/${url}/${cateId}`)
}