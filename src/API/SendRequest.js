import authHeader from "./authHeader";
import {config} from "./serverConfig";

const sendRequest = async (requestMethod, isAuth, path, data = {}) => {
    const requestOptions = {};

    requestOptions.method = requestMethod;
    requestOptions.headers = {};

    if(requestMethod === 'GET') {
        requestOptions.headers['accept'] = 'text/plain';
    }
    else if (requestMethod === 'DELETE'){
        requestOptions.headers['accept'] = '*/*';
    }

    if(!(Object.keys(data).length === 0)){
        requestOptions.headers['Content-Type'] = 'application/json';
        requestOptions.body = JSON.stringify(data)
    }

    if(isAuth){
        const authHead = authHeader()
        requestOptions.headers = { ...requestOptions.headers, ...authHead}
    }

    return await fetch(config.apiUrl + path, requestOptions);
}

export default sendRequest