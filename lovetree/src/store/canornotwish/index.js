import axios from 'axios'

export default {
    namespaced: true,
    state: {
        wishstatus: ''
    },
    mutations: {
        getstatus(state, status) {
            state.wishstatus=status.message
        }

    },
    actions: {
        async getstatus(context, status) {
            let res = await axios.get('/dream/gowish',{params:{'userId':sessionStorage.getItem('userId')}})
            context.commit('getstatus', res.data)

        }
    },
    modules: {

    }
}