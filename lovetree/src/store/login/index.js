import axios from 'axios'
import qs from 'qs'
export default {
    namespaced: true,
    state: {

    },
    mutations: {

    },
    actions: {
        // 发送验证码

        async sendyzm(context, data) {
            // let comValue = qs.stringify(data)
        
            return await axios.post(`/user/sendmsm/${data}`).then((res) => {
                return res.data
            })
        },
        // 发送手机号码   并且把用户信息存储到store给用户的
        async sendphone(context, data) {
            let comValue = qs.stringify(data)
            return await axios.post("/user/login", comValue).then((res) => {
                return res.data
            })
        },

        // 发送用户id  获取到用户信息   用户名  userid  头像  余额
        async getinfo(context, data) {
            return await axios.get("/homepage/getUserInfo", { params: data }).then((res) => {
           
                return res.data.data
            })
        },


        // 发送用户id  在余额页面获取到用户的余额信息  
        async getusermoney(context, data) {
            return await axios.get("/user/mymoney", { params: { userId: data } }).then((res) => {
                return res.data.data
            })
        },
        // 发送用户id和充值金额  
        async recharge(context, data) {
            let comValue = qs.stringify(data)
            return axios.post("/user/recharge", comValue).then((res) => {
                return res.data
            })
        },
        // 点击充值明细  得到充值的详情页
        async moneydetail(context, data) {
   
            return axios.get("/user/balance", { params: data }).then((res) => {
       
                return res.data.data
            })
        },

    },

}