<template>
  <div v-if="appActive">
    <v-app v-if="current_user">
      <app-topbar></app-topbar>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
    <v-app v-else>
      <v-content>
        <no-auth-landing></no-auth-landing>
      </v-content>
    </v-app>
  </div>
  <div v-else>
    <div id="app-preloader">
      <div class="preloader-container">
        <div class="loader"></div>
        <div class="loader-text ls-1">Please Focus</div>
      </div>
    </div>
  </div>
</template>

<script>
function loadView(view) {
  return () => import(`@/components/${view}.vue`);
}
export default {
  name: "App",
  components: {
    AppTopbar: loadView("topbars/app_topbar"),
    NoAuthLanding: loadView("no_auth/no_auth_landing")
  },
  created() {
    // window.addEventListener('focus', this.addFocus);
    // window.addEventListener('blur', this.addBlur);
  },
  mounted() {
    this.getLang();
    this.$store.state.isOnline = navigator.onLine ? true : false;
  },
  data: () => ({
    appActive: true
  }),
  computed: {
    current_user() {
      return this.$store.state.currentUser;
    },
  },
  methods: {
    addFocus() {
      return this.appActive = true;
    },
    addBlur() {
      return this.appActive = false;
    },
    getLang() {
      let langs = ['ar', 'en'], 
        lang = this.$cookies.get('gen_lang');
      if (langs.includes(lang)) this.changeLang(lang);
    },
    handleConnectivityChange(status) {
      this.$store.state.isOnline = status;
    }
  }
};
</script>
