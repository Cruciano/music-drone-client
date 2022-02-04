import {SET_CURRENT_ROOM, SET_ROOMS} from "../actions/room";

const initialState = {
    rooms: [],
    currentRoom: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case SET_ROOMS:
            return {
                ...state,
                rooms: action.payload
            }
        case SET_CURRENT_ROOM:
            return {
                ...state,
                currentRoom: action.payload
            }
        default:
            return state
    }
}

export default reducer