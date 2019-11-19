<template>
  <div class="wishtop">
    <div class="wishtop-font" @click="back()">
      <!-- @click="selecthead" -->
      <span class="left iconfont icon-arrow-left"></span>
      <!-- <router-link :to="{name:'init'}"> -->
      <span>我的心愿</span>
      <!-- </router-link> -->
    </div>
    <!-- 心愿的内容 -->
    <div class="wishItem">
      <p>
        <span class="headlog"><img :src="readitem.userImage|imgFomate()" alt=""></span>
        <span class="name">{{readitem.userName}}</span>
      </p>
      <div class="mainItem">{{readitem.dreamContent}}</div>
      <div class="mainstatus" v-if="readitem.dreamStatus==1">公开</div>
      <div class="mainstatus" v-else-if="readitem.dreamStatus==2">付费可见</div>
      <div class="mainstatus" v-else-if="readitem.dreamStatus==3">能量可见</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      readitem: ""
    };
  },
  async mounted() {
    this.readitem = await this.$store.dispatch(
      "wishtree/readlist",
      {userId:sessionStorage.getItem('userId'),dreamId:this.$route.query.wishid}
    );

  },
  methods: {
    back() {
      this.$router.push({ name: "wishingread" });
    }
  }
};
</script>
<style  scoped>
.wishtop {
  width: 100%;
  height: 100%;
  background: url("/img/wishbackground.png");
  background-size: 100% 100%;
  overflow: hidden;
}
.wishtop-font {
  width: 100%;
  height: 41px;
  text-align: center;
  margin-top: 10px;
}
.left {
  float: left;
  overflow: hidden;
  vertical-align: middle;
  margin-top: 6px;
  padding-left: 10px;
}
.wishtop-font span {
  font-size: 18px;
  color: white;
}
.wishItem {
  height: 290px;
  margin: 20px 40px 0 55px;
  background: url("/img/mywish.png") no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  position: relative;
}
.wishItem p {
  width: 100%;
  height: 43px;
  margin-top: 50px;
}
.headlog {
  display: block;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  background: red;
  margin-left: 20px;
  float: left;
  overflow: hidden;
}
.name {
  height: 43px;
  line-height: 43px;
  margin-left: 10px;
  font-size: 16px;
  color: #8f8f8f;
  float: left;
}
.mainItem {
  height: 120px;
  padding: 15px;
  font-size: 14px;
  color: #f7640a;
}
.mainstatus {
  width: 65px;
  height: 20px;
  border: 1px solid #f75e00;
  border-radius: 3px;
  font-size: 10px;
  text-align: center;
  height: 20px;
  color: #f75e00;
  position: absolute;
  bottom: 20px;
  right: 40%;
}
</style>