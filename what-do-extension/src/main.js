import Vue from "vue";

import App from "./App.vue";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const app = new Vue({
  el: "#app",
  render: (createElement) => createElement(App),
});
