import axios from 'axios';


export default {
    namespaced:true,

    state:{
        Money:{},
        dreamList:[],
    },

    mutations:{
        initWishData(state,wishData){
            state.dreamList = wishData;
        },


        initMoney(state,myMoney){
            state.Money = myMoney;
        }
    },

    actions:{
        // 获取好友心愿列表
        async getWish({commit},userId){
            await axios.get('/dream/dreamlist',{
                params:{userId:userId}
            }).then((wishData)=>{
            
                let dreamlist = wishData.data.data
                commit('initWishData',dreamlist.slice(0,3))
            })
        },

        async getMoney({commit},myId){
            await axios.get('user/mymoney',{
                params:{userId:myId}
            }).then(result=>{
              
                commit('initMoney',result.data.data);
            })
        }
    }
}