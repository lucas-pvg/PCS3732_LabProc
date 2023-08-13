import { get, post } from "./axios";

const Service = {
    getRegisterList() {
        return get("register/");
    }
};

export default Service;