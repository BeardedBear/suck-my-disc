import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  data: {
    sputnik: [],
    prp: []
  },
  storage: ""
};

const mutations = {
  mut_dataSputnik: (state, data) => {
    state.data.sputnik = data;
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
  act_dataSputnik: (store, data) => {
    store.commit("mut_dataSputnik", data);
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
