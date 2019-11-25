import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
let app_title = "Edu 360";

export default new Vuex.Store({
  state: {
    isOnline: false,
    app_title,
    appError: {
      msg: "",
      model: false
    },
    options: {
      drawer: null,
      rtl_sidenav: false,
      fixed_sidenav: true,
      mini_variant: false,
      night_mode: false,
      currentTheme: "primary"
    },
    currentUser: null,

    // Login
    login: {
      step: 0,
      loading: false,
      phone: {
        mask: "+20-###-###-####",
        value: ""
      },
      code: {
        mask: "######",
        value: ""
      }
    }
  },
  mutations: {
    mutationDrawer(state) {
      state.options.drawer = !state.options.drawer;
    },
    setCurrentUser(state, val) {
      state.currentUser = val;
    }
  },
  actions: {
    clearData({ commit }) {
      commit("setCurrentUser", null);
    }
  },
  modules: {}
});
