import { combineReducers } from 'redux';
import user from "./user";
import userUI from "./userUI";

export default combineReducers({
    user,
    userUI,
})