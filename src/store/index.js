import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Accesible with $store.state.count
const state = {
  count: 3,
  auth: {
    nickname: "",
    email: ""
  }
};

const mutations = {
  mut_multiplier: state => {
    state.count = state.count * 19;
  },
  mut_login: (state, { nickname, email }) => {
    state.auth.nickname = nickname;
    state.auth.email = email;
  }
};

const getters = {
  get_count: state => {
    return state.count;
  },
  get_auth: state => {
    return state.auth;
  }
};

const actions = {
  act_multiplier: store => {
    store.commit("mut_multiplier");
  },
  act_login: (store, { nickname, email }) => {
    store.commit("mut_login", { nickname, email });
  }
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: true
});
