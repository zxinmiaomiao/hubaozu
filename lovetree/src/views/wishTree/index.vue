<template>
  <div id="wrap">
    <!-- 许愿树外框 -->
    <div class="wishTreeBox">
      <h6>许愿树</h6>
      <!-- 用户信息、公益林 -->
      <div class="header">
        <div class="userInfo" @click="gotome">
          <!-- 用户信息 -->
          <div class="info">
            <div class="userPic">
              <img :src="user.userImage|imgFomate()" />
            </div>
            <span class="userName">{{user.userName}}</span>
          </div>
          <!-- 能量值 -->
          <div class="info energy">
            <div class="energyLogo"></div>
            <span class="energyNum">{{user.userEnergy|energy()}}</span>
          </div>
        </div>
        <!-- 公益林 -->
        <router-link to="/" class="publicForest"></router-link>
      </div>
      <!-- 许愿树 -->
      <ul class="tree">
        <!-- 心愿签 -->
        <li
          :key="dream.dreamId"
          v-for="(dream,index) of dreamList"
          @click.stop="lookWish($event)"
          :class="'myWish-'+ index"
        >
          <div :class="'wishContent wishContent-'+index">
            <div class="text">{{dream.dreamContent}}</div>
            <div class="type">{{dream.dreamStatus|wishType()}}</div>
            <span @click="closeWish($event)">×</span>
          </div>
        </li>
      </ul>

      <!-- 签到、许愿、记日记 -->
      <div class="btnWrap">
        <button class="sign" @click="sign()" :style="{background:background}" ref="signing"></button>
        <router-link :to="{name:'wishcomponent'}" class="wishing"></router-link>
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
    </div>
    <!-- 排行榜 -->
    <RinkList></RinkList>
  </div>
</template>

<script>
import RinkList from "../../components/wishpage/RankList";

export default {
  name: "wishTree",
  data() {
    return {
      showSign: "none", // 显示签到框
      userId: "",
      // 签到的背景图更换
      background: "url('/img/sign.png') 0 0px"
    };
  },
  computed: {
    // 心愿数据
    dreamList() {
      return this.$store.state.wishtree.dreamList;
    },
    // 用户数据
    user() {
      return this.$store.state.wishtree.userInfo;
    },

    // 签到标记
    signed() {
      return this.$store.state.wishtree.signFlag;
    },
    signsucceed() {
      return this.$store.state.wishtree.signSucceed;
    }
  },

  async mounted() {
    // 获取用户ID
    this.userId = sessionStorage.getItem("userId");
    // 向后端获取用户信息
    await this.$store.dispatch("wishtree/wishtree", this.userId);
    // 获取签到信息,

    if (!this.signed) {
      // 已签到
      this.background = "url('/img/sign.png') 0 54px";
    }
  },
  methods: {
    // 签到按钮
    async sign() {
      // 未签到
      if (this.signed) {
        // 向后端发送签到请求
        await this.$store.dispatch("wishtree/signed", this.userId);
        if (this.signsucceed) {
          this.showSign = "block";
          this.background = "url('/img/sign.png') 0 54px";
          this.$store.dispatch("wishtree/update", this.userId)
        }
      }
    },
    // 关闭签到框
    closeSign() {
      this.showSign = "none";
    },

    // 查看心愿
    lookWish($event) {
      if ($event.target.tagName === "LI") {
        $event.target.children[0].style.display = "block";
      }
    },
    // 关闭心愿
    closeWish($event) {
      if ($event.target.tagName === "SPAN") {
        $event.path[1].style.display = "none";
      }
    },
    gotome() {
      this.$router.push({ name: "me" });
    }
  },

  filters: {
    // 愿望类型转换
    wishType: function(value) {
      let dreamType = null;
      switch (Number(value)) {
        case 1:
          dreamType = "公开";
          break;
        case 2:
          dreamType = "付费可见";
          break;
        case 3:
          dreamType = "送能量可见";
          break;
      }
      return dreamType;
    },
    // 签到标记转换
    signType: function(value) {
      switch (Number(value)) {
        case 0:
          return true;
          break;
        case 1:
          return false;
          break;
      }
    },

    // 转换能量
    energy: function(value) {
      return Math.abs(value);
    }
  },

  components: { RinkList }
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
  margin-right: 5px;
}
.info .userPic > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
/* 能量logo */
.info .energyLogo {
  float: left;
  width: 23px;
  height: 30px;
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
/* 愿望标签 */
.wishTreeBox .tree .myWish-0 {
  left: 194px;
  top: 120px;
}
.wishTreeBox .tree .myWish-1 {
  left: 154px;
  top: 131px;
}
.wishTreeBox .tree .myWish-2 {
  left: 54px;
  top: 120px;
}
/* 查看我的心愿的内容 */
.wishContent {
  width: 242px;
  height: 178px;
  padding: 40px 20px 0;
  background: url("/img/mywish.png");
  background-size: 100%;
  z-index: 99999;
  position: absolute;
  display: none;
}
.wishContent > span {
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
  line-height: 25px;
  position: absolute;
  right: 10px;
  top: 20px;
}
.wishContent-0 {
  left: -180px;
  top: -150px;
}
.wishContent-1 {
  left: -140px;
  top: -160px;
}
.wishContent-2 {
  left: -40px;
  top: -150px;
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
  width: 60px;
  padding: 3px;
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
  border: none;
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
</style>