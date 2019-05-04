import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  data: {
    sputnik: {
      all: [],
      altrock: [],
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
  mut_dataSputnikAltRock: (state, data) => {
    state.data.sputnik.altrock = data;
  },
  mut_dataSputnikElectro: (state, data) => {
    state.data.sputnik.electro = data;
  },
  mut_dataSputnikHipHop: (state, data) => {
    state.data.sputnik.hiphop = data;
  },
  mut_dataSputnikJazz: (state, data) => {
    state.data.sputnik.jazz = data;
  },
  mut_dataSputnikMetal: (state, data) => {
    state.data.sputnik.metal = data;
  },
  mut_dataSputnikPop: (state, data) => {
    state.data.sputnik.pop = data;
  },
  mut_dataSputnikPunk: (state, data) => {
    state.data.sputnik.punk = data;
  },
  mut_dataSputnikRock: (state, data) => {
    state.data.sputnik.rock = data;
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
  act_dataSputnikAltRock: (store, data) => {
    store.commit("mut_dataSputnikAltRock", data);
  },
  act_dataSputnikElectro: (store, data) => {
    store.commit("mut_dataSputnikElectro", data);
  },
  act_dataSputnikHipHop: (store, data) => {
    store.commit("mut_dataSputnikHipHop", data);
  },
  act_dataSputnikJazz: (store, data) => {
    store.commit("mut_dataSputnikJazz", data);
  },
  act_dataSputnikMetal: (store, data) => {
    store.commit("mut_dataSputnikMetal", data);
  },
  act_dataSputnikPop: (store, data) => {
    store.commit("mut_dataSputnikPop", data);
  },
  act_dataSputnikPunk: (store, data) => {
    store.commit("mut_dataSputnikPunk", data);
  },
  act_dataSputnikRock: (store, data) => {
    store.commit("mut_dataSputnikRock", data);
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
