<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="8" xl="9">
          <home-main></home-main>
        </v-col>
        <v-col cols="12" md="4" xl="3">
          <home-side></home-side>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {
    HomeMain: () => import("@/components/pages/home/main.vue"),
    HomeSide: () => import("@/components/pages/home/side.vue")
  }
};
</script>
