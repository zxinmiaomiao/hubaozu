<template>
  <div>
    <!-- 余额顶部的  我的余额部分 -->
    <div class="top">
      <span class="iconfont icon-arrow-left" @click="back()"></span>
      <span class="me">我的余额</span>
      <router-link to="/moneydetail">
        <i class="detail">明细</i>
      </router-link>
    </div>
    <!-- 我的余额显示的部分 -->

    <div class="show">
      <span class="showfont">账户余额(元)</span>
      <!-- 账户余额   后端显示的  直接显示在这里 -->
      <span class="shownum">{{moneyinfo.myMoney}}</span>
    </div>

    <!-- 充值功能 -->

    <div is-link @click="showPopup" class="recharge-font">
      <div class="recharge">
        <p>充值</p>
      </div>
    </div>
    <!-- 点击充值  弹出来的充值内容 -->
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '40%' }"
      closeable
      close-icon="close"
    >
      <div class="paylogo"></div>
      <div class="paymoney">
        <p>充值金额</p>
        <span>￥</span>
        <input type="text" class="number" maxlength="5" ref="num" />
      </div>
      <div class="submitbottom" @click="submit()">充值</div>
    </van-popup>
  </div>
</template>

<script>
import { Dialog } from "vant";
import "vant/lib/dialog/style";
export default {
  name: "money",
  data() {
    return {
      show: false,
      moneyinfo: "",
      userId: "",
      recharge: ""
    };
  },
  async mounted() {
    this.userId = sessionStorage.getItem("userId");
    this.moneyinfo = await this.$store.dispatch(
      "login/getusermoney",
      this.userId
    );
   
  },
  methods: {
    back() {
      this.$router.push({ name: "login" });
    },
    showPopup() {
      this.show = true;
    },
    // 充值成功后   把金额传给  后端
    async submit() {

      if (this.$refs.num.value != "" && this.$refs.num.value != 0) {
        // 点击充值按钮  发数据给后端  进行充值
        this.recharge = await this.$store.dispatch("login/recharge", {
          userId: this.userId,
          money: this.$refs.num.value
        });
        if (this.recharge.success == true) {
          Dialog.alert({
            title: "充值提示",
            message: "恭喜你充值成功"
          }).then(() => {
            // 发送金额给后端
            close;
            this.show = false;
            this.$refs.num.value = "";
            window.history.go(0)
          });
        }
      } else {
        Dialog.alert({
          title: "充值提示",
          message: "请输入您需要充值的金额"
        }).then(() => {
          close;
        });
      }
    }
  }
};
</script>
<style  scope>
.top {
  height: 45px;
  box-sizing: border-box;
  padding: 0 15px;
  line-height: 45px;
}
.top span {
  font-size: 18px;
}
.me {
  margin-left: 120px;
}
.detail {
  margin-top: 3px;
  font-size: 22px;
  float: right;
  /* line-height: 45px; */
}
.show {
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  padding: 15px;
  background: url(/img/money.png) no-repeat 15px 15px;
  background-size: 345px 120px;
}
.showfont {
  font-size: 16px;
  color: white;
  display: block;
  margin-left: 130px;
  margin-top: 40px;
}
.shownum {
  margin-left: 150px;
  color: white;
}
.recharge {
  width: 315px;
  height: 41px;
  margin-top: 100px;
  border-radius: 22px;
  border: 2px solid #77cdb0;
  margin-left: 30px;
  text-align: center;
}
.recharge p {
  font-size: 20px;
  line-height: 41px;
  font-weight: 600;
}
.paylogo {
  height: 40%;
  width: 100%;
  background: url(/img/pay.png) no-repeat;
  background-size: 100% 100%;
}
.paymoney p:first-child {
  padding-left: 30px;
  font-size: 20px;
  font-weight: 600;
}
.paymoney span {
  margin-left: 30px;
}
.number {
  border-bottom: 1px solid #696969;
}
.submitbottom {
  margin-top: 20px;
  margin-left: 60px;
  width: 250px;
  height: 41px;
  background: #77cdb0;
  border-radius: 22px;
  text-align: center;
  color: white;
}
</style>