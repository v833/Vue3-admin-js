import {
  createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// ant-design-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
createApp(App).use(store).use(Antd).use(router).mount("#app");
window.onerror = function (e) {
  console.log(['https://stackoverflow.com/search?q=[js]' + e]);
}