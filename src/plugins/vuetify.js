import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#1976D2",
        primback: "#041524",
        secondary: "#424242",
        anchor: "#1976D2",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",

        // Custom
        front: "#77838f"
      }
    }
  }
});
