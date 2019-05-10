import Vue from "vue";
import Vuex from "vuex";
import  {getSputnik, getPrp} from '../api/index';

Vue.use(Vuex);

const state = {
  data: []
};

const mutations = {
  mut_data: (state, data) => {
    state.data = data;
  }
};

const getters = {};

const actions = {
  async act_dataSputnik(store) {
    try {
      const data = await getSputnik()
      store.commit("mut_data", data);
      return data;
    } catch(e) {
      console.log(e);
    } 
  },
  async act_dataPrp(store) {
    try {
      const data = await getPrp()
      store.commit("mut_data", data);
      return data;
    } catch(e) {
      console.log(e);
    }
  }
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: process.env.NODE_ENV !== "production"
});
