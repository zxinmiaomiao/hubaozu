import axios from 'axios';
export default {
    namespaced: true,
    state: {
        status: true,
        readmemory: '',
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
        
        // async hasstate(context, state) {

        //     // 如果读取的到数据  则可以显示出  心愿内容表
        //     await axios.post('/waws/readwish'
        //     ).then(res => {
        //         context.commit('readwish', res.data)
        //         //获取你需要的数据
        //         console.log(res)
        //     });
        // }
    }
}