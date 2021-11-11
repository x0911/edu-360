<template>
  <div>
    <v-dialog scrollable max-width="1280" v-model="model" persistent>
      <v-card raised>
        <v-card-text class="pt-4">
          <vue-core-video-player
            class="clone-cover-to-poster"
            style="width: 100%; height: 720px;"
            :autoplay="false"
            :loop="false"
            :muted="false"
            controls
            :cover="cover"
            :poster="cover"
            :src="url"
          ></vue-core-video-player>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn large depressed text color="error" class="text-capitalize">
            <v-icon large>mdi-youtube</v-icon>
            <span class="mx-1"></span>
            Watch on youtube
          </v-btn> -->
          <v-btn
            depressed
            class="text-capitalize px-6"
            color="primback"
            large
            dark
            @click="hide()"
            >Close Video</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "youtube-dialog",
  props: ["url", "model", "cover"],
  data: () => ({}),
  watch: {
    model(v) {
      if (v === true) {
        this.fixPoster();
      }
    }
  },
  methods: {
    hide() {
      this.$emit("hide_dialog");
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
