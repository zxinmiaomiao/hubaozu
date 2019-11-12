<template>
  <!-- 日记的大盒子 -->
  <div class="background">
    <!-- 顶部的时间记忆的样式 -->
    <div class="timefont">
      <span class="left iconfont icon-arrow-left" @click="selecthead"></span>
      <router-link :to="{name:'init'}">
        <span>{{timefont}}</span>
      </router-link>
    </div>
    <div class="children">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "diary",
  data() {
    return {
      timefont: "我的日记"
    };
  },
  mounted() {},
  updated() {
    this.timefont = this.$store.state.page.timememory;
  },
  methods: {
    // 点击返回按钮  显示出头部的内容
    selecthead() {
      if (this.$route.name == "writediary" || this.$route.name == "getdiary") {
        this.$store.dispatch("page/change", "我的日记");
        this.$router.go(-1);
      } else if (this.$route.name == "readdiary") {
        this.$router.go(-1);
      }else if(this.$route.name == 'init'){
        this.$router.push({name:'wishTree'})
      }
      else if(this.$route.name == "init"){
        this.$router.push({name:'wishTree'})
      }
    }
  }
};
</script>
<style   scope>
.background {
  width: 100%;
  height: 100%;
  background: url(/img/background.png) no-repeat;
  background-size: 100% 100%;
}
.timefont {
  width: 100%;
  height: 41px;
  text-align: center;
}
.left {
  float: left;
  overflow: hidden;
  vertical-align: middle;
  margin-top: 6px;
  padding-left: 10px;
}
.timefont span {
  font-size: 18px;
  color: white;
}
</style>