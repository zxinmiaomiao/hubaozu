<template>
  <div id="setting">
    <header>
      <span @click="back" class="back"><</span>
      <span class="title">设置</span>
    </header>

    <ul class="content">
      <li>
        账号安全
        <span class="p">></span>
      </li>
      <li>
        提现资料
        <span class="p">></span>
      </li>
      <li>
        关于我们
        <span class="p">></span>
      </li>
      <li>
        平台协议
        <span class="p">></span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Setting",
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
#setting {
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
.p {
  margin-left: 270px;
}
</style>


