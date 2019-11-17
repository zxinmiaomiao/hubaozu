import axios from 'axios';


export default {
    namespaced:true,

    state:{
        // dreamList:[],
        Money:{
            myMoney:5.01,
          },
        dreamList:[
            {
                dreamId: 111,
                dreamStatus: 1,
                dreamContent: "hhhhh",
                dreamCreatetime: "2019-04-21 14:57:39",
                dreamCost: 0,
            },{
                dreamId: 112,
                dreamStatus: 2,
                dreamContent: "heeeehhhh",
                dreamCreatetime: "2019-04-22 14:57:39",
                dreamCost: 6,
            },
            {
                dreamId: 113,
                dreamStatus: 3,
                dreamContent: "heeeehhhh",
                dreamCreatetime: "2019-04-22 14:57:39",
                dreamCost: 6,
            }            
        ]
    },

    mutations:{
        // initWishData(state,wishData){
        //     state.dreamList = wishData;
        // }


        // initMoney(state,myMoney){
        //     state.Money = myMoney;
        // }
    },

    actions:{
        // async getWish({commit},userId){
        //     await axios.get('dream/dreamlist',{
        //         params:{userId:userId}
        //     }).then((wishData)=>{
        //         commit('initWishData',wishData)
        //     })
        // }

        // async getMoney({commit},myId){
        //     await axios.get('user/mymoney',{
        //         params:{userId:myId}
        //     }).then(result=>{
        //         commit('initMoney',result);
        //     })
        // }
    }
}