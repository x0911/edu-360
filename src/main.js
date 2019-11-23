import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
const fb = require("./firebase.config.js");
import vuetify from "./plugins/vuetify";
// import "roboto-fontface/css/roboto/roboto-fontface.css";
import "typeface-poppins";
import "typeface-cairo";
import "@mdi/font/css/materialdesignicons.css";

// To be used in VUE
import VueParticles from "vue-particles";
Vue.use(VueParticles);
import VueWindowSize from "vue-window-size";
Vue.use(VueWindowSize);
import AOS from "aos"; // Animation library
import "aos/dist/aos.css";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);
VueCookies.config("1000d");
import CountryFlag from "vue-country-flag";
Vue.component("country-flag", CountryFlag);
import options from "vue-countup-directive";
Vue.directive("countUp", options);
import { mask } from "vue-the-mask";
Vue.directive("mask", mask);
import VueYoutube from "vue-youtube";
Vue.use(VueYoutube);
Vue.use(require("vue-moment"));
import VueApexCharts from "vue-apexcharts";
Vue.component("apexChart", VueApexCharts);
import VueAwesomeSwiper from "vue-awesome-swiper";
// require styles
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);
import LotAnim from "vue-lottie-web";
Vue.component("LotAnim", LotAnim);

// import custom scss
import "@/custom/scss/main.scss";

// Custom js
import "@/custom/js/main.js";

Vue.config.productionTip = false;

let app;
fb.auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      created() {
        AOS.init();
      },
      mounted() {
        document.querySelector("#app-preloader").remove();
      },
      data: {
        current_user: user ? user : null
      },
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});

// Mixins
Vue.mixin({
  methods: {
    appConnection() {
      return this.$store.state.isOnline;
    },
    changeLang: function(lang) {
      this.$vuetify.lang.current = lang;
      this.$cookies.set("gen_lang", lang);
      this.$vuetify.rtl = lang == "ar" ? true : false;
      return;
    },
    getDates(startDate, endDate) {
      var dates = [],
        currentDate = startDate,
        addDays = function(days) {
          var date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);
          return date;
        };
      while (currentDate <= endDate) {
        dates.push(currentDate);
        currentDate = addDays.call(currentDate, 1);
      }
      return dates;
    },
    getLang: function(...expression) {
      let returner = "";
      for (let t of expression) {
        returner += `${this.$vuetify.lang.t("$vuetify." + t)} `;
      }
      return returner.substring(0, returner.length - 1);
    },
    defaultUserAvatar: function() {
      return require("@/assets/media/imgs/user-placeholder.jpg");
    },
    emailOrPhone: function(input) {
      let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        isEmail = re.test(input);
      if (isEmail) {
        return {
          type: "email",
          value: input
        };
      } else {
        let cleanInput = input.replace("+20", "");
        cleanInput = parseInt(cleanInput).toString();
        return {
          type: cleanInput.length == 10 ? "phone" : "invalid",
          value: cleanInput.length == 10 ? cleanInput : "invalid"
        };
      }
    },
    logout() {
      fb.auth
        .signOut()
        .then(() => {
          this.$store.dispatch("clearData");
          this.$router.push("/");
          let href = document.location.href;
          document.location.href = href;
        })
        .catch(err => {
          // console.log(err);
        });
    },
    ucFirst($text) {
      let ucfirst = $text
        .replace("_", " ")
        .toLowerCase()
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
      return ucfirst;
    },
    arr_obj_unique(arr, comp) {
      let unique = arr
        .map(e => e[comp])
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter(e => arr[e])
        .map(e => arr[e]);
      return unique;
    },
    changeTheme(theme) {
      let themes = {
        primary: {
          primary: "#1976D2",
          secondary: "#424242",
          anchor: "#1976D2",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107"
        },
        pharoa: {
          primary: "#FFC107",
          secondary: "#424242",
          anchor: "#1976D2",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107"
        },
        fire: {
          primary: "#D32F2F",
          secondary: "#424242",
          anchor: "#1976D2",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107"
        },
        forest: {
          primary: "#2E7D32",
          secondary: "#424242",
          anchor: "#1976D2",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107"
        }
      };
      this.$vuetify.theme.themes.light = themes[theme];
      this.$store.state.options.currentTheme = theme;
      return true;
    },
    getYid(url) {
      let video_id = url.split("v=")[1],
        ampersandPosition = video_id.indexOf("&");
      if (ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
      }
      return video_id;
    },
    getAnim(name) {
      let data = require("@/assets/animation/" + name + ".json");
      return data;
    }
  }
});
