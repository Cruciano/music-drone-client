import SendRequest from "./SendRequest";

class roomService{
    async create(name) {
        const data = {
            name: name,
        };

        let result = { status: null, data: null};
        const response = await SendRequest('POST', true, '/api/Room/create', data);

        result.status = response.status;
        if(response.ok) {
            result.data = await response.json();
            return result.data.name;
        }
        return ""
    }

    async GetAll(){
        let result = { status: null, data: null};
        const response = await SendRequest('GET', true, '/api/Room/all');

        result.status = response.status;
        if(response.ok) {
            result.data = await response.json();
            return result.data;
        }
        return [];
    }

    async GetById(id){
        let result = { status: null, data: null};
        const response = await SendRequest('GET', true, `/api/Room/${id}`);

        result.status = response.status;
        if(response.ok) {
            result.data = await response.json();
            return result.data;
        }
        return {};
    }

    async Delete(id) {
        const response = await SendRequest('DELETE', true, `/api/Room/${id}`);
        return response.ok;
    }
}

export default new roomService()