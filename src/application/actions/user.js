export const REGISTER = '[register]';
export const REGISTER_SUCCESS = '[register] success';
export const REGISTER_FAILURE = '[register] failure';
export const LOGIN = '[login]';
export const LOGIN_SUCCESS = '[login] success';
export const LOGIN_FAILURE = '[login] failure';
export const LOGOUT = '[logout]';

export const register = user => ({
    type: REGISTER,
    payload: user,
});

export const login = user => ({
    type: LOGIN,
    payload: user,
});

export const logout = {
    type: LOGOUT,
};

export const registerSuccess = {
    type: REGISTER_SUCCESS
};

export const registerFailure = {
    type: REGISTER_FAILURE
};

export const loginSuccess = {
    type: LOGIN_SUCCESS
};

export const loginFailure = {
    type: LOGIN_FAILURE
};
