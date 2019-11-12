import axios from 'axios'

export default {
  namespaced: true,
  state: {
      detail:0,
      energylist:[]
  },
  mutations: {
    details(state,status){
        state.detail = status
    },
    getlist(state,arr){
        state.energylist=arr
    },
    treedetails(state,status){
        state.detail = status
        
    }
  },
  actions: {
    details(context,item){
        context.commit('details',item)
    },
    async getlist(context){
       
        let res = await axios.post('/waws/wish/me/energy')
         context.commit('getlist',res.data)
    },
    treedetails(context,num){
        context.commit('treedetails',num)
    }
  },
  modules: {
      
  }
}
