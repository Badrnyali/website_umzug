import { createApp } from "vue";
import "./styles/style.css";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import  router  from "./router";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueGoogleMaps, {
    load: {
      key: import.meta.env.VITE_GOOGLEAUTOCOMPLETEKEY,
      libraries: "places",
      language: "de",
      country: "De",
    },
  })
  .mount("#app");
