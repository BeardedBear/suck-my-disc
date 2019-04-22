import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Accesible with $store.state.count
const state = {
  count: 3
};

const mutations = {
  mut_multiplier: state => {
    state.count = state.count * 19;
  }
};

const getters = {
  get_count: state => {
    return state.count;
  }
};

const actions = {
  act_multiplier: store => {
    store.commit("mut_multiplier");
  }
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: true
});
