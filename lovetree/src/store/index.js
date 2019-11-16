import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Me from './me';
import Wishtree from './wishTree'
import page from './page'
import canornotwish from './canornotwish'
import login from './login'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    wishtree: Wishtree,
    me: Me,
    page,
    canornotwish,
    login
  }
})
