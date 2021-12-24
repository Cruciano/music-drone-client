import SendRequest from "./SendRequest";

class roomUserService{
    async Enter(id) {
        const data = {
            roomId: id,
        };
        const response = await SendRequest('POST', true, '/api/RoomUser/enter', data);
        return response.ok;
    }

    async GetMembers(id){
        let result = { status: null, data: null};
        const response = await SendRequest('GET', true, `/api/RoomUser/${id}`);

        result.status = response.status;
        if(response.ok) {
            result.data = await response.json();
            return result.data;
        }
        return [];
    }

    async GetMyRooms(){
        let result = { status: null, data: null};
        const response = await SendRequest('GET', true, '/api/RoomUser/rooms');

        result.status = response.status;
        if(response.ok) {
            result.data = await response.json();
            return result.data;
        }
        return [];
    }

    async Exit(id) {
        const data = {
            roomId: id,
        };
        const response = await SendRequest('DELETE', true, '/api/RoomUser/exit', data);
        return response.ok;
    }
}

export default new roomUserService()