import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
window.onerror = function (e) {
  console.log(['https://stackoverflow.com/search?q=[js]' + e]);
}