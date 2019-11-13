import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import { Popup } from 'vant';
Vue.use(Popup);
Vue.config.productionTip = false
    // import Text from './components/text'
    // Vue.use(Text)

import Uploader from 'vant/lib/uploader';
import 'vant/lib/uploader/style';
Vue.use(Uploader);


import { DatetimePicker } from 'vant';
import 'vant/lib/datetime-picker/style'
Vue.use(DatetimePicker);

import { Swipe, SwipeItem, } from 'vant';
Vue.use(Swipe).use(SwipeItem);

Vue.config.productionTip = false;


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')