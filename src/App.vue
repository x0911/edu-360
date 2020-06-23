<template>
  <div>
    <app-update></app-update>
    <div v-if="appActive">
      <v-app v-if="current_user">
        <app-sidebar></app-sidebar>
        <notis-sidebar></notis-sidebar>
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
      <youtube-dialog @hide_dialog="stopYvid" :url="$store.state.youtube_dialog.url" :model="$store.state.youtube_dialog.model"></youtube-dialog>
    </div>
    <div v-else>
      <div id="app-preloader">
        <div class="preloader-container">
          <div class="loader"></div>
          <div class="loader-text ls-1">Please Focus</div>
        </div>
      </div>
    </div>
    <global-error-dialog></global-error-dialog>
  </div>
</template>

<script>
function loadView(view) {
  return () => import(`@/components/${view}.vue`);
}
export default {
  name: "App",
  components: {
    AppUpdate: loadView("items/app-update"),
    AppSidebar: loadView("sidebars/global_sidebar"),
    NotisSidebar: loadView("sidebars/notis_sidebar"),
    AppTopbar: loadView("topbars/global_topbar"),
    NoAuthLanding: loadView("no_auth/no_auth_landing"),
    GlobalErrorDialog: loadView("items/error-dialog"),
    YoutubeDialog: loadView("items/youtube-dialog")
  },
  created() {
    window.addEventListener('focus', this.addFocus);
    window.addEventListener('blur', this.addBlur);
  },
  mounted() {
    this.getLang();
    this.$store.state.isOnline = navigator.onLine ? true : false;
    // console.log(this.current_user);
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
