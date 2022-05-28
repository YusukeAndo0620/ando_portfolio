// import { createApp } from "vue";
// import App from "./App.vue";
import { createI18n } from "vue-i18n";

// const app = createApp(App);

// 多言語化対応
const i18n = createI18n({
  locale: "ja",
  globalInjection: true,
  messages: {
    en: require("./en.json"),
    ja: require("./ja.json"),
  },
});
// app.use(i18n);

export default i18n;
