import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js'
import shopCar from './modules/shopCar.js'

import vuexpersistedstate from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      ruleForm: {
        token: "",
        username: '',
      },
    }
  },
  getters: {},
  mutations: {
    SETTOKEN(state, data) {
      state.ruleForm = data
      console.log(data);
    }
  },
  actions: {
    settoken(store, data) {
      console.log(data);
      store.commit("SETTOKEN", data)
      console.log(data);
    }
  },
  plugins: [
    vuexpersistedstate({
      storage: localStorage
    })
  ],
  modules: {
    user,
    shopCar,
  }

})
