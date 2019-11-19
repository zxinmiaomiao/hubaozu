import axios from 'axios';
import qs from 'qs'
export default {
    namespaced: true,
    state: {
        rankList: [],

        signFlag: 0,

        userInfo: {},

        dreamList: [],
        signSucceed: '',

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
        upadteWishtree(state, userData) {
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

          
                commit('initWishtree', userdata.data.data);
            })
        },
        // 发送签到请求
        async signed({ commit }, userId) {
            let data = { userId: userId };
            await axios.post('/dream/signin', qs.stringify(data)).then(async (result) => {
                commit('signTrue', result.data.success)
            })
        },
        async update({ commit }, userId) {
            await axios.get('/dream/homepage', {
                params: { userId: userId }
            }).then((userdata) => {
                commit('upadteWishtree', userdata.data.data);
            })
        },
        // 读取心愿列表
        async hasstate(context, state) {
            // 如果读取的到数据  则可以显示出  心愿内容表
            return await axios.get('/dream/dreamlist', { params: { "userId": sessionStorage.getItem('userId') } }).then((res) => {
                return res.data.data  //返回心愿的数据直接给前端 不需要存store
            })
        },
        // 读取的是心愿的列表
        async readlist(context, state) {
            return await axios.post('/dream/dreamdetail', qs.stringify(state)).then((res) => {
                return res.data.data
            })
        },
    },
}
