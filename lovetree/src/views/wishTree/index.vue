<template>
  <div id="wrap">
    <!-- 许愿树外框 -->
    <div class="wishTreeBox" @click="closeWish($event)">
      <h6>许愿树</h6>
      <!-- 用户信息、公益林 -->
      <div class="header">
        <div class="userInfo" @click="gotome">
          <!-- 用户信息 -->
          <div class="info">
            <div class="userPic">
              <img src alt />
            </div>
            <span class="userName">世界好大</span>
          </div>
          <!-- 能量值 -->
          <div class="info energy">
            <div class="energyLogo"></div>
            <span class="energyNum">300</span>
          </div>
        </div>
        <!-- 公益林 -->
        <router-link to="/" class="publicForest"></router-link>
      </div>
      <!-- 许愿树 -->
      <ul class="tree">
        <!-- 心愿签 -->
        <li @click.stop="lookWish()" class="myWish-1"></li>
        <li @click.stop="lookWish()" class="myWish-2"></li>
        <li @click.stop="lookWish()" class="myWish-3"></li>
      </ul>

      <!-- 签到、许愿、记日记 -->
      <div class="btnWrap">
        <span class="sign" @click="sign()" :style="{background:background}"></span>
        <router-link to="/wishingread" class="wishing"></router-link>
        <router-link :to="{name:'diary'}" class="diary"></router-link>
      </div>
      <!-- 签到成功 -->
      <div class="signSucceed" :style="{display:showSign}">
        <div class="signContent">
          <div class="succeed">签到成功</div>
          <div class="pic"></div>
          <div class="addenergy">+1能量</div>
          <div class="everySign">每日签到领能量，别忘记哦~</div>
        </div>
        <div class="close" @click="closeSign()">X</div>
      </div>
      <!-- 心愿内容 -->
      <div class="wishContent" :style="{display:showWish}">
        <div class="text">我的愿望是。。</div>
        <div class="type">公开</div>
      </div>
    </div>
    <!-- 排行榜 -->
    <RinkList></RinkList>
  </div>
</template>

<script>
import RinkList from "../../components/wishpage/RankList";

export default {
    name:'wishTree',
  data() {
    return {
      showSign: "none",
      showWish: "none",
      // 签到的背景图更换
      background: "url('/img/sign.png') 0 0px",
    };
  },


  methods: {
    // 签到
    sign() {
      this.showSign = "block";
      this.background = "url('/img/sign.png') 0 54px";
    },
    // 关闭签到框
    closeSign() {
      this.showSign = "none";
    },

    // 查看心愿
    lookWish() {
      this.showWish = "block";
    },
    // 关闭心愿
    closeWish($event) {
      if (
        $event.target.className === "wishTreeBox" ||
        $event.target.className === "tree"
      ) {
        this.showWish = "none";
      }
    },
    gotome(){
      this.$router.push({ name: "me" });
    }
  },

  mounted() {},

  components: {
    RinkList
  }
};
</script>

<style scoped>
/* 组件外边框 */
#wrap {
  width: 100%;
  height: 100%;
}
/* 许愿树盒子 */
#wrap .wishTreeBox {
  width: 100%;
  height: 100%;
  background: url("/img/wishtreebg.jpg");
  background-size: 100%;
  overflow: hidden;
  position: relative;
}
/* 标题 */
#wrap .wishTreeBox h6 {
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  margin: 33px 0px;
  position: relative;
  text-align: center;
}
/* 用户信息 / 公益林 */
#wrap .wishTreeBox .header {
  width: 100%;
  height: 62px;
}
/* 用户信息 */
.header .userInfo {
  float: left;
  /* width: 120px; */
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0px 28px 28px 0px;
  padding: 0px 16px;
}
.userInfo .info {
  font-size: 12px;
  height: 24px;
  /* width: 60px; */
  margin-top: 5px;
}
/* 用户头像 */
.info .userPic {
  float: left;
  width: 22px;
  height: 22px;
  border: 1px solid #fff;
  border-radius: 50%;
  background: green;
  margin-right: 5px;
}
.info .userPic > img {
  width: 100%;
  height: 100%;
}
/* 能量logo */
.info .energyLogo {
  float: left;
  width: 23px;
  height: 23px;
  background: url("/img/wish.png");
  background-size: 100%;
  margin-right: 5px;
}
/* 用户名、能量值 */
.info .userName,
.info .energyNum {
  float: left;
  font-size: 11px;
  height: 24px;
  line-height: 24px;
  font-weight: 600;
}
.info .energyNum {
  color: #0fa87d;
}

/* 公益林 */
.header .publicForest {
  display: block;
  float: right;
  width: 58px;
  height: 50px;
  background: url("/img/treeBtn.png");
  background-size: 100%;
  margin: 5px 17px 0 0;
}

/* 许愿树 */
.wishTreeBox .tree {
  width: 293px;
  height: 295px;
  background: url("/img/tree.png");
  background-size: 100%;
  position: absolute;
  left: 31px;
  top: 253px;
}
.wishTreeBox .tree > li {
  position: absolute;
  width: 21px;
  height: 52px;
  background: url("/img/wishlabel.png");
  background-size: 100%;
}
.wishTreeBox .tree .myWish-1{
      left: 194px;
  top: 120px;
}
.wishTreeBox .tree .myWish-2{
      left: 154px;
  top: 131px;
}
.wishTreeBox .tree .myWish-3{
      left: 54px;
  top: 120px;
}
/* 签到、许愿、记日记 */
.wishTreeBox .btnWrap {
  position: absolute;
  bottom: 38px;
  left: 0px;
  width: 255px;
  height: 54px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.sign,
.wishing,
.diary {
  display: inline-block;
  width: 64px;
  height: 100%;
}
.wishing {
  background: url("/img/wishing.png");
  background-size: 100%;
}
.diary {
  background: url("/img/diarybtn.png");
  background-size: 100%;
}
/* 签到成功 */
.signSucceed {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  /* display: none; */
}
/* 签到内容 */
.signSucceed .signContent {
  width: 280px;
  height: 250px;
  position: absolute;
  margin: auto;
  top: 0px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #0fa87d;
}
.signContent .pic {
  width: 132px;
  height: 74px;
  background: url("/img/energy-1.jpg");
  background-size: 100%;
}
.signContent .addenergy {
  font-size: 18px;
}
.signContent .everySign {
  font-size: 15px;
  color: #999;
}
/* 关闭按钮 */
.signSucceed .close {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #fff;
  color: #fff;
  position: absolute;
  left: 50%;
  margin-left: -18px;
  bottom: 140px;
  text-align: center;
}
/* 查看我的心愿 */
.wishContent {
  width: 242px;
  height: 178px;
  padding: 40px 20px 0;
  background: url("/img/mywish.png");
  background-size: 100%;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.text {
  position: absolute;
  top: 40px;
  left: 20px;
  font-size: 16px;
  letter-spacing: 1px;
  color: #fe8236;
  text-align: justify;
}
.type {
  width: 56px;
  height: 18px;
  border: 1px solid #fe8236;
  border-radius: 5px;
  position: absolute;
  bottom: 20px;
  left: 112px;
  text-align: center;
  line-height: 18px;
  color: #fe8236;
  font-size: 12px;
}
</style>