<template>
  <div>
    <v-app-bar app fixed elevate-on-scroll color="white">
      <v-app-bar-nav-icon
        v-show="!$store.state.options['drawer']"
        @click.stop="
          $store.state.options['drawer'] = !$store.state.options['drawer']
        "
      ></v-app-bar-nav-icon>
      <v-toolbar-title
        class="headline primary--text"
        style="position: relative; overflow: visible"
      >
        Edu
        <v-avatar size="70" tile style="transform: translate(-12px)">
          <v-img :src="require('@/assets/title-icon.png')"></v-img>
        </v-avatar>
        <!-- Edu <span class="font-weight-simibold">360</span> -->
        <!-- <span class="display-2" style="position: absolute; top: 50%; right: 0; transform: translate(0, -50%)">|</span> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="text-capitalize" color="primary" depressed>
          <v-icon style="margin-inline-end: 10px;">mdi-crown-outline</v-icon>
          Go Premium
        </v-btn>
        <v-divider vertical></v-divider>
        <v-btn
          @click.stop="
            $store.state.noti_options['drawer'] = !$store.state.noti_options[
              'drawer'
            ]
          "
          depressed
        >
          <v-badge v-model="is_notis" color="error" overlap>
            <template v-slot:badge>7</template>
            <v-avatar size="25" tile>
              <lot-anim
                renderer="svg"
                :animationData="getAnim('bell')"
              ></lot-anim>
            </v-avatar>
          </v-badge>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>
<script>
const fb = require("@/firebase.config.js");
export default {
  name: "topnav",
  mounted() {},
  data: () => ({
    app_nav: false
  }),
  methods: {},
  computed: {
    notis() {
      return this.$store.state.notis;
    },
    is_notis() {
      return this.notis && this.notis.length > 0 ? true : false;
    }
  }
};
</script>
