import {LOGIN, LOGOUT, REGISTER} from "../actions/user";
import * as userActions from "../actions/user";

const loginFlow = ({api}) => ({dispatch}) => next => async (action) => {

    if (action.type === LOGIN) {
        let isLoggedIn = await api.user.login(action.payload.email, action.payload.password);

        if (isLoggedIn) {
            dispatch(userActions.loginSuccess);
            const user = await api.user.profile();
            dispatch(userActions.login(user));
        } else {
            dispatch(userActions.loginFailure);
        }
    }    next(action)

}

const logoutFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action)

    if (action.type === LOGOUT) {
        api.user.logout();
        dispatch(userActions.logout);
    }
}

const registerFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action)

    if (action.type === REGISTER) {
        let isRegistered = await api.user.register(
            action.payload.name,
            action.payload.surname,
            action.payload.email,
            action.payload.password,
        );

        if (isRegistered) {
            dispatch(userActions.registerSuccess);
        } else {
            dispatch(userActions.registerFailure);
        }
    }
}

export default [
    loginFlow,
    logoutFlow,
    registerFlow,
]