<template>
  <div>
    <v-divider class="mb-0" v-if="!app_nav"></v-divider>
    <v-layout class="white" align-center align-content-center justify-center>
      <v-flex lg10 xl8>
        <v-container class="py-0 my-0">
          <v-app-bar
            :flat="!app_nav"
            :app="app_nav"
            ref="no_auth_topnav"
          >
            <v-toolbar-title class="headline" style="position: relative; width: 120px; overflow: visible">
              Edu 360
              <span class="display-2" style="position: absolute; top: 50%; right: 0; transform: translate(0, -50%)">|</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn depressed :color="app_nav ? 'primary' : 'primback'" dark class="text-capitalize">Community</v-btn>
              <v-btn depressed class="text-capitalize">Why Edu 360?</v-btn>
              <v-btn depressed>
                <v-icon>mdi-translate</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-app-bar>
        </v-container>
      </v-flex>
    </v-layout>
    <v-divider class="mb-0" v-if="!app_nav"></v-divider>
  </div>
</template>
swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
<script>
export default {
  name: "no_auth_topnav",
  mounted() {
    window.onscroll = this.checkSticky;
  },
  data: () => ({
    app_nav: false
  }),
  methods: {
    checkSticky() {
      if (window.pageYOffset > this.$refs.no_auth_topnav.$el.offsetTop) {
        this.app_nav = true;
      } else {
        this.app_nav = false;
      }
    }
  }
}
</script>