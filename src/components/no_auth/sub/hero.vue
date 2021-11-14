<template>
  <div data-page="home">
    <div id="recaptcha-container"></div>
    <div
      class="full-page top-section"
      :style="
        `overflow: hidden; background-image: url(${require('@/assets/pages/no-auth-landing/Endless-Constellation.svg')})`
      "
    >
      <vue-particles
        class="no-auth-landing-particles"
        color="#1976D2"
        :particlesNumber="50"
        linesColor="#1976D2"
        :moveSpeed="1"
      >
      </vue-particles>
      <v-layout align-content-center justify-center align-center fill-height>
        <v-flex lg10 xl8>
          <v-container>
            <v-row>
              <v-col cols="12" sm="10" md="9" lg="6" xl="5">
                <v-card dark flat tile color="transparent">
                  <v-card-title class="display-2 break-word align-baseline">
                    <span style="color: #2aa9f1;" class="font-weight-bold">
                      AR
                    </span>
                    <span style="color: #ea3135;" class="font-weight-bold">
                      Med
                    </span>
                    <span
                      style="color: #2aa9f1; font-size: 24px"
                      class="font-weight-bold text-caption"
                    >
                      VR
                    </span>
                  </v-card-title>
                  <v-card-text>
                    <v-chip
                      color="primback lighten-1"
                      class="grey--text text--lighten-4"
                      dark
                      small
                      >7-day FREE Trial</v-chip
                    >
                  </v-card-text>
                  <v-card-text
                    class="subtitle-2 line-height-x1"
                    style="font-size: 16px !important"
                  >
                    Whether you're graduated or a student, ARMedVR is an
                    educational platform that will help you to study in an
                    interactive way using AR and VR Technologies
                  </v-card-text>
                  <v-card-text>
                    <v-tabs-items
                      class="transparent"
                      v-model="$store.state.login.step"
                    >
                      <v-tab-item class="transparent" :value="0">
                        <v-text-field
                          outlined
                          single-line
                          label="Phone Number"
                          dark
                          :disabled="$store.state.login.loading"
                          rounded
                          class="append-with-button dialog-text-field"
                          prepend-inner-icon="mdi-phone"
                          v-model="$store.state.login.phone.value"
                          persistent-hint
                          v-mask="$store.state.login.phone.mask"
                          @keypress.enter="getCode()"
                          hint=" "
                        >
                          <template v-slot:append>
                            <v-btn
                              width="110"
                              color="white"
                              class="black--text"
                              rounded
                              :loading="$store.state.login.loading"
                              @click="getCode()"
                            >
                              Next
                              <span class="mx-1"></span>
                              <v-icon class="rotateOnLangNigative" small
                                >mdi-keyboard-backspace</v-icon
                              >
                            </v-btn>
                          </template>
                          <template v-slot:message="{ message, key }">
                            <div :key="key">
                              <v-btn
                                class="text-capitalize"
                                color="grey lighten-1"
                                text
                              >
                                <v-avatar size="22" tile>
                                  <lot-anim
                                    renderer="svg"
                                    className="svg-white"
                                    :animationData="getAnim('warning-blink')"
                                  ></lot-anim>
                                </v-avatar>
                                <span class="mx-1"></span>
                                Lost Phone?</v-btn
                              >
                            </div>
                          </template>
                        </v-text-field>
                      </v-tab-item>
                      <v-tab-item class="transparent" :value="1">
                        <v-text-field
                          outlined
                          single-line
                          label="Code"
                          dark
                          rounded
                          v-model="$store.state.login.code.value"
                          :disabled="$store.state.login.loading"
                          class="append-with-button dialog-text-field"
                          prepend-inner-icon="mdi-lock"
                          @keypress.enter="verifyCode()"
                          persistent-hint
                          v-mask="$store.state.login.code.mask"
                          hint=" "
                        >
                          <template v-slot:append>
                            <v-btn
                              width="120"
                              color="white"
                              class="black--text"
                              :loading="$store.state.login.loading"
                              @click="verifyCode()"
                              rounded
                            >
                              Finish
                              <span class="mx-1"></span>
                              <v-icon class="rotateOnLangNigative" small
                                >mdi-keyboard-backspace</v-icon
                              >
                            </v-btn>
                          </template>
                          <template v-slot:message="{ message, key }">
                            <div :key="key">
                              <v-btn
                                class="text-capitalize"
                                color="grey lighten-1"
                                disabled
                                text
                              >
                                <v-avatar size="22" tile>
                                  <lot-anim
                                    renderer="svg"
                                    className="svg-white"
                                    :animationData="getAnim('refresh')"
                                  ></lot-anim>
                                </v-avatar>
                                <span class="mx-1"></span>
                                Resend Code in {{ 60 }}
                              </v-btn>
                            </div>
                          </template>
                        </v-text-field>
                      </v-tab-item>
                    </v-tabs-items>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col
                cols="12"
                lg="6"
                xl="7"
                v-if="$vuetify.breakpoint.lgAndUp"
                id="workflow-container"
              >
                <div
                  :class="[
                    '_3dparent',
                    $vuetify.breakpoint.lgAndDown ? '' : 'xl'
                  ]"
                >
                  <div class="phone">
                    <div class="phone-top text-center">
                      <div>
                        <v-icon color="grey lighten-1" x-small
                          >mdi-circle</v-icon
                        >
                      </div>
                      <div>
                        <div>
                          <v-icon
                            color="grey lighten-1"
                            small
                            style="margin-inline-end: 10px"
                            >mdi-circle</v-icon
                          >
                          <v-icon
                            color="grey lighten-1"
                            large
                            style="transform: rotate(90deg)"
                            >mdi-power-on</v-icon
                          >
                          <v-icon
                            color="grey lighten-1"
                            large
                            style="transform: rotate(90deg) translate(0, 10px)"
                            >mdi-power-on</v-icon
                          >
                        </div>
                      </div>
                    </div>
                    <v-system-bar color="primback lighten-1" dark>
                      <span
                        v-text="screenshots[current_screenshot].desc"
                      ></span>
                      <v-spacer></v-spacer>
                      <v-icon>mdi-wifi-strength-4</v-icon>
                      <v-icon>mdi-signal-cellular-outline</v-icon>
                      <v-icon>mdi-battery</v-icon>
                      <span v-text="current_time"></span>
                    </v-system-bar>
                    <div class="iphone-content">
                      <swiper
                        ref="screenshot_swiper"
                        style="width: 100%; height: 100%"
                        :options="swiperOption"
                      >
                        <template v-for="(img, i) in screenshots">
                          <swiper-slide :key="i">
                            <v-avatar
                              tile
                              height="100%"
                              max-height="600px"
                              width="100%"
                            >
                              <v-img contain :src="img.img">
                                <template v-slot:placeholder>
                                  <v-layout
                                    fill-height
                                    align-center
                                    justify-center
                                    ma-0
                                  >
                                    <v-progress-circular
                                      indeterminate
                                      color="primary"
                                    ></v-progress-circular>
                                  </v-layout>
                                </template>
                              </v-img>
                            </v-avatar>
                          </swiper-slide>
                        </template>
                        <div class="swiper-pagination" slot="pagination"></div>
                      </swiper>
                    </div>
                    <div class="phone-bottom">
                      <span class="phone-button"></span>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<style lang="scss">
.no-auth-landing-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #041524;
}
.full-page {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-attachment: scroll;
  background-size: auto;
  background-repeat: repeat;
  background-position: center center;
}
</style>

<script>
const fb = require("@/firebase.config.js");
export default {
  name: "hero",
  mounted() {
    this.$refs.screenshot_swiper.swiper.on("slideChange", () => {
      this.onScreenshotChange(this);
    });
    const $this = this;
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new fb.firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: function(response) {
            return true;
          },
          "expired-callback": function() {
            // Response expired.
            let error = {
              code: "recaptcha_expired"
            };
            return $this.showError(error);
          }
        }
      );
      window.recaptchaVerifier.render().then((widgetId) => {
        window.recaptchaWidgetId = widgetId;
      });
    }
  },
  data: () => ({
    swiperOption: {
      autoplay: {
        delay: 2500,
        disableOnInteraction: true
      },
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 30,
      centeredSlides: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar"
      },
      onSlideChangeEnd: function() {
        this.onScreenshotChange();
      }
    },
    current_screenshot: 0,
    screenshots: [
      {
        desc: "Galaxy",
        img: "https://i.imgur.com/jmnyF7k.jpg"
      },
      {
        desc: "Stars",
        img:
          "https://i.pinimg.com/originals/03/11/26/03112633794c2b258420b2bf7e5856e6.jpg"
      },
      {
        desc: "Flower",
        img:
          "https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        desc: "Roof",
        img: "https://wallpaperplay.com/walls/full/7/1/9/210867.jpg"
      },
      {
        desc: "Route and Cars",
        img:
          "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        desc: "Virtual Reality",
        img:
          "https://www.mordeo.org/files/uploads/2016/09/Virtual-Reality-of-Future-Military-950x1520.jpg"
      },
      {
        desc: "Glass and Web",
        img: "https://i.imgur.com/BOBnmUH.jpg"
      },
      {
        desc: "Broken Phone",
        img:
          "https://www.appsapk.com/wp-content/uploads/2018/01/crack-screen-live-wallpaper-1-1-3-screenshot-2.png"
      },
      {
        desc: "Lightening Lines",
        img:
          "https://i.pinimg.com/originals/da/db/4f/dadb4f7732c6bd7ea9a332a27996c7fd.jpg"
      },
      {
        desc: "Space",
        img:
          "https://i.pinimg.com/originals/9c/b8/96/9cb8967064a047ecf2b18f205de341cd.jpg"
      }
    ]
  }),
  methods: {
    onScreenshotChange(v) {
      this.current_screenshot = v.$refs.screenshot_swiper.swiper.activeIndex;
    }
  },
  computed: {
    current_time() {
      let date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes();
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      let strTime = hours + ":" + minutes;
      return strTime;
    }
  }
};
</script>
