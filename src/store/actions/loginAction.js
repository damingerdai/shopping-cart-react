import * as types from './types/loginTypes';

export const login = (user) => ({
    type: types.LOGIN,
    user
})

export const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS, 
    user,
})

export const loginFaiure = (errMsg) => ({
    type: types.LOGIN_FAIURE, 
    errMsg,
})

export const logout = (user) => ({
    type: types.LOGOUT,
    user
})