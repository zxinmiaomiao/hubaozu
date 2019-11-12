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
import Naver from '../views/Naver'
import Me from '../components/Me'
import Findfriends from '../components/Findfriends'
import Culture from '../components/feature/Culture.vue'
import Red from '../components/feature/Red.vue'
import Special from '../components/feature/Special.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/naver'
  },
  {
    path: '/naver',
    name: 'naver',
    component: Naver,
  },
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
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  
  {
    path: '/area',
    name: 'area',
    component: Area,
    redirect:{name:'forest'},
    children:[
      // {
      //   path:'/area',
      

      // },
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
  {
    path: '/me',
    name: 'me',
    component: Me
  },
  {
    path: '/findfriends',
    name: 'findfriends',
    component: Findfriends
  },


  // 张扬&姜玄佑
  {
    path: '/special',
    name: 'special',
    redirect: {name:'culture'},
    component: Special,
    children: [
      // {
      //       path: '/',
            
      //   },
        {
            path: 'culture',
            name: 'culture',
            component: Culture,
        },
        {
            path: 'red',
            name: 'red',
            component: Red,
        }
    ]
},
{
    path: '/projectint',
    name: 'projectint',
    component: () =>
        import ('../components/feature/Projectint.vue')
},
{
    path: '/projectinter',
    name: 'projectinter',
    component: () =>
        import ('../components/feature/Projectinter.vue')
},
{
    path: '/articles',
    name: 'articles',
    component: () =>
        import ('../components/feature/Articles.vue')
},
{
    path: '/details/:id', //路由传参，把点击的当前列表数据通过路由传递
    name: 'details',
    component: () =>
        import ('../components/feature/Details.vue')
},
{
    path: '/agreeOn',
    name: 'agreeOn',
    component: () =>
        import ('../components/feature/agreeOn.vue')
},


]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
