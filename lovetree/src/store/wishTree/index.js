import axios from 'axios';
import qs from 'qs'
export default {
    namespaced: true,
    state: {
        rankList: [],

        signFlag: 0,

        userInfo: {},

        dreamList: [],
        signSucceed:'',

    },
    mutations: {
        // 初始化数据
        initWishtree(state, userData) {

            state.signFlag = userData.signFlag;
            state.rankList = userData.rankList;
            state.dreamList = userData.dreamList;
            state.userInfo = userData;

        },
        // 签到成功
        signTrue(state, result) {
            if (result) {
                state.signFlag = 0;
                state.signSucceed = result;
            }
        },
        // 更新数据
        upadteWishtree(state,userData) {
            state.signFlag = userData.signFlag;
            state.rankList = userData.rankList;
            state.dreamList = userData.dreamList;
            state.userInfo = userData;
        },



    },

    actions: {
        async wishtree({ commit }, userId) {

            await axios.get('/dream/homepage', {
                params: { userId: userId }
            }).then((userdata) => {

                console.log(userdata.data.data);
                commit('initWishtree', userdata.data.data);
            })
        },
        // 发送签到请求
        async signed({ commit }, userId) {
            let data = { userId: userId };
            await axios.post('/dream/signin',qs.stringify(data)).then(async(result)=>{
                commit('signTrue',result.data.success)
            })
        },
        async update({ commit }, userId) {
            await axios.get('/dream/homepage', {
                params: { userId: userId }
            }).then((userdata) => {
                commit('upadteWishtree', userdata.data.data);
            })
        },
    }
}