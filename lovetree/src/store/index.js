import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Me from './me';
import Wishtree from './wishTree' // 许愿树数据
import page from './page'
import canornotwish from './canornotwish'
import friendTree from './wishTree/frindTree.js' //查看好友数据
import changeInfo from './changeInfo' // 修改个人信息
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
    friendtree: friendTree,
    me: Me,
    page,
    canornotwish,
    changeInfo,
    login
  }
})
