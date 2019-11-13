import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'


import { Popup , Uploader , DatetimePicker,RadioGroup, Radio} from 'vant';
import 'vant/lib/uploader/style';
import 'vant/lib/datetime-picker/style'
import 'vant/lib/radio/style'
Vue.use(Uploader);
Vue.use(Popup);
Vue.use(DatetimePicker);
Vue.use(RadioGroup);
Vue.use(Radio);


Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
