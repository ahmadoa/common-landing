import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "./router.js";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


const app = createApp(App);
app.use(router);
app.mount("#app");

const pinia = createPinia();
app.use(pinia);

library.add(faBars);
app.component("font-awesome-icon", FontAwesomeIcon)