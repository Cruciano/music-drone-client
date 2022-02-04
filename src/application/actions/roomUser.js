export const GET_ROOM_USERS = '[get] room users';
export const SET_ROOM_USERS = '[set] room users';

export const getRoomUsers = id => ({
   type: GET_ROOM_USERS,
   payload: id
});

export const setRoomUsers = users => ({
    type: SET_ROOM_USERS,
    payload: users
})

