<template>
  <div>
    <!-- 余额顶部的  我的余额部分 -->
    <div class="top">
      <span class="iconfont icon-arrow-left" @click="back()"></span>
      <span class="me">余额明细</span>
    </div>
    <!-- 余额明细的  查询余额明细部分    循环渲染-->
    <div class="moneylist">
      <p class="moneylist-one">
        <span>支付宝充值</span>
        <!-- 时间从后端获取 -->
        <span>2019-04-12</span>
      </p>
      <p class="moneylist-two">
        <!-- 金额从后端获取 -->
        <span>余额：580.00</span>
        <!-- 金额从后端获取 -->
        <span>+100.00</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "moneydetail",
  data() {
    return {};
  },
  mounted(){
    // 挂载的时候    获取到数据
  },
  methods: {
    back() {
      this.$router.push({ name: "money" });
    }
  }
};
</script>
<style  scoped>
.top {
  height: 45px;
  box-sizing: border-box;
  padding: 0 15px;
  line-height: 45px;
}
.top span {
  font-size: 18px;
}
.me {
  margin-left: 120px;
}
.moneylist {
  width: 351px;
  height: 50px;
  margin-left: 15px;
  /* box-sizing: border-box; */
  padding: 15px 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid #f3f3f3;
}
.moneylist p {
  height: 21px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.moneylist span {
  font-size: 14px;
  font-weight: 600;
}

.moneylist-two span:last-child {
  font-size: 14px;
  font-weight: 600;
  color: red;
}
</style>