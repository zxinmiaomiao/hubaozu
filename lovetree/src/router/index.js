import Vue from 'vue'
import VueRouter from 'vue-router'
import diary from '../components/page/diary'
import writediary from '../components/page/writediary'
import getdiary from '../components/page/getdiary'
import init from '../components/page/firstpage'
import readdiary from '../components/page/readdiary'
import login from '../views/login'
import money from '../components/log/money'
import moneydetail from '../components/log/moneydetail'
import give from '../components/log/give'

Vue.use(VueRouter)

const routes = [
  {
    path: '/diary',
    redirect: { name: 'init' }

  },
  {
    path: '/diary',
    name: 'diary',
    component: diary,
    children: [
      {
        path: 'init',
        name: 'init',
        component: init
      },
      {
        path: 'writediary',
        name: 'writediary',
        component: writediary
      },
      {
        path: 'getdiary',
        name: 'getdiary',
        component: getdiary
      },
      {
        path: 'readdiary',
        name: 'readdiary',
        component: readdiary
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/money',
    name: 'money',
    component: money
  },
  {
    path: '/moneydetail',
    name: 'moneydetail',
    component: moneydetail
  },
  {
    path: '/give',
    name: 'give',
    component: give
  }

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
