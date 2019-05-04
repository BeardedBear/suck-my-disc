import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  data: {
    sputnik: {
      all: [],
      punk: [],
      pop: []
    },
    prp: []
  },
  storage: ""
};

const mutations = {
  mut_dataSputnikAll: (state, data) => {
    state.data.sputnik.all = data;
  },
  mut_dataSputnikPop: (state, data) => {
    state.data.sputnik.pop = data;
  },
  mut_dataSputnikPunk: (state, data) => {
    state.data.sputnik.punk = data;
  },
  mut_dataPrp: (state, data) => {
    state.data.prp = data;
  },
  mut_storage: (state, data) => {
    state.storage = data;
  }
};

const getters = {};

const actions = {
  act_dataSputnikAll: (store, data) => {
    store.commit("mut_dataSputnikAll", data);
  },
  act_dataSputnikPop: (store, data) => {
    store.commit("mut_dataSputnikPop", data);
  },
  act_dataSputnikPunk: (store, data) => {
    store.commit("mut_dataSputnikPunk", data);
  },
  act_dataPrp: (store, data) => {
    store.commit("mut_dataPrp", data);
  },
  act_storage: (store, data) => {
    store.commit("mut_storage", data);
  }
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
  // strict: true
});
