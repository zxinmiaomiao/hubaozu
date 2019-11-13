import axios from 'axios'

export default {
    namespaced: true,
    state: {
        wishstatus:true
    },
    mutations: {
        getstatus(state,status){
            if(status.energysum>=2){
                state.wishstatus = true;
            }else{
                state.wishstatus = false;
            }
            
        }
      
    },
    actions: {
        async getstatus(context,status){
            let res = await axios.post('/waws/wish/status',{id:111})
            context.commit('getstatus',res.data) 
            
        }
    },
    modules: {
        
    }
}