<template>
  <div id="wrap">
    <!-- 许愿树外框 -->
    <div class="wishTreeBox">
      <div class="title">
        <span class="iconfont icon-arrow-left" @click="goback()"></span>
        <h6>许愿树</h6>
      </div>

      <!-- 用户信息、公益林 -->
      <div class="header">
        <div class="userInfo">
          <!-- 用户信息 -->
          <div class="info">
            <div class="userPic">
              <img :src="userInfo.userImage|imgFomate()" />
            </div>
            <span class="userName">{{userInfo.userName}}</span>
          </div>
          <!-- 能量值 -->
          <div class="info energy">
            <div class="energyLogo"></div>
            <span class="energyNum">{{userInfo.userEnergy}}</span>
          </div>
        </div>
      </div>
      <!-- 许愿树 -->
      <ul class="tree">
        <!-- 心愿签 -->
        <li
          @click.stop="lookWish($event,dream)"
          :class="'myWish-'+index"
          :key="dream.dreamId"
          v-for="(dream,index) of dreamList"
        >
          <!-- 判断类型 1公开 2付费 3送能量 -->
          <!-- 公开可见 -->
          <!-- <template v-if="index<3"> -->
            <div :class="'wishContent wishContent-'+index">
              <div class="text">{{dream.dreamContent}}</div>
              <div class="type">{{dream.dreamStatus|wishType()}}</div>
              <span @click="closeWish($event)">×</span>
            </div>
            <!-- 支付余额查看心愿 -->
            <template v-if="dream.dreamStatus==2">
              <div :class="'pay payM-'+(index+1)">
                <div class="payContent">
                  <div class="payM">￥{{dream.dreamCost}}</div>
                  <span>余额支付</span>
                  <button class="surePayM" @click="payfor($event,dream)"></button>
                </div>
                <div class="close" @click="closePay($event)">X</div>
              </div>
            </template>
            <!-- 支付能量可见 -->
            <template v-if="dream.dreamStatus==3">
              <div :class="'pay payE-'+(index+1)">
                <div class="payContent">
                  <div class="pic"></div>
                  <div class="payE">赠送{{dream.dreamCost}}个能量</div>
                  <button class="surePayE" @click="payfor($event,dream)"></button>
                </div>
                <div class="close" @click="closePay($event)">X</div>
              </div>
            <!-- </template> -->
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";

export default {
  name: "friendtree",
  data() {
    return {
      showZzc: false,
      friendId: "",
      myId: "",
      myEnergy: "",
      userInfo: {}
    };
  },
  computed: {
    dreamList() {
      return this.$store.state.friendtree.dreamList;
    },
    myMoney() {
      return this.$store.state.friendtree.Money;
    }
  },

  async mounted() {
    // 我的ID
    this.myId = sessionStorage.getItem("userId");
    // 我的能量
    this.myEnergy = this.$route.query.myEnergy;
    // 获取好友ID
    this.friendId = this.$route.query.userId;
    // 获取好友信息
    this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    // 获取好友心愿
    await this.$store.dispatch("friendtree/getWish", this.friendId);
    // 获取我的ID
    await this.$store.dispatch("friendtree/getMoney", this.myId);
  },

  methods: {
    // 查看心愿
    lookWish($event, dream) {
      if ($event.target.tagName === "LI") {
        switch (Number(dream.dreamStatus)) {
          case 1:
            $event.target.children[0].style.display = "block";
            break;
          case 2:
            $event.target.children[1].style.display = "block";
            break;
          case 3:
            $event.target.children[1].style.display = "block";
            break;
        }
      }
    },
    // 关闭心愿
    closeWish($event) {
      if ($event.target.tagName === "SPAN") {
        $event.path[1].style.display = "none";
      }
    },
    closePay($event) {
      if ($event.target.className === "close") {
        $event.path[1].style.display = "none";
      }
    },
    // 确认支付
    async payfor($event, dream) {
      if (dream.dreamStatus == 2) {
        if (this.myMoney.myMoney >= dream.dreamCost) {
          let data = {
            userId: this.myId,
            othersId: this.friendId,
            dreamStatus: dream.dreamStatus,
            dreamCost: dream.dreamCost
          };
          await axios
            .post("/dream/opendream", qs.stringify(data))
            .then(result => {
              if (result) {
                $event.path[2].style.display = "none";
                $event.path[3].children[0].style.display = "block";
              } else {
                this.$dialog.alert({
                  message: "支付失败，请稍后再试"
                });
              }
            });
        } else {
          this.$dialog.alert({
            message: "余额不足，请充值"
          });
          $event.path[2].style.display = "none";
        }
      } else {
        if (this.myEnergy >= dream.dreamCost) {
          let data = {
            userId: this.myId,
            othersId: this.friendId,
            dreamStatus: dream.dreamStatus,
            dreamCost: dream.dreamCost
          };
          await axios
            .post("/dream/opendream", qs.stringify(data))
            .then(result => {
              if (result) {
                $event.path[2].style.display = "none";
                $event.path[3].children[0].style.display = "block";
              } else {
                this.$dialog.alert({
                  message: "支付失败，请稍后再试"
                });
              }
            });
        } else {
          this.$dialog.alert({
            message: "能量不足"
          });
          $event.path[2].style.display = "none";
        }
      }
    },

    // 返回
    goback() {
      this.$router.go(-1);
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
    }
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
#wrap .wishTreeBox .title {
  color: #fff;
  font-size: 18px;
  padding: 20px;
  display: flex;
  align-items: center;
}
#wrap .wishTreeBox h6 {
  font-weight: 500;
  margin-left: 130px;
}
/* 用户信息 */
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
/* 心愿标签 */
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
/* 查看我的心愿 */
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

/* 支付查看 */

.pay {
  position: absolute;
  width: 280px;
  height: 320px;
  z-index: 999;
  display: none;
}
.payE-1,
.payM-1 {
  left: -180px;
  top: -180px;
}
.payE-2,
.payM-2 {
  left: -140px;
  top: -190px;
}
.payE-3,
.payM-3 {
  left: -40px;
  top: -180px;
}
/* 签到内容 */
.payContent {
  width: 280px;
  height: 250px;
  position: absolute;
  /* margin: auto; */
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
  color: #000;
}
.payContent .pic {
  width: 40px;
  height: 50px;
  background: url("/img/wish.png");
  background-size: 100%;
}
.payContent > span {
  font-size: 16px;
}
.payContent .payE {
  font-size: 18px;
}
.payContent .payM {
  font-size: 36px;
}
.payContent .surePayE,
.payContent .surePayM {
  display: block;
  width: 221px;
  height: 50px;
  border: none;
}
.payContent .surePayE {
  background: url("/img/payE.png");
  background-size: 100%;
}
.payContent .surePayM {
  background: url("/img/payM.png");
  background-size: 100%;
}

/* 关闭按钮 */
.close {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #fff;
  color: #fff;
  position: absolute;
  left: 120px;
  bottom: 0px;
  text-align: center;
}
</style>