<template>
  <div>
    <!-- <v-divider></v-divider> -->
    <v-footer class="primback pb-0 justify-center align-center align-content-center text-center" dark>
      <v-container class="pb-0 mb-0" fluid>
        <div style="transform: translate(0, 40px)">
          <v-row>
            <v-col cols="12" lg="10" xl="8" offset-lg="1" offset-xl="2">
              <div>
                <a
                  target="_blank"
                  v-for="(anim, i) in social"
                  :key="i"
                  :href="anim.url"
                  @mouseover="animPlay(i)"
                  @mouseleave="animStop(i)"
                  :class="[i != 0 && i != social.length - 1 ? 'mx-8' : '']"
                >
                  <v-avatar size="40" tile>
                    <lot-anim
                      renderer="svg"
                      className="svg-white svg-darken-1"
                      @getLottieInstance="getLottieInstance($event, i)"
                      loop
                      :autoplay="false"
                      :animationData="getAnim(anim.icon)"
                    ></lot-anim>
                  </v-avatar>
                </a>
              </div>
              <div>
                <v-divider class="mt-8"></v-divider>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <span class="primback--text text--lighten-5">Copyright &copy; 2020 :</span>
              <span class="mx-1"></span>
              <span>Edu 360</span>
            </v-col>
          </v-row>
        </div>
        <v-row class="pb-0">
          <v-col cols="12" class="pb-0">
            <v-img style="opacity: .3" :src="require('@/assets/media/imgs/footer-lines.svg')" width="100%"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "footer_no_auth",
  data: () => ({
    social: [
      {
        icon: "facebook",
        instance: "",
        url: "https://www.facebook.com/"
      },
      {
        icon: "twit-flying",
        instance: "",
        url: "https://twitter.com/"
      },
      {
        icon: "linkedin-bounce",
        instance: "",
        url: "https://www.linkedin.com/"
      }
    ]
  }),
  methods: {
    getLottieInstance(lottieInstance, i) {
      this.social[i].instance = lottieInstance
    },
    animPlay(i) {
      this.social[i].instance && this.social[i].instance.play();
    },
    animStop(i) {
      this.social[i].instance && this.social[i].instance.stop();
    }
  }
};
</script>
