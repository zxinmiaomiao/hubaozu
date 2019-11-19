
<template>
  <div>
    <!-- 这是点击许愿按钮许愿的组件 -->
    <div class="wish_bg">
      <img src="/img/wishbg.png" alt />
      <div class="wish_top">
        <p class="naver">
          <span class="iconfont icon-arrow-left  back" @click="back"></span>
          <!-- <span class="back" @click="back"></span> -->
          <span class="wish">许愿</span>
          <span class="mywishes" @click="gotomywish">我的心愿</span>
        </p>
      </div>
    </div>
    <div class="wish_text">
      <!-- 能量够，可许愿状态 -->
      <template v-if="$store.state.canornotwish.wishstatus==0">
        <div class="btn" @click="gotowish()">
          <img src="/img/wishbutton.png" alt />
        </div>
        <p class="wish_status">
          赶紧许愿吧
        </p>
      </template>
      <!-- 能量不够不可许愿 -->
      <template v-if="$store.state.canornotwish.wishstatus==1">
        <div class="btn">
          <img src="/img/cantwishbtn.png" alt />
        </div>
        <p class="wish_status" style="color:red">能量不足,不可许愿</p>
      </template>
      <!-- 许愿次数已达上限 -->
      <template v-if="$store.state.canornotwish.wishstatus==2">
        <div class="btn">
          <img src="/img/cantwishbtn.png" alt />
        </div>
        <p class="wish_status" style="color:red">许愿次数已达上限,不可许愿</p>
      </template>
      <div class="game">
        <p class="rule">活动规则</p>
        <p class="rule_inner">1.每次消耗2能量,每天最多许愿1次</p>
        <p class="rule_inner">2.愿望可公开、赠送能量、赠送金额可见</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wishcomponent",
  methods: {
    back() {
      this.$router.push({ name: "wishTree" });
    },
    gotomywish() {
      this.$router.push({ name: "wishingread" });
    },
    gotowish() {
      this.$router.push({ name: "writewish" });
    }
  },
  async mounted() {
    await this.$store.dispatch("canornotwish/getstatus");
  }
};
</script>

<style scoped>
.wish_bg {
  position: relative;
}
.wish_top {
  width: 375px;
  height: 30px;
  position: absolute;
  top: 32px;
}
.naver {
  display: flex;
  width: 300px;
  height: 30px;
  margin: 0 auto;
  /* justify-content: space-between; */
  align-items: center;
  color: #fff;
}
.back {
  font-size: 14px;
}
.wish {
  font-size: 14px;
  margin-left: 124px;
}
.mywishes {
  font-size: 14px;
  margin-left: 74px;
}
.wish_text {
  width: 375px;
  /* height: 387px; */
}
.btn {
  margin-top: 35px;
  margin-bottom: 19px;
}
.btn img {
  width: 220px;
  display: block;
  margin: 0 auto;
}
.wish_status {
  font-size: 16px;
  text-align: center;
  margin-bottom: 40px;
}
.rule {
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
}
.rule_inner {
  font-size: 14px;
  width: 300px;
  margin: 0 auto;
}
</style>