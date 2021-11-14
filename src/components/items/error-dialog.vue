<template>
  <div>
    <v-dialog max-width="500" scrollable v-model="$store.state.appError.model">
      <v-card>
        <v-card-title class="error white--text">
          Error
        </v-card-title>
        <v-card-text
          class="subtitle-2 pt-6"
          v-text="$store.state.appError.msg"
        ></v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            text
            class="text-capitalize px-6"
            large
            @click="$store.state.appError.model = false"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "global-error-dialog"
};
</script>
