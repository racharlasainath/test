import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
//Components
import LessionPlan from "./components/LessionPlan.vue";
// Make BootstrapVue available throughout your project
import { BootstrapVue } from "bootstrap-vue";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Optionally install the BootstrapVue icon components plugin
Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [{ path: "/plan", component: LessionPlan }];

const router = new VueRouter({
  routes,
  linkExactActiveClass: "btn btn-primary"
});

Vue.use(BootstrapVue);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
