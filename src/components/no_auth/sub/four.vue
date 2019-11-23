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
                    <lot-anim renderer="svg" :animationData="getAnim('pencil')"></lot-anim>
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
                    <lot-anim renderer="svg" :animationData="getAnim('upload')"></lot-anim>
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
                    <lot-anim renderer="svg" :speed="5" :animationData="getAnim('bell')"></lot-anim>
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
                  It's fun and easy.
                  <span class="font-weight-regular"
                    >Try your first expreience with Edu 360 now.</span
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
                ></youtube>
                <v-layout text-center justify-center align-content-center align-center>
                  <v-flex xs10 sm7 md5 lg4>
                    <v-card-text class="caption front--text text--darken-1">
                      We are launching soon. Join the priority list for information
                      and early access.
                    </v-card-text>
                  </v-flex>
                </v-layout>
              </v-card>
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
    }
  })
};
</script>
