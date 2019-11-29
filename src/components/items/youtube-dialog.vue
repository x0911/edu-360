<template>
  <div>
    <v-dialog scrollable max-width="1280" v-model="model" persistent>
      <v-card raised>

        <youtube :video-id="getYid(url)" style="width: 100%; height: 720px;"></youtube>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn large depressed text color="error" class="text-capitalize">
            <v-icon large>mdi-youtube</v-icon>
            <span class="mx-1"></span>
            Watch on youtube
          </v-btn> -->
          <v-btn depressed class="text-capitalize px-6" color="primback" large dark @click="hide()">Close Video</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "youtube-dialog",
  props: ["url", "model"],
  data: () => ({}),
  methods: {
    hide() {
      this.$emit("hide_dialog");
    }
  }
};
</script>
