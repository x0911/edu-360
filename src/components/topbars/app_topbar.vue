<template>
  <div>
    <v-app-bar color="primary" app fixed elevate-on-scroll dark>
      <v-app-bar-nav-icon
        @click.stop="
          $store.state.options['drawer'] = !$store.state.options['drawer']
        "
      >
      </v-app-bar-nav-icon>
      <v-toolbar-title>Edu 360</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "app_topbar",
  data: () => ({})
};
</script>
