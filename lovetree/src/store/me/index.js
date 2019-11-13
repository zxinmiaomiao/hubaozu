import axios from 'axios'

export default {
    namespaced: true,
    state: {
        detail: 0,
        energylist: [],
        loginstatus:false
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
        changeme(state,loginstatus) {
            state.detail = 2,
            state.loginstatus=loginstatus
        }
    },
    actions: {
        details(context, item) {
            context.commit('details', item)
        },
        async getlist(context) {

            let res = await axios.post('/waws/wish/me/energy')
            context.commit('getlist', res.data)
        },
        treedetails(context, num) {
            context.commit('treedetails', num)
        },
        changeme(context, loginstatus) {
            context.commit('changeme', loginstatus)
        }
    },
    modules: {

    }
}
