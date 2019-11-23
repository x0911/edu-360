<template>
  <div>
    <v-divider></v-divider>
    <v-footer>
      <v-layout text-center justify-center align-content-center align-center>
        <v-flex lg10 xl8>
          <v-container>
            <v-row>
              <v-col cols="12">
                <a
                  target="_blank"
                  v-for="(anim, i) in social"
                  :key="i"
                  :href="anim.url"
                  @mouseover="animPlay(i)"
                  @mouseleave="animStop(i)"
                >
                  <v-avatar tile>
                    <lot-anim
                      renderer="svg"
                      @getLottieInstance="getLottieInstance($event, i)"
                      loop
                      :autoplay="false"
                      :animationData="getAnim(anim.icon)"
                    ></lot-anim>
                  </v-avatar>
                </a>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12"> </v-col>
            </v-row>
          </v-container>
        </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "footer_no_auth",
  data: () => ({
    social: [
      {
        icon: "facebook-circled-rotation",
        instance: "",
        url: ""
      },
      {
        icon: "twit-flying",
        instance: "",
        url: ""
      },
      {
        icon: "linkedin-bounce",
        instance: "",
        url: ""
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
