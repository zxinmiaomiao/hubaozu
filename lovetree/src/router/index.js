import Vue from 'vue'
import VueRouter from 'vue-router'
import diary from '../components/page/diary'
import writediary from '../components/page/writediary'
import getdiary from '../components/page/getdiary'
import init from '../components/page/firstpage'
import readdiary from '../components/page/readdiary'
import Wish from '../views/wishTree' // 导入wish首页组件

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
  // wishTree首页路径
  {
    path:'/wishtree',
    name:'wishTree',
    component:Wish,
  }


]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
