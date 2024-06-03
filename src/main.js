import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import { createPinia, PiniaVuePlugin } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { ValidationObserver, ValidationProvider } from "vee-validate";

library.add(faEnvelope, faLock, faEye, faEyeSlash, faUser, faMagnifyingGlass);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

Vue.config.productionTip = false;

Vue.use(PiniaVuePlugin);

const pinia = createPinia();

new Vue({
  router,
  pinia,
  render: (h) => h(App),
}).$mount("#app");
