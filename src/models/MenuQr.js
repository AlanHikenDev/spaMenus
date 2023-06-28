import Model from "./Model.js";

export default class MenuQr extends Model {

    constructor(ApiConnector, DBConnector) {
        super("menu", ApiConnector, DBConnector);
    }

    buscarporURl(data) {
        return this.post("buscarporurl", data);
    }

    listarporiduser(data) {
        return this.post("buscarporidusr", data);
    }

    buscarporId(data) {
        return this.post("buscarporidmenu", data);
    }

    actulizarSoloImagen(data) {
        return this.post("imagenupdate", data);
    }
}
