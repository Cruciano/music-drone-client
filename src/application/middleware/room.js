import {CREATE_ROOM, GET_ALL_ROOMS, getAllRooms, setRooms} from "../actions/room";

const getAllRoomsFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if(action.type === GET_ALL_ROOMS){
        let allRooms = await api.room.getAll();
        dispatch(setRooms(allRooms));
    }
}

const createRoomFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if(action.type === CREATE_ROOM){
        await api.room.create(action.payload);
        dispatch(getAllRooms);
    }
}

export default [
    getAllRoomsFlow,
    createRoomFlow,
]