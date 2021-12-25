import SendRequest from "../SendRequest";

export default {
    create: async (name) => {
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
    },

    getAll: async () => {
        let result = { status: null, data: null};
        const response = await SendRequest('GET', true, '/api/Room/all');

        result.status = response.status;
        if(response.ok) {
            result.data = await response.json();
            return result.data;
        }
        return [];
    },

    getById: async (id) => {
        let result = { status: null, data: null};
        const response = await SendRequest('GET', true, `/api/Room/${id}`);

        result.status = response.status;
        if(response.ok) {
            result.data = await response.json();
            return result.data;
        }
        return {};
    },

    delete: async (id) => {
        const response = await SendRequest('DELETE', true, `/api/Room/${id}`);
        return response.ok;
    }
}