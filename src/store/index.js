import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Accesible with $store.state.count
const state = {
  count: 3,
  auth: {
    nickname: "",
    email: ""
  },
  data: {
    sputnik: []
  }
};

const mutations = {
  mut_multiplier: state => {
    state.count = state.count * 19;
  },
  mut_login: (state, { nickname, email }) => {
    state.auth.nickname = nickname;
    state.auth.email = email;
  },
  mut_dataSputnik: (state, data) => {
    state.data.sputnik = data;
  }
};

const getters = {
  get_count: state => {
    return state.count;
  },
  get_auth: state => {
    return state.auth;
  },
  get_data: state => {
    return state.data;
  }
};

const actions = {
  act_multiplier: store => {
    store.commit("mut_multiplier");
  },
  act_login: (store, { nickname, email }) => {
    store.commit("mut_login", { nickname, email });
  },
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
