<template>
  <div id="writeWish">
    <div class="wrap">
      <div class="title">
        <span class="iconfont icon-arrow-left leftArr" @click="back()"></span>
        <h6>许愿</h6>
      </div>
      <p class="subTitle">
        <span></span>
        <em>许下我的心愿</em>
      </p>
      <!-- 文本框 -->
      <div class="content">
        <textarea placeholder="写下我的心愿，90字以内" v-model="wishContent" @input="words()"></textarea>
        <span>{{textNum}}/90</span>
      </div>
      <!-- 权限 -->
      <p class="subTitle">
        <span></span>
        <em>权限设置</em>
      </p>

      <!-- 权限类别 -->
      <van-radio-group v-model="limit">
        <van-radio name="1" checked-color="#07c160" @click="select()">
          <span class="color">公开</span>
        </van-radio>
        <van-radio name="2" checked-color="#07c160" @click="select()">
          <span class="color">付费可见</span>
        </van-radio>
        <van-radio name="3" checked-color="#07c160" @click="select()">
          <span class="color">送能量可见</span>
        </van-radio>
      </van-radio-group>
      <!-- 提示 -->
      <p class="tip">{{tips}}</p>
      <!-- 付费框 -->
      <div class="pay" :style="{display:showM}">
        <span>￥</span>
        <input type="text" placeholder="请输入付费金额" v-model="money" />
      </div>
      <!-- 送能量 -->
      <div class="pay" :style="{display:showE}">
        <span>能量数额：</span>
        <input type="text" v-model="energy" />
      </div>
      <button class="confirm" is-link @click="succeed"></button>

      <!-- 保存成功 -->
      <van-popup v-model="showSave" class="shadow">
        <!-- <div class="savewish">

        </div>-->
        <router-link to='/wishcomponent' class="savewish"></router-link>
      </van-popup>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  data() {
    return {
      textNum: 0,
      wishContent: "",
      limit: "",
      userId: "",
      tips: "",
      money: "",
      energy: "",
      showM: "none",
      showE: "none",
      showSave: false
    };
  },

  mounted() {
    this.userId = sessionStorage.getItem("userId");
  },

  methods: {
    // 返回前一页
    back() {
      this.$router.go(-1);
    },
    // 权限设置选择
    select() {
      switch (Number(this.limit)) {
        case 1:
          this.tips = "*完成后，任何人能查看到愿望";
          this.showM = "none";
          this.showE = "none";
          this.money = "";
          this.energy = "";
          break;
        case 2:
          this.tips =
            "*分享后好友需要支付设置金额才能查看愿望，支付的金额将返回至您的余额";
          this.showM = "block";
          this.showE = "none";
          this.energy = "";
          break;
        case 3:
          this.tips = "*好友送设置的能量后能查看愿望，能量将累计至您的能量账户";
          this.showE = "block";
          this.showM = "none";
          this.money = "";
          break;
      }
    },
    // 计算字数
    words() {
      this.textNum = this.wishContent.length;
    },
    // 成功提交
    async succeed() {
      if (this.wishContent !== "" && this.limit !== "") {
        if (this.textNum <= 90) {
          switch (Number(this.limit)) {
            case 1:
              {
                let data = {
                  wishType: this.limit,
                  wishContent: this.wishContent,
                  userId: this.userId
                };
                await axios
                  .post("/dream/wishing", qs.stringify(data))
                  .then(res => {
               
                    if (res.data.success) {
                      this.showSave = true;
                      this.wishContent = "";
                      this.limit = "";
                    }
                  });
              }
              break;
            case 2:
              {
                if (this.money === "") {
                  this.$dialog.alert({
                    message: "请输入金额"
                  });
                } else {
                  let data = {
                    wishType: this.limit,
                    wishContent: this.wishContent,
                    userId: this.userId,
                    price: this.money
                  };
           
                  await axios
                    .post("/dream/wishing", qs.stringify(data))
                    .then(res => {
                      if (res.data.success) {
                        this.showSave = true;
                        this.wishContent = "";
                        this.limit = "";
                        this.money = "";
                      }
                    });
                }
              }
              break;
            case 3:
              {
                if (this.energy === "") {
                  this.$dialog.alert({
                    message: "请输入能量"
                  });
                } else {
                  let data = {
                    wishType: this.limit,
                    wishContent: this.wishContent,
                    userId: this.userId,
                    price: this.energy
                  };
           
                  await axios
                    .post("/dream/wishing", qs.stringify(data))
                    .then(res => {
                      if (res.data.success) {
                        this.showSave = true;
                        this.wishContent = "";
                        this.limit = "";
                        this.energy = "";
                      }
                    });
                }
              }
              break;
          }
        } else {
          this.$dialog.alert({
            message: "超过限制字数"
          });
        }
      } else {
        this.$dialog.alert({
          message: "内容或者权限设置不能为空"
        });
      }
    }
  }
};
</script>

<style scoped>
#writeWish {
  width: 100%;
  height: 100%;
  background: url("/img/sharewish.png");
  background-size: 100%;
  position: relative;
}
#writeWish .wrap {
  padding: 0 20px;
}
/* head部分 */
.title {
  padding: 20px 0 0;
  height: 44px;
  background: rgba(255, 255, 255, 0);
  line-height: 44px;
  color: #fff;
  margin-bottom: 25px;
}
.title > span {
  font-size: 30px;
  vertical-align: middle;
}
.title > h6 {
  display: inline;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  margin-left: 115px;
}
/* 副标题 */
.subTitle > em {
  color: #fff;
  font-size: 18px;
}
.subTitle > span {
  display: inline-block;
  width: 15px;
  height: 20px;
  background: url("/img/label.png");
  background-size: 100%;
  margin-right: 5px;
  vertical-align: middle;
}
/* 内容区 */
.content {
  background: url("/img/writewish.png");
  background-size: 100%;
  padding: 30px;
  height: 98px;
  margin: 20px 0 25px;
  position: relative;
}
.content > span {
  font-size: 14px;
  color: #000;
  position: absolute;
  bottom: 10px;
  right: 12px;
}
.content > textarea {
  width: 100%;
  height: 100%;
  border: none;
  font-size: 18px;
  background: rgba(255, 255, 255, 0);
  letter-spacing: 1px;
}

/* 限制设置 */
.van-radio-group {
  display: flex;
  font-size: 14px;
  margin-top: 20px;
}
.van-radio {
  margin-right: 10px;
}
.color {
  color: #fff;
}
/* 提示 */
.tip {
  font-size: 12px;
  color: lightgrey;
  margin-top: 10px;
  letter-spacing: 1px;
  height: 25px;
}

/* 付费框 */
.pay {
  padding: 10px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  font-size: 18px;
  line-height: 45px;
  margin-top: 20px;
  color: #fff;
}
.pay > input {
  border: none;
  background: rgba(255, 255, 255, 0);
  color: #fff;
  margin-left: 5px;
}
/* 完成按钮 */
.confirm {
  width: 219px;
  height: 48px;
  background: url("/img/confirm.png");
  background-size: 100%;
  border: none;
  position: absolute;
  left: 80px;
  bottom: 50px;
}
/* 保存成功 */
.shadow {
  width: 300px;
  height: 400px;
}
.savewish {
  position: absolute;
  width: 300px;
  height: 400px;
  background: url("/img/savewish.png");
  background-size: 100%;
}
</style>

