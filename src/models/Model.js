export default class Model {

    constructor(nombre, ApiConnector, DBConnector) {
        this.nombre = nombre;
        this.ApiConnector = ApiConnector;
        this.DBConnector = DBConnector;
    }

    /*=========metodos para consumir api==========*/

    post(action, data) {
        return new Promise((resolve) => {
            let url = "/api/" + this.nombre + "/" + action;
            console.log("posteando a " + url);
            this.ApiConnector.post(url, data).then(response => {
                resolve(response.data);
            }, error => {
                console.log("error en el post " + url, error);
                resolve(null);
            });
        });
    }

	/**@agregar
	 * data = objeto a agregar {nombre:"tal",direccion:"bla bla", etc...}
	 */
    agregar(data) {
        return this.post("agregar", data);
    }
	/**@actualizar
	 * data = {id:1,nombre:'tal', ....} //objeto a actualizar que debe contener el campo id o la llave primaria para poder actualizarce
	 */
    actualizar(data) {
        return this.post("actualizar", data);
    }
	/**@ver
	 * data = {id:1,relations:[]} //objecto solo con el id o llave primaria y un arreglo de tablas relacionadas
	 * data = {id:1,relations:['libros','direcciones']}
	 */
    ver(data) {
        return this.post("ver", data);
    }
	/**@listar
	 * estructura json de data {conditions:[[],[]], relations:['','']}
	 * conditions: arreglo que contiene mas arreglos internos, acada arrelgo interno puede tener las siguientes estructuras
	 * [nombre_campo,valor] esto sera equivalente a ' and nombre_campo = valor' en la busqueda sql
	 * [nombre_campo,operador(<, like, >=, etc...), valor] esto sera equivalente a ' and nombre_campo "operador" valor' en la busqueda sql
	 * [nombre_campo,operador,valor, logica(AND, OR)] esto sera equivalente a ' "logica" nombre_campo "operador" valor' en la busqueda sql
	 * ejemplo
	 * data = {conditions:[[cancelado,0],['fecha_nac','>=','2000-10-10']], relations:['libros','direcciones']} //
	 */
    listar(data) {
        return this.post("listar", data);
    }

    borrar(id) {
        return this.post("borrar", id);
    }

    /*=========metodos para a base de datos==========*/

    insert(data) {
        return this.DBConnector.insert(this.nombre, data)
    }

    update(data) {
        return this.DBConnector.update(this.nombre, data);
    }

    delete(id) {
        return this.DBConnector.delete(this.nombre, id);
    }

    find(id) {
        return this.DBConnector.find(this.nombre, id);
    }

    save(data) {
        return this.DBConnector.save(this.nombre, data);
    }
	/**
	 * fields = ['id','created','cancelado']
	 * conditions = [[cancelado,0],['fecha_nac','>=','2000-10-10']] //
	 * extracond = ['order by id','limit 1'] // areglo de cosas extras
	 */
    select(fields, conditions, extracond) {
        return this.DBConnector.select([this.nombre], fields, conditions, extracond);
    }
}
