<template>
  <div id="detail">
    <header>
      <span @click="back" class="back">&lt;</span>
      <span class="title">{{title}}</span>
    </header>
    <div class="pic">
      <img :src="detaillists.treeThumbnail|treeImg()" />
    </div>
    <div class="detail_">
      <h4>{{detaillists.treeName}}</h4>
      <p class="age">树龄：{{detaillists.treeAge}}年</p>
      <p class="address">{{detaillists.treePublisher}}</p>
      <p class="price">{{detaillists.treePrice}}.00/株</p>
    </div>
    <div class="history">
      <h4>历史典故</h4>
      <p class="history_">{{detaillist.treeDetailDesc}}</p>
    </div>
    <img :src="detaillist.treeDetailImg|treeImg()" />
    <div class="content">{{detaillist.treeDetailDesc}}</div>
    <footer>
      <p class="select">
        <input type="checkbox" />您已阅读并同意
      </p>
      <span @click="toAgreement">《古树名木认养协议》</span>
      <img class="thislogo" src="../../../public/img/12.jpg" @click="toService" />
      <p class="button" @click="toOrder">我要认养</p>
    </footer>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Detail",
  data() {
    return {
      detaillists: "",
      detaillist: "",
      treeid: ""
    };
  },

  computed: {
    title() {
      //获取path路径的query name名
      return this.$route.query.nm;
    }
  },
  async mounted() {
    //请求 1.3、查询树木详情/homepage/treedetail
   
    this.treeid = this.$route.query.treeid;
   
    await axios
      .get("/homepage/treedetail", { params: { treeId: this.treeid } })
      .then(result => {
    
     
        this.detaillists = result.data.data[0];
        this.detaillist = result.data.data[1];
      });
  },
  methods: {
    toAgreement() {
      //跳转agreement页面
      this.$router.push({ name: "agreeOn" });
    },
    toOrder() {
      //跳转order页面
      if (window.sessionStorage.getItem("userId")) {
        this.$router.push({ name: "order", query: { treeid: this.treeid } });
      } else {
        this.$router.push({ name: "logining" });
      }

      // this.$router.push({ name: "order",
      // query: { name: this.detaillist['tree_name'] , age: this.detaillist['tree_age'], price: this.detaillist['tree_price'], publisher: this.detaillist['tree_publisher']}});
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
  left: 45%;
  line-height: 30px;
  font-size: 18px;
}
.pic {
  width: 100%;
  height: 280px;
  /* background: url(../../../public/img/pic1.jpg) no-repeat; */
}
.pic img {
  width: 100%;
  height: 100%;
  display: inline-block
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
  background-color: #fff;
}
h4 {
  font-size: 16px;
}
.history_ {
  margin-top: 15px;
  line-height: 20px;
}
.content {
  height: 500px;
  /* text-align: center; */
  padding: 15px;
  word-wrap: break-word;
  width: 315px;
  /* border: 1px solid #ccc; */
  margin-left: 14px;
  margin-top: 15px;
  font-size: 14px;
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
.thislogo {
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
</style>



