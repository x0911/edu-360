<template>
  <div>
    <v-dialog max-width="500" persistent scrollable v-model="dataModel">
      <v-card :loading="loading ? 'white' : false" loader-height="7">
        <v-card-title class="pb-0 primary white--text">
          <v-row>
            <v-col>
              Update your name
            </v-col>
            <v-col cols="auto">
              <v-btn @click="hideModel" icon dark>
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pt-6">
          <v-text-field
            outlined
            hint="It's prefered to use first and last names."
            persistent-hint
            class="dialog-text-field"
            prepend-inner-icon="mdi-face"
            label="Name"
            @keypress.enter="update"
            v-model="data"
          ></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pt-4">
          <v-spacer></v-spacer>
          <v-btn class="text-capitalize px-6" large text @click="hideModel"
            >Cancel</v-btn
          >
          <v-btn
            class="text-capitalize px-6"
            large
            color="primary"
            depressed
            @click="update"
            >Update</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// const fb = require("@/firebase.config.js");
export default {
  name: "updateUname",
  props: ["dataModel"],
  mounted() {
    this.data =
      this.current_user && this.current_user.displayName
        ? this.current_user.displayName.trim()
        : "";
  },
  data: () => ({
    data: "",
    loading: false
  }),
  computed: {
    current_user() {
      return this.$store.state.currentUser;
    }
  },
  methods: {
    update() {
      this.loading = true;
      let $this = this,
        current_user = $this.current_user,
        displayName = $this.data;
      if (displayName.trim().length >= 4) {
        current_user
          .updateProfile({
            displayName
          })
          .then(() => {
            $this.loading = false;
            $this.hideModel();
          })
          .catch((error) => {
            $this.loading = false;
            $this.showError(error.code);
          });
      } else {
        $this.loading = false;
        $this.showError("displayName-empty");
      }
    },
    hideModel() {
      return this.$emit("hideModel");
    }
  }
};
</script>
