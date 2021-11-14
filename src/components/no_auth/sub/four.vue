<template>
  <div>
    <v-layout
      class="pt-12"
      text-center
      justify-center
      align-content-center
      align-center
    >
      <v-flex sm10 md8 lg6 xl4>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-card flat tile color="transparent">
                <v-card-subtitle>
                  <v-chip class="custom-chip" small color="primback" dark
                    >What we do?</v-chip
                  >
                </v-card-subtitle>
                <v-card-title
                  class="break-word display-1 line-height-3 font-weight-light"
                >
                  ARMedVR makes learning interactive and Fun... You can join us
                  as A Content creator
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout
      class="pt-4"
      text-center
      justify-center
      align-content-center
      align-center
    >
      <v-flex sm11 lg10 xl7>
        <v-container>
          <v-row>
            <v-col cols="12" sm="4">
              <v-card tile flat color="transparent">
                <div>
                  <v-avatar
                    class="avatar-front"
                    color="grey lighten-3"
                    size="90"
                  >
                    <lot-anim
                      renderer="svg"
                      :animationData="getAnim('pencil')"
                    ></lot-anim>
                  </v-avatar>
                </div>
                <div class="mt-8">
                  <v-card-title class="px-0 py-1 d-block">
                    Create Content
                  </v-card-title>
                  <v-card-text
                    class="subtitle-1 text--front px-0 line-height-x1"
                  >
                    You can create Educational content with the help of our
                    technologies
                  </v-card-text>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card tile flat color="transparent">
                <div>
                  <v-avatar
                    class="avatar-front"
                    color="grey lighten-3"
                    size="90"
                  >
                    <lot-anim
                      renderer="svg"
                      :animationData="getAnim('upload')"
                    ></lot-anim>
                  </v-avatar>
                </div>
                <div class="mt-8">
                  <v-card-title class="px-0 py-1 d-block">
                    Upload to platform
                  </v-card-title>
                  <v-card-text
                    class="subtitle-1 text--front px-0 line-height-x1"
                  >
                    Then, you can upload the content to our platform ( After our
                    experts revision )
                  </v-card-text>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card tile flat color="transparent">
                <div>
                  <v-avatar
                    class="avatar-front"
                    color="grey lighten-3"
                    size="90"
                  >
                    <lot-anim
                      renderer="svg"
                      :animationData="getAnim('bell')"
                    ></lot-anim>
                  </v-avatar>
                </div>
                <div class="mt-8">
                  <v-card-title class="px-0 py-1 d-block">
                    Notify you
                  </v-card-title>
                  <v-card-text
                    class="subtitle-1 text--front px-0 line-height-x1"
                  >
                    finally, We will notify you that the content has uploaded
                    successfully to our platform and inform you with your
                    percentage of the content profits.
                  </v-card-text>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="mt-6">
            <v-col cols="2"></v-col>
            <v-col cols="8">
              <v-card tile flat color="transparent">
                <img :src="require('@/assets/media/imgs/pointer-1.svg')" />
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout text-center justify-center align-content-center align-center>
      <v-flex sm7 md5 lg4 xl3>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-card flat tile color="transparent">
                <v-card-title class="break-word d-block">
                  It's fun, creative, and interactive.
                  <span class="font-weight-regular"
                    >Try your first expreience with ARMedVR.</span
                  >
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout text-center justify-center align-content-center align-center>
      <v-flex xs11 lg10 xl7>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-card flat tile color="transparent">
                <vue-core-video-player
                  class="clone-cover-to-poster"
                  style="width: 100%; height: 500px;"
                  :autoplay="false"
                  :loop="false"
                  :muted="false"
                  controls
                  :cover="require('@/assets/media/covers/vid-1.png')"
                  :poster="require('@/assets/media/covers/vid-1.png')"
                  :src="vid_1.url"
                ></vue-core-video-player>
                <v-layout
                  text-center
                  justify-center
                  align-content-center
                  align-center
                >
                  <v-flex xs10 sm7 md5 lg4>
                    <v-card-text class="caption front--text text--darken-1">
                      We are launching soon. Join the priority list for
                      information and early access.
                    </v-card-text>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
    <v-layout class="pt-12" justify-center align-content-center align-center>
      <v-flex xs11 lg10 xl8>
        <v-container>
          <v-row>
            <v-col v-for="(vid, i) in vids" :key="i" cols="12" lg="4">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  shaped
                  @click="runYvid({ url: vid.url, cover: vid.cover })"
                  :elevation="hover ? '20' : '5'"
                  :color="hover ? 'primback' : ''"
                  :dark="hover"
                  style="transition: .3s;"
                >
                  <v-img
                    :src="require(`@/assets/media/covers/vid-${i + 2}.png`)"
                    aspect-ratio="1"
                    position="center center"
                    :class="[hover ? 'zoom-on-hover' : '']"
                    height="400"
                  >
                    <v-layout fill-height align-center justify-center ma-0>
                      <v-avatar size="50" :color="hover ? 'primback' : 'white'">
                        <lot-anim
                          renderer="svg"
                          :className="hover ? 'svg-white' : ''"
                          :animationData="getAnim('play-button-circled-scale')"
                        ></lot-anim>
                      </v-avatar>
                    </v-layout>
                    <template v-slot:placeholder>
                      <v-layout fill-height align-center justify-center ma-0>
                        <v-progress-circular
                          indeterminate
                          color="primary"
                        ></v-progress-circular>
                      </v-layout>
                    </template>
                  </v-img>
                  <v-card-subtitle
                    v-text="vid.category"
                    :class="[
                      'subtitle-2 pb-1',
                      !hover ? 'primback--text text--lighten-4' : ''
                    ]"
                  ></v-card-subtitle>
                  <v-card-title
                    v-text="vid.title"
                    :class="[
                      !hover ? 'primback--text text--lighten-3' : '',
                      'pt-0 line-height-x1 break-word'
                    ]"
                    style="font-size: 17px;"
                  ></v-card-title>
                  <v-card-actions>
                    <v-btn
                      text
                      :class="[
                        'text-capitalize subtitle-2 font-weight-simibold',
                        !hover ? 'primback--text text--lighten-3' : ''
                      ]"
                    >
                      Watch the video
                      <span class="mx-1"></span>
                      <v-icon>mdi-play-circle-outline</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "four",
  components: {},
  data: () => ({
    vid_1: {
      title: "Anatomy of The Eye",
      url:
        "https://drive.google.com/uc?export=download&id=1XE7CZDG1GIO4Ld9cYScIrcbAyDOWlmpX",
      playing: false
    },
    vids: [
      {
        title: "Anatomy and Physiology of the human eye ( introduction )",
        category: "Anatomy of The Eye",
        url:
          "https://drive.google.com/uc?export=download&id=1XE7CZDG1GIO4Ld9cYScIrcbAyDOWlmpX",
        playing: false,
        cover: require("@/assets/media/covers/vid-2.png")
      },
      {
        title: "Angina Pectoris , The definition , Causes and Treatment",
        category: "Human Heart",
        url:
          "https://drive.google.com/uc?export=download&id=1XE7CZDG1GIO4Ld9cYScIrcbAyDOWlmpX",
        playing: false,
        cover: require("@/assets/media/covers/vid-3.png")
      },
      {
        title: "Introduction to Organic Chemistry",
        category: "Organic Chemistry",
        url:
          "https://drive.google.com/uc?export=download&id=1XE7CZDG1GIO4Ld9cYScIrcbAyDOWlmpX",
        playing: false,
        cover: require("@/assets/media/covers/vid-4.png")
      }
    ]
  }),
  mounted() {
    setTimeout(() => {
      this.fixPoster();
    }, 1000);
  },
  methods: {
    runYvid(obj) {
      this.$emit("runYvid", obj);
    },
    fixPoster() {
      const els = document.getElementsByClassName("clone-cover-to-poster");
      [...els].forEach((el) => {
        const vid = el.children[0];
        const cover = vid.getAttribute("cover");
        vid.setAttribute("poster", cover);
      });
    }
  }
};
</script>
