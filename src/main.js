import Vue from 'vue'
import App from './App.vue'
import VueAlertify from 'vue-alertify';

import router from "./router";
import store from "./store";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAlertify);

import "./style/styles.scss";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app"); 