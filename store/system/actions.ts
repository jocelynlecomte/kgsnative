import { LOGIN_START, LOGIN_SUCCESS, LOGOUT, LoginStartAction, LoginSuccessAction, LogoutAction } from './types';

export function login(username: string, password: string): LoginStartAction {
    return {
        type: LOGIN_START,
        username,
        password
    };
}

export function loginSuccess(username: string): LoginSuccessAction {
    return {
        type: LOGIN_SUCCESS,
        username,
    };
}

export function logout(): LogoutAction {
    return {
        type: LOGOUT,
    };
}
