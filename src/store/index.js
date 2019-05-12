import Vue from "vue";
import Vuex from "vuex";
import { getSputnik, getPrp } from "../api/index";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const state = {
  data: [],
  storage: [],
  sputnik: {
    activeTab: "all"
  }
};

const mutations = {
  mut_data: (state, data) => {
    state.data = data;
  },
  mut_storage: (state, data) => {
    state.storage = [...state.storage, data];
  },
  mut_sputnikActiveTab: (state, name) => {
    state.sputnik.activeTab = name;
  }
};

const getters = {};

const actions = {
  async act_dataSputnik(store) {
    try {
      const data = await getSputnik();
      store.commit("mut_data", data);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  async act_dataPrp(store) {
    try {
      const data = await getPrp();
      store.commit("mut_data", data);
      return data;
    } catch (e) {
      console.log(e);
    }
  },
  act_storage: (store, data) => {
    store.commit("mut_storage", data);
  },
  act_sputnikActiveTab: (store, name) => {
    store.commit("mut_sputnikActiveTab", name);
  }
};

export default new Vuex.Store({
  state,
  plugins: [
    createPersistedState({
      paths: ["storage", "sputnik"]
    })
  ],
  mutations,
  getters,
  actions,
  strict: process.env.NODE_ENV !== "production"
});
