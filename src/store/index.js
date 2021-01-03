import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import team from "./team"

const axios = require("axios").default

Vue.use(Vuex)

import createPersistedState from "vuex-persistedstate";

const authState = createPersistedState({
  paths: ['auth'],
  rehydrated: function (store) {
    axios.defaults.headers.common['Authorization'] = store.state.auth.token
  }
})

export default new Vuex.Store({
  state: {
    socket: null,
  },
  mutations: {
  },
  actions: {
    
  },
  modules: {
    auth,
    team,
  },
  plugins: [authState]
})
