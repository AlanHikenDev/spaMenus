import Vue from "vue";
import Vuex from "vuex";
// Cargamos Vuex
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: null,
        userrol: null,
    },
    mutations: {
        settoken(state, token) {
            state.token = token;
        },
        setuserrol(state, rol) {
            state.userrol = rol;
        }
    }
});

Vue.prototype.$store = store;
export default store;
