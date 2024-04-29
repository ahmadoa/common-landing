import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "./services/router.js";
import { OhVueIcon, addIcons } from "oh-vue-icons/dist/index.esm.min.js";
import { GiHamburgerMenu } from "oh-vue-icons/icons/gi/index.js";

const app = createApp(App);
app.use(router);
app.mount("#app");
addIcons(GiHamburgerMenu);
app.component("VIcon", OhVueIcon);
