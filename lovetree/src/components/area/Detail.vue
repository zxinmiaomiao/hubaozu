<template>
  <div id="detail">
    <header>
      <span @click="back" class="back">&lt;</span>
      <span class="title">{{title.treename}}</span>
    </header>
    <div class="pic"></div>
    <div class="detail_">
      <h4>{{title.treename}}</h4>
      <p class="age">树龄：{{title.treeage}}</p>
      <p class="address">{{title.treeaddress}}</p>
      <p class="price">{{title.treemoney}}</p>
    </div>
    <div class="history">
      <h4>历史典故</h4>
      <p
        class="history_"
      >蓝湖是一款产品文档和设计图的共享平台,帮助互联网团队更好地管理文档和设计图。蓝湖可以在线展示Axure,自动生成设计图标注,与团队共享设计图,展示页面之间的跳转关系</p>
    </div>
    <div class="detail_inner">
      <!-- <h4>历史典故</h4>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;夜，结束了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。风，毫无预兆地席卷整片旷野，撩动人的思绪万千。星，遥遥地挂在天空之中，闪烁着它那微微星光，不如阳光般灿烂了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。风，毫无预兆地席卷整片旷野，撩动人的思绪万千。星，遥遥地挂在天空之中，闪烁着它那微微星光，不如阳光般灿烂却了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。风，毫无预兆地席卷整片旷野，撩动人的思绪万千。星，遥遥地挂在天空之中，闪烁着它那微微星光，不如阳光般灿烂却却</p>-->
      <h5>=======详情 =======</h5>
      <img class="detail_img" src="../../../public/img/listimg.jpg" />
      <p>&nbsp;&nbsp;夜，结束了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。风，毫无预兆地席卷整片旷野，撩动人的思绪万千。星，遥遥地挂在天空之中，闪烁着它那微微星光，不如阳光般灿烂却</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;夜，结束了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。风，毫无预兆地席卷整片旷野，撩动人的思绪万千。星，遥遥地挂在天空之中，闪烁着它那微微星光，不如阳光般灿烂了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。风，毫无预兆地席卷整片旷野，撩动人的思绪万千。星，遥遥地挂在天空之中，闪烁着它那微微星光，不如阳光般灿烂却了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。风，毫无预兆地席卷整片旷野，撩动人的思绪万千。星，遥遥地挂在天空之中，闪烁着它那微微星光，不如阳光般灿烂却却</p>
    </div>

    <footer>
      <p class="select">
        <input type="checkbox" />您已阅读并同意
      </p>
      <span @click="toAgreement">《古树名木认养协议》</span>
      <img class="imgtop" src="../../../public/img/kefu.jpg" @click="toService" />
      <p class="button" @click="toOrder">我要认养</p>
    </footer>
  </div>
</template>
<script>
export default {
  name: "Area",
  data() {
    return {};
  },

  computed: {
    title() {
      //获取path路径的query name名字
      // console.log(this.$route);
      console.log(this.$route.query);
      return this.$route.query;
    }
  },
  methods: {
    toAgreement() {
      //跳转agreement页面
      // console.log(this.$router)
      this.$router.push({ name: "agreeOn" });
    },
    toOrder() {
      //跳转order页面
      this.$router.push({ name: "order" });
    },
    toService() {
      //跳转客服页面
      this.$router.push({ name: "service" });
    },
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
  left: 40%;
  line-height: 30px;
  font-size: 18px;
}
.pic {
  width: 100%;
  height: 280px;
  background: url(../../../public/img/pic1.jpg) no-repeat;
}
.detail_ {
  padding: 15px;
  border-radius: 10px;
  width: 315px;
  height: 66px;
  border: 1px solid #ccc;
  z-index: 100;
  margin-top: -50px;
  position: absolute;
  left: 14px;
  background: white;
}
.age {
  position: absolute;
  top: 40px;
}
.address {
  position: absolute;
  top: 60px;
}
.price {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 16px;
  color: green;
}
p {
  font-size: 12px;
}
.history {
  padding: 15px;
  border-radius: 10px;
  width: 315px;
  height: 166px;
  margin-top: 70px;
  margin-left: 14px;
  border: 1px solid #ccc;
}
h4 {
  font-size: 16px;
}
.history_ {
  margin-top: 15px;
  line-height: 20px;
}
.content {
  height: 1000px;
  text-align: center;
}
footer {
  position: fixed;
  width: 100%;
  height: 80px;
  bottom: 0;
  background: white;
}
.select {
  position: absolute;
  left: 15px;
  margin-right: 20px;
}
span {
  font-size: 12px;
  position: absolute;
  left: 100px;
}
imgtop {
  width: 50px;
  height: 45px;
  position: absolute;
  bottom: 5px;
  left: 30px;
}
.button {
  position: absolute;
  top: 30px;
  right: 15px;
  width: 260px;
  height: 40px;
  border-radius: 20px;
  background: #0fa87d;
  line-height: 40px;
  text-align: center;
  color: white;
}
.detail_inner {
  margin-top: 60px;
  padding: 0 15px;
  height: 100%;
  padding-bottom: 125px;
}
.detail_inner h4 {
  margin-bottom: 10px;
  margin-left: 10px;
}
.detail_inner h5 {
  font-size: 12px;
  text-align: center;
  color: #888;
  margin: 20px 0;
}
.detail_img{
    width: 345px;
    height: 309px;
}
</style>



