import {LOGOUT, SET_PROFILE} from "../actions/user";

const initialState = {
    isLoggedIn: false,
    firstName: '',
    lastName: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                isLoggedIn: true,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            };
        case LOGOUT:
            return {
                isLoggedIn: false,
                firstName: '',
                lastName: '',
            };
        default:
            return state;
    }
}

export default reducer