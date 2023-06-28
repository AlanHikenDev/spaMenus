import Model from "./Model.js";

export default class User extends Model {

    constructor(ApiConnector, DBConnector) {
        super("users", ApiConnector, DBConnector);
    }

    getbyId(id) {
        return this.post("getbyId", id);
    }

}
