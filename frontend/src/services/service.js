import { get, post } from "./axios";

const Service = {
    getRegisterList() {
        return get("register/");
    },
    postOperation(data) {
        return post("operation/", data);
    }
};

export default Service;