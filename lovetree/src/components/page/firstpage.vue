<template>
  <!-- 写日记首页进来的组件 -->
  <div class="init">
    <!-- 中间的Log部分 -->
    <div class="log">
      <p>你来或者不来，我都在静静地等你</p>
    </div>
    <!-- 写日记的按钮 -->
    <div class="buttom">
      <p @click="write()"></p>
    </div>
    <!-- 底部我的记忆 -->
    <div class="mystory">
      <p @click="get()">
        <span class="iconfont icon-shujia_selected"></span>我的记忆
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "init",
  data() {
    return {};
  },
  methods: {
    write() {
      this.$router.push({ name: "writediary" });
      this.timefont = this.$store.state.page.timememory;
      this.$store.dispatch("page/change", "我的日记");
    },
    get() {
      this.$router.push({ name: "getdiary" });
      this.timefont = this.$store.state.page.timememory;
      this.$store.dispatch("page/change", "我的记忆");
    }
  }
};
</script>
<style  scoped>
.log {
  overflow: hidden;
  width: 100%;
  height: 426px;
  background: url(/img/pane.png) no-repeat 114px 183px;
  background-size: 126px 174px;
}
.log p {
  color: white;
  text-align: center;
  font-size: 16px;
  margin-top: 109px;
}
.buttom {
  width: 100%;
  height: 123px;
}
.buttom p {
  display: block;
  width: 220px;
  height: 49px;
  background: url(/img/diary.png) no-repeat;
  background-size: 220px 49px;
  margin-left: 72px;
}
.mystory {
  width: 100%;
}
.mystory p {
  font-size: 16px;
  color: white;
  text-align: center;
}
.iconfont {
  color: white;
  margin-right: 6px;
}
</style>