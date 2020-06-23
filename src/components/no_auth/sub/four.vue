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
                  Edu 360 makes learning fun and performance fast
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
                    Create content
                  </v-card-title>
                  <v-card-text
                    class="subtitle-1 text--front px-0 line-height-x1"
                  >
                    Ipsum incididunt tempor veniam voluptate anim anim officia
                    dolore.
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
                    Incididunt dolore dolor ipsum mollit ullamco magna nulla
                    voluptate.
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
                    Sint magna ut exercitation qui tempor eu in aliquip
                    voluptate do duis.
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
                  It's fun and creative.
                  <span class="font-weight-regular"
                    >Try your first expreience with Edu 360.</span
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
                <youtube
                  :video-id="getYid(vid_1.url)"
                  ref="vid_1"
                  @playing="vid_1.playing = true"
                  style="width: 100%; height: 500px;"
                ></youtube>
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
                  @click="runYvid(vid.url)"
                  :elevation="hover ? '20' : '5'"
                  :color="hover ? 'primback' : ''"
                  :dark="hover"
                  style="transition: .3s;"
                >
                  <v-img
                    :src="getYthumb(vid.url)"
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
      url: "https://www.youtube.com/watch?v=T0taTtOgqd8",
      playing: false
    },
    vids: [
      {
        title: "Helping chemists find the wasted material after each reaction.",
        category: "Pharmacology",
        url: "https://www.youtube.com/watch?v=WpddWfIxzOw",
        playing: false
      },
      {
        title: "Categorizing new medical atoms using Edu 360",
        category: "Medicine",
        url: "https://www.youtube.com/watch?v=FYLoP6yfIRc",
        playing: false
      },
      {
        title: "Utilizing deep learning and Edu 360 to better extreme weather",
        category: "Nano",
        url: "https://www.youtube.com/watch?v=s6LrBex9NPA",
        playing: false
      }
    ]
  }),
  methods: {
    runYvid(url) {
      this.$emit("runYvid", url);
    }
  }
};
</script>
