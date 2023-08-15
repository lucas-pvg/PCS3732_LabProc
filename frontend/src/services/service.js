import { get, post } from "./axios";

const Service = {
    getRegisterList() {
        return get("register/");
    },
    updateAllRegisters(data) {
        return post("register/", data)
    },
    postOperation(data) {
        return post("operation/", data);
    }
};

export default Service;