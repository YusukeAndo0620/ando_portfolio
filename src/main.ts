import { createApp } from "vue";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import _ from "lodash";
import i18n from "./i18n/locales/index";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
// import VueCompositionApi from "@vue/composition-api";
import "@/assets/scss/style.scss";
const app = createApp(App);
app.use(store).use(router).use(_).use(i18n).mount("#app");

app.config.globalProperties.$_ = _;
app.provide("_", _);
// Vue.prototype.$_ = _;
// app.use(prototype)

// VueCompositionApi.prototype.$dayjs = dayjs
