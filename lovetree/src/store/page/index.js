import axios from 'axios';
export default {
    namespaced: true,
    state: {
        timememory: '我的日记',
        readmemory: '',
        status: 'true'
    },
    mutations: {
        write(state, data) {
            state.timememory = data
        },
        readdiary(state, res) {
            state.readmemory = res
            if (state.readmemory.length != '') {
                // 如果有数据的话  就显示数据
                // console.log(state.readmemory.length)
                state.status = false
            }
        }
    },
    actions: {
        change(context, data) {

            context.commit('write', data)
        },
        async hasstate(context, state) {
            await axios.get('/dream/querydiarylist', { params: state }
            ).then(res => {
                context.commit('readdiary', res.data)
                //获取你需要的数据
            });
        },
        // 写日记利用POST请求发送给后端  后端会返回一个success
        async writediary(context, state) {
            return await axios.post('/dream/writediary', { data: state }).then((res) => {
             
                return res.data.message
            })
        },
        // 读取日记  发送post请求   里面跟  userid和diaryid  日记详情
        async readdiary(context, state) {
            return await axios.post('/dream/queryDiarydetail', { data: state }).then((res) => {
                return res.data.data
            })
        }

    },
    modules: {
    }
}
