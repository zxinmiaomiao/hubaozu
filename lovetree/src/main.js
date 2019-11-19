import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'



import { Popup, Stepper, Uploader, DatetimePicker, RadioGroup, Radio, Picker, Swipe, SwipeItem, CountDown, Dialog } from 'vant';
import 'vant/lib/uploader/style';
import 'vant/lib/picker/style'
import 'vant/lib/uploader/style';
import 'vant/lib/datetime-picker/style'
import 'vant/lib/radio/style'
import 'vant/lib/count-down/style'
import 'vant/lib/stepper/style'
Vue.use(Uploader);
Vue.use(Popup);
Vue.use(DatetimePicker);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Picker);
Vue.use(CountDown);
Vue.use(Stepper);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Dialog);
Vue.config.productionTip = false

Vue.filter('imgFomate', function (value) {
  return (value && "http://116.62.38.0:8888/" + value.replace(".jpg", "_100x100.jpg")) || '';
});
Vue.filter('treeImg', function (value) {
  return (value && "http://116.62.38.0:8888/" + value || '');
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')