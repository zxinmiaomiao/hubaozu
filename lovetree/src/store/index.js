import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import Wishtree from './wishTree'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    timememory: '我的日记',
    readmemory: '',
    status: 'true'
  },
  mutations: {
    write(state, data) {
      state.timememory = data
    },
    readdiary(state, res) {
      state.readmemory = res
      if (state.readmemory.length != '') {
        // 如果有数据的话  就显示数据
        // console.log(state.readmemory.length)
        state.status = false
      }
    }
  },
  actions: {
    change(context, data) {

      context.commit('write', data)
    },
    async hasstate(context, state) {
      await axios.post('/waws/readdiary'
      ).then(res => {
        context.commit('readdiary', res.data)
        //获取你需要的数据
        console.log(res)
      });
    }

  },
  modules: {
    wishtree:Wishtree,
  }
})
