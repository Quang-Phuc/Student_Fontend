import axios from 'axios';
import Router from 'next/router';
import { BASE_URL, SERVER_URL } from './constants';
import apiCaller from "../../utils/apiCaller";
import * as Types from './ActionTypes'
import { MESSAGE_LOGIN_ERROR } from '../../constant/message'

axios.defaults.timeout = 5000;

const clearSnackbar = () => {
  return dispatch => {
    dispatch({ type: Types.SET_ERROR, message: '' });
  };
};

const login = (payload, next = '/') => {
  return dispatch =>
    axios
      .post(`${BASE_URL}/api/v1/auth/login`, payload)
      .then(res => {
        dispatch([
          { type: Types.SET_USER, user: res.data },
          { type: Types.SET_IS_LOADING, isLoading: false }
        ]);
        // axios.post(`${SERVER_URL}/api/Login`, payload);
        // Router.push(next + '/admin/profile');
      })
      .catch(response => {
        if (response.response && response.response.status === 401) {
          dispatch([
            { type: Types.SET_IS_LOADING, isLoading: false },
            {
              type: Types.SET_ERROR,
              message: MESSAGE_LOGIN_ERROR,
              variant: 'error'
            }
          ]);
        } else {
          dispatch([
            {
              type: 'SET_ERROR',
              variant: 'error',
              message:
                'Mật khẩu không đúng'
            },
            { type: 'SET_IS_LOADING', isLoading: false }
          ]);
        }
      });
};

const setIsLoading = payload => {
  return dispatch =>
    dispatch({ type: Types.SET_IS_LOADING, isLoading: payload.isLoading });
};

const logout = () => {
  return dispatch =>
    axios
      .get(`${BASE_URL}/api/logout`)
      .then(() => {
        dispatch({ type: Types.LOGOUT });
        Router.push('/');
      })
      .catch(err => err);
};

const whoAmI = cookie => {
  return dispatch => {
    return axios
      .get(`${SERVER_URL}/api/whoami`, {
        headers: {
          Accept: 'application/json',
          Cookie: cookie
        },
        withCredentials: true
      })
      .then(response => {
        let user = null;
        if (response.data) {
          user = response.data;
        }
        dispatch({
          type: Types.SET_USER,
          user
        });
        return user;
      })
      .catch(() => {
        return null;
      });
  };
};

export { clearSnackbar, login, logout, setIsLoading, whoAmI };
