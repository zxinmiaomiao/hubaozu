import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'

import Uploader from 'vant/lib/uploader';
import 'vant/lib/uploader/style';
Vue.use(Uploader);

import { Popup } from 'vant';
Vue.use(Popup);

import { DatetimePicker } from 'vant';
import 'vant/lib/datetime-picker/style'
Vue.use(DatetimePicker);


Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
