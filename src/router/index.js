import Vue from "vue";
import VueRouter from "vue-router";

// public
import Home from "../componentes/vistas/Home.vue";
import Example from "../componentes/vistas/exampleQR.vue";
import registro from "../componentes/vistas/registro.vue";
import caracteristicas from "../componentes/vistas/caracteristicas.vue";
import contacto from "../componentes/vistas/contacto.vue";
import login from "../componentes/vistas/login.vue";
import ejemplo from "../componentes/vistas/ejemplo.vue";
import host from "../componentes/vistas/showqrcontent.vue";
// admin 
import clientes from "../componentes/admin/vistas/clientes.vue";
import registrarclientes from "../componentes/admin/vistas/registro.vue";
// cliente
import menus from "../componentes/cliente/vistas/menus.vue";
import registrarmenu from "../componentes/cliente/vistas/registrarmenu.vue";
import updatemenu from "../componentes/cliente/vistas/updatemenu.vue";
import updateUser from "../componentes/cliente/vistas/editarUsuario.vue";
import menufijos from "../componentes/vistas/listaFijos.vue";

Vue.use(VueRouter);
  
const routes = [
    { path: "/", name: "Home", component: Home, meta: { rol: 'publico' } },
    { path: "/registro", name: "registro", component: registro, meta: { rol: 'publico' } },
    { path: "/example", name: "example", component: Example, meta: { rol: 'publico' } },
    { path: "/caracteristicas", name: "caracteristicas", component: caracteristicas, meta: { rol: 'publico' } },
    { path: "/contacto", name: "contacto", component: contacto, meta: { rol: 'publico' } },
    { path: "/login", name: "login", component: login, meta: { rol: 'publico' } },
    { path: "/host/:url_dir", name: "host", component: host, meta: { rol: 'publico' } },
    { path: "/host/urlpdfviwer/waffleriafm", name: "ejemplo", component: ejemplo, meta: { rol: 'publico' } },
    // admin 
    { path: "/admin/clientes/ver", component: clientes, meta: { rol: 'admin' } },
    { path: "/admin/clientes/registrar", component: registrarclientes, meta: { rol: 'admin' } },
    // cliente
    { path: "/cliente/menus/listar", name: "menus", component: menus, meta: { rol: 'cliente' } },
    { path: "/cliente/menus/fijos", name: "menufijos", component: menufijos, meta: { rol: 'cliente' } },
    { path: "/cliente/datos/updateUser", name: "updateUser", component: updateUser, meta: { rol: 'cliente' } },
    { path: "/cliente/menus/registrar", name: "registrarmenus", component: registrarmenu, meta: { rol: 'cliente' } },
    { path: "/cliente/menus/update/:id", name: "updatemenu", component: updatemenu, meta: { rol: 'cliente' } },
    //* Definicion de path*  
    //{ path: "/modelo/accion/parametros ", name: "ModeloAccion", component: componente },
];
 
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

function isLoggedIn() {
    //forma en que validas que estas logeado
    let token = localStorage.getItem('token');
    return token !== null && token.length > 0;
}

function rol() {
    return localStorage.getItem('rol');
}

router.beforeEach((to, from, next) => {
    if (to.meta.rol == 'publico') {
        console.log("chido");
        next();
    } else if (isLoggedIn()) {
        if (rol() == to.meta.rol) {
            next();
        } else {
            next(false);
        }
    } else {
        next({ name: 'Home' });
    }
});

export default router;
