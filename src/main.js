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
    // requestContentCreatorRole(uid) {
    //   let requestContentCreatorRole = fb.functions.httpsCallable("requestContentCreatorRole"),
    //       $this = this;
    //   requestContentCreatorRole({
    //     uid
    //   }).then(result => {
    //     if (result.data == "done") {
          
    //     } else {
    //       $this.showError(result.data);
    //     }
    //   }).catch(error => {
    //     $this.showError(error.code);
    //   })
    // },
    appConnection() {
      return this.$store.state.isOnline;
    },
    changeLang: function(lang) {
      this.$vuetify.lang.current = lang;
      this.$cookies.set("gen_lang", lang);
      this.$vuetify.rtl = lang == "ar" ? true : false;
      return;
    },
    getUdata(data, alt) {
      return this.$store.state.currentUser &&
        this.$store.state.currentUser[data] &&
        this.$store.state.currentUser[data].trim() !== ""
        ? this.$store.state.currentUser[data]
        : alt
        ? alt
        : "--";
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
    getCode() {
      this.$store.state.login.loading = true;
      let $this = this,
        phoneNumber = $this.$store.state.login.phone.value.replace(/-/g, "");
      let appVerifier = window.recaptchaVerifier;
      // console.log(phoneNumber);
      fb.auth
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function(confirmationResult) {
          // SMS sent.
          window.confirmationResult = confirmationResult;
          $this.$store.state.login.step++;
          $this.$store.state.login.loading = false;
        })
        .catch(function(error) {
          $this.showError(error.code);
          $this.$store.state.login.loading = false;
        });
    },
    verifyCode() {
      let $this = this;
      if ($this.$store.state.login.step == 1 && window.confirmationResult) {
        $this.$store.state.login.loading = true;
        $this.$store.state.login.error = "";
        let code = $this.$store.state.login.code.value;
        window.confirmationResult
          .confirm(code)
          .then(function(result) {
            // User signed in successfully.
            let user = result.user;
            $this.$store.commit("setCurrentUser", user);
            $this.$router.push("/");
            let href = document.location.href;
            document.location.href = href;
          })
          .catch(function(error) {
            // User couldn't sign in (bad verification code?)
            $this.showError(error.code);
            $this.$store.state.login.loading = false;
          });
      }
    },
    showError(code) {
      if (code) {
        // console.log(code);
        let defaultMsg =
            "A network error occured. Please refresh page and try again.",
          showError = code => {
            this.$store.state.appError.msg = errors[code]
              ? errors[code]
              : defaultMsg;
            this.$store.state.appError.model = true;
          },
          errors = {
            "auth/invalid-verification-code":
              "Verification Code is invalid. Please check code and try again.",
            "auth/code-expired":
              "Code Expired. You can try a code twice. Please refresh page and try again.",
            recaptcha_expired:
              "reCaptcha Expired. Please refresh page and try again.",
            "displayName-empty": "Your name can't be less than 4 characters."
          };
        showError(code);
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
      let video_id = url.split("v=")[1];
      if (video_id) {
        let ampersandPosition = video_id.indexOf("&");
        if (ampersandPosition != -1) {
          video_id = video_id.substring(0, ampersandPosition);
        }
      }
      return video_id ? video_id : "";
    },
    getYthumb(url) {
      let video_id = url.split("v=")[1],
        ampersandPosition = video_id.indexOf("&");
      if (ampersandPosition != -1) {
        video_id = video_id.substring(0, ampersandPosition);
      }
      return `https://img.youtube.com/vi/${video_id}/maxresdefault.jpg`;
    },
    getAnim(name) {
      let data = require("@/assets/animation/" + name + ".json");
      return data;
    },
    // Youtube
    stopYvid() {
      return this.$store.state.youtube_dialog = {
        url: "",
        model: false
      };
    },
    runYvid(url) {
      return this.$store.state.youtube_dialog = {
        url,
        model: true
      };
    }
  }
});
