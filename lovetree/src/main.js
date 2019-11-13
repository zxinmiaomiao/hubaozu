import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'


import { Popup , Uploader , DatetimePicker,RadioGroup, Radio,Picker, Swipe, SwipeItem, } from 'vant';
import 'vant/lib/uploader/style';
import 'vant/lib/picker/style'
import 'vant/lib/uploader/style';
import 'vant/lib/datetime-picker/style'
import 'vant/lib/radio/style'
Vue.use(Uploader);
Vue.use(Popup);
Vue.use(DatetimePicker);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Picker);
Vue.use(Swipe).use(SwipeItem);
Vue.config.productionTip = false



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')