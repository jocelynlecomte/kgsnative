import {
    SystemState,
    LoginActionTypes,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_START,
    LOGOUT_SUCCESS,
} from './types';

const initialState: SystemState = {
    loggedIn: false,
    username: '',
    loading: false,
};

export function authReducer(state = initialState, action: LoginActionTypes): SystemState {
    switch (action.type) {
        case LOGIN_START: {
            return {
                loggedIn: false,
                username: null,
                loading: true,
            };
        }
        case LOGIN_SUCCESS: {
            return {
                loggedIn: true,
                username: action.username,
                loading: false,
            };
        }
        case LOGIN_FAIL: {
            return {
                loggedIn: false,
                username: null,
                loading: false,
            };
        }
        case LOGOUT_START: {
            return {
                loggedIn: true,
                username: action.username,
                loading: true,
            };
        }
        case LOGOUT_SUCCESS: {
            return {
                loggedIn: false,
                username: null,
                loading: false,
            };
        }
        default:
            return state;
    }
}
