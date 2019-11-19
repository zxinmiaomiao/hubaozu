import axios from 'axios';
import qs from 'qs'
export default {
    namespaced: true,
    state: {
        // status: true,
        // readmemory: '',
        // userInfo: [],
        // dreamList: [],
        rankList: [
            {
                userId: 5678,
                userName: "顾喵喵",
                userEnergy: 52,
                userTreenum: 12,
                userImage: "ghjkfghjk.png",
            },
            {
                userId: 123,
                userName: "喵喵1",
                userEnergy: 52,
                userTreenum: 12,
                userImage: "ghjkfghjk.png",
            },
            {
                userId: 578,
                userName: "喵喵喵2",
                userEnergy: 52,
                userTreenum: 12,
                userImage: "ghjkfghjk.png",
            },
            {
                userId: 5878,
                userName: "喵喵喵3",
                userEnergy: 52,
                userTreenum: 12,
                userImage: "ghjkfghjk.png",
            },
            {
                userId: 5608,
                userName: "喵喵喵4",
                userEnergy: 52,
                userTreenum: 12,
                userImage: "ghjkfghjk.png",
            }
        ],

        signFlag: 0,

        userInfo: {
            userName: "顾喵喵",
            userEnergy: "74",
            userImage: "1904161928500000.png",
            userRank: 443,
        },

        dreamList: [
            {
                dreamId: 123,
                dreamStatus: 1,
                dreamContent: "aaaa",
                dreamCost: 0,
            },
            {
                dreamId: 456,
                dreamStatus: 2,
                dreamContent: "hhhhh",
                dreamCost: 12,
            },
            {
                dreamId: 789,
                dreamStatus: 3,
                dreamContent: "bbb",
                dreamCost: 12,
            },

        ],

    },
    mutations: {
        // 数据测试  请勿删除

        // readwish(state, res) {
        //     if (state.readmemory.length != '') {
        //         // 如果有数据的话  就显示数据
        //         // console.log(state.readmemory.length)
        //         state.status = false
        //         state.readmemory = res
        //     }
        // },


        // initWishtree(state, userData) {
        //     state.signFlag = userData.signFlag,



        // },
        signTrue(state, result) {
            if (result) {
                state.signFlag = 1;
            }
        }



    },
    actions: {
        // 数据测试  请勿删除

        // async hasstate(context, state) {

        //     // 如果读取的到数据  则可以显示出  心愿内容表
        //     await axios.post('/waws/readwish'
        //     ).then(res => {
        //         context.commit('readwish', res.data)
        //         //获取你需要的数据
        //         console.log(res)
        //     });
        // }

        async wishtree({ commit }, userId) {

            // await axios.get('/dream/homepage', {
            //     params: { userId: userId }
            // }).then((userdata) => {

            //     console.log(userData);
            //     commit('initWishtree', userData.data);
            // })


            // 获取是否签到标志
            // commit('initWishtree', userData)
        },
        // 发送签到请求
        async signed({ commit }, userId) {
            // await axios.post('/dream/signin', { userId: userId }).then((result)=>{
            //     commit('sign',result)
            // })
            let result = true;
            commit('signTrue', result)
        },
            // -------------------------------------------
        // async hasstate(context, data) {
        //     // 如果读取的到数据  则可以显示出  心愿内容表
        //     console.log(data)
        //     return await axios.get('/dream/dreamlist',{params:data}).then((res) => {
        //         return res.data.data  //返回心愿的数据直接给前端 不需要存store
        //     })
        // },
        // // 读取的是心愿的列表
        // async readlist(context, data) {
        //     let comValue = qs.stringify(data)
        //     return await axios.post('/dream/dreamdetail', data).then((res) => {
        //         return res.data.data
        //     })
        // },



    }
}