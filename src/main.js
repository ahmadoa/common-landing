import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "./router.js";
import { createPinia } from "pinia";

const app = createApp(App);
app.use(router);
app.mount("#app");

const pinia = createPinia();
app.use(pinia);
