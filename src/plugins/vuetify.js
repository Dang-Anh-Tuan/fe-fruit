import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#f76e00",
        success: "#00c851",
        warning: "#ffbb33",
        error: "#ff4444",
        info: "#33b5e5",
      },
    },
  },
});
