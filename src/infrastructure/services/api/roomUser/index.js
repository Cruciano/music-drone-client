import SendRequest from "../SendRequest";

export default {
    enter: async (id) => {
        const data = {
            roomId: id,
        };
        const response = await SendRequest('POST', true, '/api/RoomUser/enter', data);
        return response.ok;
    },

    getMembers: async (id) => {
        let result = { status: null, data: null};
        const response = await SendRequest('GET', true, `/api/RoomUser/${id}`);

        result.status = response.status;
        if(response.ok) {
            result.data = await response.json();
            return result.data;
        }
        return [];
    },

    getMyRooms: async () => {
        let result = { status: null, data: null};
        const response = await SendRequest('GET', true, '/api/RoomUser/rooms');

        result.status = response.status;
        if(response.ok) {
            result.data = await response.json();
            return result.data;
        }
        return [];
    },

    exit: async (id) => {
        const data = {
            roomId: id,
        };
        const response = await SendRequest('DELETE', true, '/api/RoomUser/exit', data);
        return response.ok;
    }
}