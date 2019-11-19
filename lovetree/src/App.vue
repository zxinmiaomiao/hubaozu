<template>
  <div id="app">
    <!-- 登入后的路由跳转 -->
    <router-link :to="{name:'login'}"></router-link>
    <template></template>
    <router-view />
    <ul
      ref="list"
      class="nav_wrap"
      v-if="$route.path == '/naver'||$route.path == '/News'||$route.path == '/login'"
    >
      <li class="navs" :key="item.id" v-for="item of navarr">
        <template v-if="item.id==1">
          <router-link to="/naver">{{item.text}}</router-link>
        </template>
        <template v-if="item.id==2">
          <router-link to="/News">{{item.text}}</router-link>
        </template>
        <div @click="cook()">{{item.text}}</div>
        <!-- <template v-if="item.id==3 && hascook">
          <router-link to="/login">{{item.text}}</router-link>
        </template>
         <template v-else-if="item.id==3 && !hascook">
          <router-link to="/Logining">{{item.text}}</router-link>
        </template>-->
      </li>
    </ul>
  </div>
</template>
<script>
import Naver from "@/views/Naver.vue";
export default {
  data() {
    return {
      navarr: [
        { id: 1, text: "首页" },
        { id: 2, text: "资讯" },
        { id: 3, text: "个人中心" }
      ],
      hascook: ""
    };
  },
  mounted() {},
  methods: {
    cook() {
      this.hascook = window.sessionStorage.getItem("userId");
      if (this.hascook) {
   
        this.$router.push({ name: "login" });
      } else {
    
        this.$router.push({ name: "logining" });
      }
    },
    gotowish() {
      this.flag = false;
      this.$router.push({ name: "wish" });
    },
    gotofriends() {
      this.flag = false;
      this.$router.push({ name: "findfriends" });
    }
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
  border-top: 1px solid #ccc;
  /* z-index: 1; */
}
.navs {
  height: 100%;
  float: left;
  width: 30%;
  text-align: center;
  font-size: 16px;
  line-height: 48px;
}
.navs div{
color: #969696;
}
</style>
