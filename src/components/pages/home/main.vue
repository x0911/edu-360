<template>
  <div>
    <v-row>
      <template v-for="(vid, i) in vids">
        <v-col :key="i" cols="12" sm="6" xl="4" v-if="vid.url">
          <v-hover v-slot:default="{ hover }">
            <v-card
              :elevation="hover ? '10' : '2'"
              :color="hover ? 'primback' : ''"
              :dark="hover"
              style="transition: .3s;"
              @click="runYvid(vid.url)"
            >
              <v-img
                :src="getYthumb(vid.url)"
                aspect-ratio="1"
                position="center center"
                :class="[hover ? 'zoom-on-hover' : '']"
                height="250"
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
                    <v-skeleton-loader
                      height="100%"
                      width="100%"
                      type="image"
                      loading
                    ></v-skeleton-loader>
                  </v-layout>
                </template>
              </v-img>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="vid.category"
                    :class="[
                      'subtitle-2',
                      !hover ? 'primback--text text--lighten-4' : ''
                    ]"
                    style="font-size: 11px;"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-text="vid.title"
                    :class="[
                      !hover ? 'primback--text text--lighten-2' : '',
                      'line-height-x1 break-word font-weight-medium'
                    ]"
                    style="font-size: 18px; !important"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
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
      </template>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "home-main",
  data: () => ({
    vids: [
      {
        title: "React.js Node, Express & MongoDB Crash Course.",
        category: "MERN Stack",
        url: "https://www.youtube.com/watch?v=2yddJwL1Tpg",
        playing: false
      },
      {
        title: "Complete Course Update - Everything New!",
        category: "Typescript",
        url: "https://www.youtube.com/watch?v=X4GpuYx83xk",
        playing: false
      },
      {
        title: "The Fullstack Guide with React, Node, Express & MongoDB",
        category: "MERN Stack",
        url: "https://www.youtube.com/watch?v=m8co8xfuUkg",
        playing: false
      },
      {
        title: "JavaScript Tutorial for Beginners - Crash Course",
        category: "Javascript",
        url: "https://www.youtube.com/watch?v=2qDywOS7VAc",
        playing: false
      },
      {
        title: "The Complete Guide",
        category: "Javascript",
        url: "https://www.youtube.com/watch?v=Zg9VFQkwumE",
        playing: false
      },
      {
        title: "Two Things You Were Missing!",
        category: "Global",
        url: "https://www.youtube.com/watch?v=TgDaBiiUFAM",
        playing: false
      },
      {
        title: "What's the Difference? What's Better?",
        category: "Development",
        url: "https://www.youtube.com/watch?v=I6mCTKst9II",
        playing: false
      },
      {
        title: "Tableau Tutorial for Beginners - Getting Started in 1 Hour",
        category: "Tableau",
        url: "https://www.youtube.com/watch?v=N2BFXSxw5mk",
        playing: false
      },
      {
        title: "Tableau Desktop - A Complete Introduction OUT NOW",
        category: "Tableau",
        url: "https://www.youtube.com/watch?v=8H6nksy2qDQ",
        playing: false
      },
      {
        title: "Flutter Course - Complete 2019 Update!",
        category: "Flutter",
        url: "https://www.youtube.com/watch?v=zcX-ABbLNqc",
        playing: false
      },
      {
        title: "Learn Nest.js from Scratch by building an API",
        category: "Nest.js",
        url: "https://www.youtube.com/watch?v=ulfU5vY6I78",
        playing: false
      },
      {
        title:
          "Flutter Crash Course for Beginners 2019 - Build a Flutter App with Google's Flutter & Dart",
        category: "Flutter",
        url: "https://www.youtube.com/watch?v=x0uinJvhNxI",
        playing: false
      },
      {
        title: "",
        category: "",
        url: "",
        playing: false
      },
      {
        title: "",
        category: "",
        url: "",
        playing: false
      },
      {
        title: "",
        category: "",
        url: "",
        playing: false
      }
    ]
  })
};
</script>
