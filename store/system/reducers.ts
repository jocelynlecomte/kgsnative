import { SystemState, SystemAction, LOGIN_SUCCESS, LOGIN_START, LOGOUT } from './types';

const initialState: SystemState = {
    loggedIn: false,
    username: '',
    loading: false
};

export function systemReducer(state = initialState, action: SystemAction): SystemState {
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
        case LOGOUT: {
            return {
                loggedIn: false,
                username: null,
                loading: false,
            };
        }
        default:
            return state;
    }
};
