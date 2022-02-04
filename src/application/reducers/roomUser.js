import {SET_ROOM_USERS} from "../actions/roomUser";

const initialState = {
    users: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case SET_ROOM_USERS:
            return {
                users: action.payload
            }
        default:
            return state
    }
}

export default reducer