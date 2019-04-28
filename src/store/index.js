import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  data: {
    sputnik: []
  }
};

const mutations = {
  mut_dataSputnik: (state, data) => {
    state.data.sputnik = data;
  }
};

const getters = {
  get_data: state => {
    return state.data;
  }
};

const actions = {
  act_dataSputnik: (store, data) => {
    store.commit("mut_dataSputnik", data);
  }
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: true
});
