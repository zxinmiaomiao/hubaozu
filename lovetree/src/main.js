import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import 'vant/lib/picker/style'
import Uploader from 'vant/lib/uploader';
import 'vant/lib/uploader/style';
import { DatetimePicker } from 'vant';
import { Popup } from 'vant';
import { Picker } from 'vant';
import { Swipe, SwipeItem, } from 'vant';
import 'vant/lib/datetime-picker/style'
Vue.use(DatetimePicker);
Vue.use(Popup);
Vue.use(Uploader);
Vue.use(Picker);
Vue.use(Swipe).use(SwipeItem);
Vue.config.productionTip = false



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')