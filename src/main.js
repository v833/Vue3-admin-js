import {
  createApp
} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// ant-design-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import i18n from './language/index'
createApp(App).use(i18n).use(store).use(Antd).use(router).mount("#app");

window.onerror = function (e) {
  console.log(['https://stackoverflow.com/search?q=[js]' + e]);
}