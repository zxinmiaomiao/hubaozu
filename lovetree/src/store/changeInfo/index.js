import axios from 'axios';
import qs from 'qs'
export default {
    namespaced: true,

    state: {
        userInfo: {},
        modifiySuccee:''
    },
    mutations: {
        // 初始化信息
        initInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        // 更新后的信息
        updatar(state,updatarUserInfo){
            state.userInfo = updatarUserInfo;
        },
        modifiySucceed(state,success){
            state.modifiySuccee = success;
        }
    },
    actions: {
        // 获取个人信息
        async getInfo({ commit }, userId) {
            await axios.get('/user/information', {
                params: { 'userId': userId }
            }).then(result => {
                commit('initInfo', result.data.data)
            })
        },

        // 修改信息
        async modification({ commit }, info) {
            await axios.post("/user/usernewinfo", qs.stringify(info)).then(result => {
                
                if (result.data.success) {
                    commit('updatar',result.data.data);
                    commit('modifiySucceed',result.data.success)
                }
            });
        }

    }
}