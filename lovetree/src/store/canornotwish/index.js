import axios from 'axios'

export default {
    namespaced: true,
    state: {
        wishstatus: true
    },
    mutations: {
        getstatus(state, status) {
            if (status.success ==true) {
                state.wishstatus = true;
            } else {
                state.wishstatus = false;
            }

        }

    },
    actions: {
        async getstatus(context, status) {
            let res = await axios.get('/dream/gowish',{params:{userId:1}})
            context.commit('getstatus', res.data)

        }
    },
    modules: {

    }
}