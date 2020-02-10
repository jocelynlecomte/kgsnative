import { Action } from 'redux';

export interface SystemState {
    loggedIn: boolean;
    username: string;
    loading: boolean;
}

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const LOGOUT_START = 'LOGOUT_START';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export interface LoginStartAction extends Action {
    type: typeof LOGIN_START;
    username: string;
    password: string;
}

export interface LoginSuccessAction extends Action {
    type: typeof LOGIN_SUCCESS;
    username: string;
}

export interface LoginFailAction extends Action {
    type: typeof LOGIN_FAIL;
}

export interface LogoutStartAction extends Action {
    type: typeof LOGOUT_START;
    username: string;
}

export interface LogoutSuccessAction extends Action {
    type: typeof LOGOUT_SUCCESS;
}

export type LoginActionTypes =
    | LoginStartAction
    | LoginSuccessAction
    | LoginFailAction
    | LogoutStartAction
    | LogoutSuccessAction;
