import * as types from './types/loginTypes';

export const login = (user) => ({
    type: types.LOGIN,
    user
})

export const logout = (user) => ({
    type: types.LOGOUT,
    user
})