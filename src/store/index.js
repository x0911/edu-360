import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
let app_title = "Edu 360";

export default new Vuex.Store({
  state: {
    app: {
      updateFound: false
    },
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
    noti_options: {
      drawer: null,
      rtl_sidenav: false,
      fixed_sidenav: false,
      mini_variant: false
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
    },

    // Notifications
    notis: ["1"],

    // Youtube
    youtube_dialog: {
      url: "",
      model: false
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
