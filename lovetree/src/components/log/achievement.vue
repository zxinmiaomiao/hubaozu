<template>
  <div id="achievement">
    <header>
      <span @click="back" class="back">
        <span class="left iconfont icon-arrow-left"></span>
      </span>
      <span class="title">我的成就</span>
    </header>
    <div class="personalinfo">
      <div class="touxiang">
        <img src alt />
      </div>
      <p class="name">1</p>
      <p class="chengjiu">已累计认养了0颗树，消耗碳0.00吨</p>
    </div>
    <ul class="content">
      <li>生态公益林环保证书</li>
      <li>古树名木环保证书</li>
      <li>红色生态林环保证书</li>
      <li>文化生态林环保证书</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "achievement",
  data() {
    return {};
  },
  computed: {},
  methods: {
    back() {
      //跳转上一级页面
      history.back();
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
#detail {
  position: relative;
}
#achievement {
  overflow: hidden;
}

header {
  height: 40px;
  margin-top: 10px;
}
header .back {
  position: absolute;
  left: 20px;
  font-size: 30px;
  line-height: 30px;
}
header .title {
  position: absolute;
  left: 45%;
  line-height: 30px;
  font-size: 18px;
}
.content {
  margin-top: 30px;
  width: 340px;
  margin-left: 20px;
}
.content li {
  width: 355px;
  height: 50px;
  font-size: 14px;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
}
/* .p {
  margin-left: 270px;
} */
/* 我的树 */
.personalinfo {
  width: 350px;
  height: 82px;
  margin: 0 auto;
  overflow: hidden;
}
.personalinfo .name {
  font-size: 14px;
  margin-top: 22px;
  float: left;
  margin-left: 15px;
}
.personalinfo .touxiang {
  height: 37px;
  width: 37px;
  border-radius: 50%;
  background-color: #ccc;
  float: left;
  margin-top: 22px;
  margin-left: 5px;
}
.personalinfo .chengjiu {
  float: left;
  font-size: 12px;
  color: #ccc;
  margin-top: 45px;
  margin-left: -8px;
}
</style>
