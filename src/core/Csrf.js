import Api from "./Api";
import Cookie from "jscookie";

export default {
    getCookie() {
        let token = Cookie.get("XSRFTOKEN");
        if (token) {
            return new Promise(resolve => {
                resolve(token);
            });
        }
        return Api.get("/csrfcookie");
    }
};
