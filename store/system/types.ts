import { Action } from 'redux'

export interface SystemState {
    loggedIn: boolean
    username: string
    loading: boolean
}

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

export interface LoginStartAction extends Action {
    type: typeof LOGIN_START
    username: string
    password: string
}

export interface LoginSuccessAction extends Action {
    type: typeof LOGIN_SUCCESS
    username: string
}

export interface LogoutAction extends Action {
    type: typeof LOGOUT
}

export type SystemAction = LoginStartAction | LoginSuccessAction | LogoutAction;
