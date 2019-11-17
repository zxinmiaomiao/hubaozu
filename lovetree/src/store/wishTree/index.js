import axios from 'axios';
export default {
    namespaced: true,
    state: {
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
        // }
    },
    actions: {
        // 数据测试  请勿删除

        async hasstate(context, data) {
            // 如果读取的到数据  则可以显示出  心愿内容表
            console.log(data)
            return await axios.get('/dream/dreamlist',{params:data}).then((res) => {
                return res.data.data  //返回心愿的数据直接给前端 不需要存store
            })
        },
        // 读取的是心愿的列表
        async readlist(context, state) {
            return await axios.post('/dream/dreamdetail', state).then((res) => {
                return res.data.data
            })
        },



    }
}