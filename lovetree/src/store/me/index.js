import axios from 'axios'
import qs from 'qs'
export default {
    namespaced: true,
    state: {
        detail: 0,
        energylist: [],
        loginstatus: false,
        treearr: [],
        self: ''
    },
    mutations: {
        details(state, status) {
            state.detail = status
        },
        getlist(state, arr) {
            state.energylist = arr
        },
        treedetails(state, status) {
            state.detail = status

        },
        changeme(state, loginstatus) {
            state.detail = 2;
            state.loginstatus = loginstatus
        },
        getecology(state, arr) {
            state.treearr = arr;
            console.log(arr)
        },
        getselfinfo(state, obj) {
            state.self = obj;
        },
    },
    actions: {
        details(context, item) {
            context.commit('details', item)
        },
        // async getlist(context) {

        //     let res = await axios.get('/dream/energy/list')
        //     context.commit('getlist', res.data)
        // },
        treedetails(context, num) {
            context.commit('treedetails', num)
        },
        changeme(context, loginstatus) {
            context.commit('changeme', loginstatus)
        },
        async getecology(context, treetypenumber) {
            let obj = {
                userId: window.sessionStorage.getItem('userId'),
                treeTypeId: treetypenumber
            }
            let comValue = qs.stringify(obj)
            let res = await axios.post('/order/queryOrder', comValue)
            // console.log(res.data.data.myTreeList)
            context.commit('getecology', res.data.data.myTreeList)
        },
        async getselfinfo(context, selfid) {
            let res = await axios.get(`/dream/me?userId=${selfid}`)
            console.log(res.data.data)
            context.commit('getselfinfo', res.data.data)
        },
        async getlist(context) {

            let res = await axios.get('/dream/energy/list', { params: sessionStorage.getItem('userId') })
            for (let i of res.data[0].data) {
                if (i.energyNum > 0) {
                    switch (i.type) {
                        case 1:
                            i.type = '签到';
                            break;
                        case 2:
                            i.type = '买树';
                            break;
                        case 3:
                            i.type = '好友心愿查看';
                            break;
                    }
                }
                else {
                    switch (i.type) {
                        case 1:
                            i.type = '查看心愿';
                            break;
                        case 2:
                            i.type = '许愿';
                            break;
                    }
                }
                i.createTime = i.createTime.slice(0, 10)
            }
            console.log(res.data[0].data)
            context.commit('getlist', res.data[0].data)

        },
    },


    modules: {

    }
}
