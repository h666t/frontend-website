import {backendURL} from "../../custom.json";
import axios from 'axios';
// axios.defaults.withCredentials = true;
const makeRequest = async (apiMethodAndName: string, params: object = {}) => {
    let method = apiMethodAndName.split("/")[0];
    let apiName = apiMethodAndName.split("/")[1];
    if(!apiName){
        apiName = method;
        method = "post";
    }
    try {
        let result = await axios[method as 'get' | 'post'](`${backendURL}/api/${apiName}`, params || {}); 
        return result.data;
    } catch (error: any) {
        throw new Error(error.response.data);   
    }
}

export default makeRequest
