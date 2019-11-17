import axios from 'axios';

export default {
    namespaced: true,

    state: {
        userInfo: {
            userId: 2,
            userName: '喵喵喵',
            userImage: 'fghjk.png',
            userPhone: 17878787878,
            userSex: 1,
            userBirthday: '1995-2-2',
            userMoney: 5285,
            userEnergy: 52,
            userTreenum: 2,
            userCreatetime: '2011-11-11 12:12:12'
        }
    },
    mutations: {
        // initInfo(state,userInfo){
        //     state.userInfo = userInfo;
        // }
    },
    actions: {
        // 获取个人信息
        //     async getInfo({commit},userId){
        //         await axios.get('/user/information',{
        //             params:{userId:userId}
        //         }).then(result=>{
        //             commit('initInfo',result)
        //         })
        //     }
        }
    }