import {LOGIN_FAILURE, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_SUCCESS} from "../actions/user";

export const register_success = 'register success';
export const register_failure = 'register failure';
export const login_success = 'login success';
export const login_failure = 'login failure';

const initialState = {
    authStatus: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return { authStatus: register_success };
        case REGISTER_FAILURE:
            return { authStatus: register_failure };
        case LOGIN_SUCCESS:
            return { authStatus: login_success };
        case LOGIN_FAILURE:
            return { authStatus: login_failure };
        default:
            return state;
    }
}

export default reducer