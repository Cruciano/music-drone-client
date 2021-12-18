import {userStatuses} from "./UserStatuses";

const initialState = {
    LogStatus: userStatuses.NOT_LOGGED_IN,
}

const userReduser = (state = initialState, {type, payload}) => {
    switch (type){
        case "not-logged-in":
            return {...state, LogStatus: userStatuses.NOT_LOGGED_IN}
        case "logged-in":
            return {...state, LogStatus: userStatuses.LOGGED_IN}
        case "login-failed":
            return {...state, LogStatus: userStatuses.LOGIN_FAILED}
        case "registration-failed":
            return {...state, LogStatus: userStatuses.REGISTRATION_FAILED}
        default:
            return state;
    }
}

export default userReduser;