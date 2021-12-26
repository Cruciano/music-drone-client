import {LOGIN, LOGOUT} from "../actions/user";

const initialState = {
    isLoggedIn: false,
    name: '',
    surname: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                isLoggedIn: true,
                name: action.payload.name,
                surname: action.payload.surname,
            };
        case LOGOUT:
            return {
                isLoggedIn: false,
                name: '',
                surname: '',
            };
        default:
            return state;
    }
}

export default reducer