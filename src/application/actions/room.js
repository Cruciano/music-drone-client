export const GET_ALL_ROOMS = '[get] all rooms';
export const CREATE_ROOM = '[create] room';
export const SET_ROOMS = '[set] rooms';
export const SET_CURRENT_ROOM = '[set] current room';

export const getAllRooms = {
    type: GET_ALL_ROOMS
};

export const createRoom = name => ({
    type: CREATE_ROOM,
    payload: name
});

export const setRooms = roomList => ({
    type: SET_ROOMS,
    payload: roomList
});

export const setCurrentRoom = id => ({
    type: SET_CURRENT_ROOM,
    payload: id
});
