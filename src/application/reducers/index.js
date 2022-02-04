import { combineReducers } from 'redux';
import user from "./user";
import userUI from "./userUI";
import room from "./room";
import roomUser from "./roomUser";


export default combineReducers({
    user,
    userUI,
    room,
    roomUser
})