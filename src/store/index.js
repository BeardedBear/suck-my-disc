import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  data: {
    sputnik: {},
    prp: []
  },
  storage: ""
};

const mutations = {
  mut_dataSputnik: (state, { filteredObject }) => {
    state.data = filteredObject;
  },
  mut_dataPrp: (state, data) => {
    state.data = data;
  },
  mut_storage: (state, data) => {
    state.storage = data;
  }
};

const getters = {};

const actions = {
  act_dataSputnik: (store, { filteredObject, param }) => {
    store.commit("mut_dataSputnik", { filteredObject, param });
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
