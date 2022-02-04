import {GET_ROOM_USERS, setRoomUsers} from "../actions/roomUser";

const getRoomUsersFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if(action.type === GET_ROOM_USERS){
        let users = await api.roomUser.getMembers(action.payload);
        let usersToState = users.map((user, index) => ({...user, id: index}));
        dispatch(setRoomUsers(usersToState));
    }
}

export default [
    getRoomUsersFlow,
]