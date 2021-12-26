import sendRequest from "../SendRequest";

export default {
    login: async (email, password) => {
        const data = {
            login: email,
            password: password
        };

        let result = { status: null, data: null};
        const response = await sendRequest('POST', false, '/api/Account/login', data);

        result.status = response.status;
        if(response.ok) {
            result.data = await response.json();
            localStorage.setItem('token', JSON.stringify(result.data.token));
            return true;
        }
        return false;
    },

    profile: async () => {
        let result = { status: null, data: null};
        const response = await sendRequest('GET', true, '/api/Account/profile');

        result.status = response.status;
        if(response.ok) {
            result.data = await response.json();
            return result.data;
        }
        return {};
    },

    register: async (name, surname, email, password) => {
        const data = {
            name: name,
            surname: surname,
            email: email,
            password: password
        };

        const response = await sendRequest('POST', false, '/api/Account/register', data);

        return response.ok;
    },

    logout: () => {
        localStorage.removeItem("token");
    },
}