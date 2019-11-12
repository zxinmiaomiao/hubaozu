import Vue from 'vue'
import VueRouter from 'vue-router'
import diary from '../components/page/diary'
import writediary from '../components/page/writediary'
import getdiary from '../components/page/getdiary'
import init from '../components/page/firstpage'
import readdiary from '../components/page/readdiary'
import Wish from '../views/wishTree' // 导入wish首页组件
import Home from '../views/Home.vue'
import Area from '../components/area/Area.vue'
import Forest from '../components/area/Forest.vue'
import Forestdetail from '../components/area/Forestdetail.vue'
import Oldtree from '../components/area/Oldtree.vue'
import Detail from '../components/area/Detail.vue'
import Agreement from '../components/area/Agreement.vue'
import Order from '../components/area/Order.vue'
import Recommend from '../components/area/Recommend.vue'
import Item from '../components/area/Item.vue'
import News from '../components/news/News.vue'
import Newsdetail from '../components/news/Newsdetail.vue'
import Login from '../components/Login.vue'
import User from '../components/area/User.vue'
import Setting from '../components/Setting.vue'
import Service from '../components/Service.vue'

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
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  
  {
    path: '/area',
    name: 'area',
    component: Area,
    children:[
      {
        path:'/',
        redirect:'/area/forest',

      },
      {
        path:'forest',
        name:'forest',
        component:Forest
      },
      {
        path:'oldtree',
        name:'oldtree',
        component:Oldtree
      },
      

    ]
  },
  {
    path: '/detail',
    name: 'detail',
    component:Detail

  },
  {
    path: '/forestdetail',
    name: 'forestdetail',
    component:Forestdetail

  },
  {
    path: '/agreement',
    name: 'agreement',
    component:Agreement

  },
  {
    path: '/order',
    name: 'order',
    component:Order

  },
  {
    path: '/recommend',
    name: 'recommend',
    component:Recommend

  },
  {
    path: '/item',
    name: 'item',
    component:Item

  },
  {
    path: '/news',
    name: 'news',
    component:News

  },
  {
    path: '/newsdetail',
    name: 'newsdetail',
    component:Newsdetail

  },
  {
    path: '/login',
    name: 'login',
    component:Login

  },
  {
    path: '/user',
    name: 'user',
    component:User

  },
  {
    path: '/setting',
    name: 'setting',
    component:Setting

  },
  {
    path: '/service',
    name: 'service',
    component:Service

  },


]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
