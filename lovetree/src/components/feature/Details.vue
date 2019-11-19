<template>
  <div id="map">
    <!-- 头部 -->
    <header>
      <span class="containers" @click="revert"></span>
      {{nm}}
    </header>
    <div class="opendow">
      <!-- 图片 -->
      <div class="oImg">
        <!-- <img src="../../../public/img/xiangqing_1.jpg" /> -->

        <!-- 树木价格 -->
        <div class="oPrice">
          <h5>{{nm}}</h5>
          <p class="price">8888/年</p>
        </div>
      </div>

      <!-- 树木详情 -->
      <div class="intro">
        <h5>树木简介</h5>
        <p>{{p1}}</p>
      </div>
      <!-- 树木详情头 -->

      <div class="details_head">
        <span>——&nbsp;&nbsp;</span> 树木详情
        <span>&nbsp;&nbsp;——</span>
      </div>

      <!-- 详情头下图片 -->
      <div class="culturebig">
        <img src="../../../public/img/redf-1.jpg" />
      </div>

      <!-- 详情介绍 -->
      <div class="intro">
        <h5>详情介绍</h5>
        <p>{{p1}}</p>
      </div>
    </div>

    <div class="footer">
      <!-- 认养协议项 -->
      <div class="agreement" @click="goAgreement">
        <input type="checkbox" />
        <p>
          您已阅读
          <span>《生态林认养协议》</span>
        </p>
      </div>

      <!-- 我要认养按钮 -->
      <div class="foster">
        <span>
          <img @click="CustomerService" src="../../../public/img/12.jpg" alt />
        </span>
        <button @click="toOrder">我要认养</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      p1:
        "金刚坐上菩提树者,即毕钵罗之树也。昔佛在 世,高数百尺。屡经残伐,高四五丈。佛坐其下,成 等正觉,因而谓之菩提树焉。茎干黄白,枝叶青翠, 冬夏不凋金刚坐上菩提树者,即毕钵罗之树也。昔佛在 世,高数百尺。屡经残伐,高四五丈。佛坐其下,成 等正觉,因而谓之菩提树焉。茎干黄白,枝叶青翠, 冬夏不凋"
    };
  },
  methods: {
    revert() {
      this.$router.go(-1);
    },
    //跳转到协议详情页
    goAgreement() {
      this.$router.push({ path: "/agreeOn" });
    },
    CustomerService(){
      this.$router.push({path:"/Service"})
    },
    toOrder(){
      // this.$router.push({path:"/Order"})
      if(window.sessionStorage.getItem('userId')){
        this.$router.push({ name: "Order" });
      }
      else{
        this.$router.push({ name: "logining" });
      }
    }
  },
  mounted() {

  },
  computed: {
    nm() {
      return this.$route.query.nm; //头部点击当前树木的名称
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
/* header样式 */
header {
  font-size: 22px;
  text-align: center;
  font-weight: 600;
  width: 100%;
  height: 44px;
  line-height: 44px;
}
/* 点击返回箭头样式 */
.containers {
  width: 0;
  height: 0;
  border: 13px solid;
  border-color: transparent #333 transparent transparent;
  position: absolute;
  left: 0px;
  top: 10px;
}
.containers::after {
  content: "";
  position: absolute;
  left: -9px;
  top: -13px;
  border: 13px solid;
  border-color: transparent white transparent transparent;
}
/* 详情图片外盒子 */
.oImg {
  width: 100%;
  height: 153px;
  margin: auto;
  position: relative;
}
/* 详情图片样式 */
.oImg img {
  width: 100%;
  height: 153px;
}
/* 树木价格框 */
.oPrice {
  background: white;
  width: 346px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  border-radius: 10px;
  position: absolute;
  bottom: -24px;
  left: 14px;
}
/* 树木名称 */
h5 {
  font-size: 20px;
  line-height: 48px;
  text-indent: 20px;
}
/* 树木价格样式 */
.price {
  color: green;
  font-size: 20px;
  margin-right: 20px;
  line-height: 48px;
}
/* intro 树木简介外盒子 */
.intro {
  width: 346px;
  height: 194px;
  background: white;
  margin: 40px auto;
  border-radius: 10px;
}
/* 树木简介里的小字样式 */
.intro p {
  color: #a4a4a4;
  font-size: 12px;
  padding: 0 20px;
  line-height: 20px;
  text-align: justify;
}
/* 树木详情头样式 */
.details_head {
  display: flex;
  justify-content: center;
  font-size: 8px;
  color: #a4a4a4;
  margin-bottom: 30px;
}
/* 详情头下广告图 */
.culturebig {
  margin: auto;
}
/* 认养协议项 */
.agreement {
  width: 100%;
  height: 30px;
  background: white;
  margin: auto;
  display: flex;
  font-size: 14px;
  line-height: 30px;
}
.agreement span {
  color: green;
}
.agreement p {
  margin-left: 20px;
}
/* 认养按钮样式盒子 */
.foster {
  display: flex;
  width: 100%;
  height: 50px;
  background: white;
  margin: auto;
}
/* 认养按钮样式 */
.foster button {
  width: 260px;
  height: 40px;
  border: none;
  background-color: green;
  border-radius: 20px;
  outline: none;
  margin-left: 20px;
  color: white;
  font-size: 16px;
  line-height: 40px;
  letter-spacing: 2px;
}
/* 客服 */
.foster span {
  margin-left:30px; 
  font-size: 22px;
  text-indent: 20px;
}
.foster span img{
  width: 25px;
  height: 40px;
}
.opendow {
  position: absolute;
  top: 50px;
  bottom: 80px;
  left: 0%;
  right: 0%;
  overflow: auto;
  background: #f9f9f9;
}
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>