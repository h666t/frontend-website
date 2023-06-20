import {backendURL} from "../../custom.json";
import axios from 'axios';

const makeRequest = async (apiMethodAndName: string, params: object = {}) => {
    let method = apiMethodAndName.split("/")[0];
    let apiName = apiMethodAndName.split("/")[1];
    if(!apiName){
        apiName = method;
        method = "post";
    }
    
    let response = await axios[method as 'get' | 'post'](`${backendURL}/api/${apiName}`, params || {});
    return response.data;
}

export default makeRequest
