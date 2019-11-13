<template>
  <div class="recommend">
    <header>
      <span @click="back" class="back">&lt;</span>
      <span class="title">古树名木认养</span>
    </header>
    <div class="content">
      <img src="../../../public/img/newrecommend.png" />
      <!-- <img src="../../../public/img/recommend1.png"> -->
      <!-- <img src="../../../public/img/recommend2.png"> -->
    </div>
    <div class="introduction">
        <div class="api">
            <p>项目简介</p>
            <div class="inner">古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养</div>
        </div>
        <div class="api">
            <p>认养权益</p>
            <div class="inner">古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养古树名木认养</div>
        </div>
        <div></div>
    </div>
    <p class="button" @click="toItem">我要认养</p>
  </div>
</template>
<script>
export default {
  name: "Recommend",
  data() {
    return {};
  },
  methods: {},
  computed: {},
  methods: {
    toItem() {
      // console.log(this.$router)
      this.$router.push({ name: "item" });
    },
    back() {
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
header {
  height: 50px;
  top: 0px;
  background: white;
  position: fixed;
  width: 100%;
}
header .back {
  position: absolute;
  left: 20px;
  font-size: 30px;
  line-height: 50px;
}
header .title {
  position: absolute;
  left: 40%;
  line-height: 50px;
  font-size: 18px;
}
/* .content {
  margin: 60px 0;
} */

.button {
  background: white;
  width: 260px;
  height: 40px;
  border-radius: 20px;
  background: #0fa87d;
  line-height: 40px;
  text-align: center;
  color: white;
  margin-left: 60px;
  margin-bottom: 10px;
  font-size: 18px;
}
.api {
    width: 340px;
    margin: 0 auto 15px;
    
}
.api p{
    font-size: 18px;
    text-align: center;
    margin-bottom: 14px;
}
.api .inner {
    font-size: 14px;
}
</style>



