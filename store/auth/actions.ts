import { LOGIN_START, LOGIN_SUCCESS, LOGOUT_START, LoginActionTypes, LOGOUT_SUCCESS } from './types';

export function loginStart(username: string, password: string): LoginActionTypes {
    return {
        type: LOGIN_START,
        username,
        password,
    };
}

export function loginSuccess(username: string): LoginActionTypes {
    return {
        type: LOGIN_SUCCESS,
        username,
    };
}

export function logoutStart(username: string): LoginActionTypes {
    return {
        type: LOGOUT_START,
        username,
    };
}

export function logoutSuccess(): LoginActionTypes {
    return {
        type: LOGOUT_SUCCESS,
    };
}
