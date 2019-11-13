<template>
  <div id="app">
    
    <!-- <router-link :to="{name:'diary'}"></router-link> -->
    <!-- 登入后的路由跳转 -->
    <router-link :to="{name:'login'}"></router-link>
    <!-- <router-link :to="{name:'diary'}"></router-link> -->
    <template >
    </template>

    <router-view />
    <ul class="nav_wrap" v-if="$route.path == '/naver'||$route.path == '/News'||$route.path == '/Logining'">
      <li class="navs" :key="item.id" v-for="item of navarr">
        <template v-if="item.id==1">
          <router-link to="/naver">{{item.text}}</router-link>
        </template>
        <template v-if="item.id==2">
          <router-link to="/News">{{item.text}}</router-link>
        </template>
        <template v-if="item.id==3">
          <router-link to="/Logining">{{item.text}}</router-link>
        </template>
        
      </li>
    </ul>
  </div>
</template>
<script>
import Naver from "@/views/Naver.vue";
export default {
  data(){
    return {
      navarr:[
          {id:1,text:'首页'},
          {id:2,text:'咨询'},
          {id:3,text:'个人中心'}
          
      ]
    }
  },
  methods: {
    gotowish() {
      this.flag = false;
      this.$router.push({ name: "wish" });
    },
    gotofriends() {
      this.flag = false;
      this.$router.push({ name: "findfriends" });
    },
  },
  components: {
    Naver
  }
};
</script>
<style>
#app {
  width: 100%;
  height: 100%;
  position: relative;
}
.nav_wrap {
  width: 100%;
  height: 48px;
  overflow: hidden;
  position: fixed;
  bottom: 0px;
  background-color: #fff;
  border-top: 1px solid #ccc
}
.navs {
  height: 100%;
  float: left;
  width: 30%;
  text-align: center;
  font-size: 16px;
  line-height: 48px;
  
}
</style>
