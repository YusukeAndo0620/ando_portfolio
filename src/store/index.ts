import { createStore } from "vuex";

export default createStore({
  state: {
    language: {
      id: 1,
      value: "ja",
    },
    displayMode: {
      id: 1,
      value: "lightMode",
    },
  },
  mutations: {
    setLanguage(state, payload) {
      state.language = payload;
    },
    setDisplayMode(state, payload) {
      state.displayMode = payload;
    },
  },
  actions: {
    setLanguage({ commit }, payload) {
      commit("setLanguage", payload);
    },
    setDisplayMode({ commit }, payload) {
      commit("setDisplayMode", payload);
    },
  },
  getters: {
    language(state) {
      return state.language;
    },
    displayMode(state) {
      return state.displayMode;
    },
  },
  modules: {},
});
