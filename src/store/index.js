import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

// Modules
import user from "./modules/user";
import brand from "./modules/brand";

Vue.use(Vuex);

export default new Vuex.Store({
  /**
   * Assign the modules to the store
   */
  modules: {
    user,
    brand
  },
  plugins: [
    createPersistedState({
      key: "user",
      paths: ["user.jwt"]
    })
  ]
});