import Api from "../core/Api";

import User from "./User";
import Menu from "./MenuQr";
//import Contacto from "./Contacto";

var handler = {
    get: function (target, name) {
        if (name in target) {
            return target[name];
        }
        alert('No has definido un Modelo para: ' + name);
        return null;
    }
};

var Factory = new Proxy({}, handler);
Factory.api = Api;
Factory.user = new User(Api, null);
Factory.menu = new Menu(Api, null);
export default Factory;
