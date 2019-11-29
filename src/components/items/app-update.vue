<template>
  <div>
    <v-dialog max-width="300" persistent v-model="$store.state.app.updateFound">
      <v-card raised>
        <v-card-title :class="[color, 'white--text']">
          {{ appUpdated ? "App Updated" : "Update Found" }}
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pt-8 text-center">
          <div class="mb-6">
            <v-progress-circular
              :value="value"
              size="110"
              width="10"
              :color="color"
            >
              {{ value }}%
            </v-progress-circular>
          </div>
          <div>
            {{
              appUpdated
                ? "The new update has been successfuly installed."
                : "A new version has been found, Please wait while we install it."
            }}
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions v-if="value == 100" class="mb-2">
          <v-btn @click="refresh" class="text-capitalize px-6" :color="color" dark large block>
            Refresh Now
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "app-update",
  mounted() {
    this.interval = setInterval(() => {
      if (this.appUpdated) {
        return this.value = 100;
      } else {
        if (this.value < 90) return (this.value += 10);
      }
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  data: () => ({
    value: 0,
    interval: {}
  }),
  methods: {
    refresh() {
      window.location.reload(true);
    }
  },
  computed: {
    color() {
      return this.appUpdated ? "primary" : "error";
    },
    updateFound() {
      return window.appUpdateFound ? window.appUpdateFound : false;
    },
    appUpdated() {
      return window.appUpdateOn;
    }
  },
  watch: {
    updateFound(v) {
      if (v == true) {
        this.$store.state.app.updateFound = true;
      }
    },
    appUpdated(v) {
      if (v == true) {
        clearInterval(this.interval);
        this.value = 100;
      }
    }
  }
};
</script>
