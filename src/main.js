// Import Vue
import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

// Import Vue App, routes, store
import App from "./App";
import routes from "./routes";
import store from './store';
import VueAxios from "vue-axios";
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VueMaterial);


const filter = function (text, length, clamp) {
  clamp = clamp || '...';
  var node = document.createElement('div');
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);

// Configure router
const router = new VueRouter({
  routes,
  linkActiveClass: "active",
  mode: "history",

});
let isAuthenticated = JSON.parse(localStorage.user);
const getJWT = isAuthenticated.user.jwt;
router.beforeEach((to, from, next) => {
  if (to.name == 'Welcome' && getJWT) {
    next('/podcasts');
  }

  if (to.name != 'Welcome' && !getJWT) next('/login')
  else next();
})


Vue.config.productionTip = false;

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers.get["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
});