import {publicKey} from "../../custom.json";
import JSEncrypt from "jsencrypt";

const encrypt = (data: string): string | false => {
    const jsencrypt = new JSEncrypt();
    jsencrypt.setPublicKey(publicKey);
    
    let result = jsencrypt.encrypt(data);

    return result;
};

export default {encrypt}