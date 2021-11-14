import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  rtl: false,
  treeShake: true,
  customVariables: ["@/assets/custom/scss/vuetify_variables.scss"],
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#1976D2",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",

        // Custom
        front: "#77838f",
        primback: "#041524",
        anchor: "#1976D2"
      }
    }
  }
});
