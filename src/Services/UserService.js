import {config} from "./serverConfig";

class userService{
    async login(email, password) {
        let result = { status: null, data: null};
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        };
        const response = await fetch(config.apiUrl + '/api/Account/login', requestOptions);

        console.log(response);

        result.status = response.status;
        if(response.ok) {
            result.data = await response.json();
            localStorage.setItem("user", JSON.stringify(result.data));
            return true
        }
        return false
    }

    async register(name, surname, email, password) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                surname: surname,
                email: email,
                password: password
            })
        };
        const response = await fetch(config.apiUrl + '/api/Account/register', requestOptions);
        if(response.ok) {
            return this.login(email, password)
        }
        return false
    }

    logout(){
        localStorage.removeItem("user");
        sessionStorage.removeItem("user");
    }
}

export default new userService()