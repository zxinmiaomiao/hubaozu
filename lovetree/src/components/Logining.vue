<template>
  <div id="login">
    <header>
      <span @click="back" class="back">&lt;</span>
      <span class="title">登录</span>
    </header>

    <div class="content">
      <h4>登录/注册</h4>
      <p>欢迎来到我爱我树</p>
      <div class="num">
        <input type="text" placeholder="请输入手机号码" ref="phone" @change="phonetext" />
      </div>
      <div class="yzm">
        <input type="text" placeholder="请输入验证码" ref="successyzm" maxlength="4" @blur="erroyzm" />
        <span ref="showyzm" class="showyzm"></span>
        <span is-link class="getyzm" ref="getyzm">{{yzmfont}}</span>
        <van-popup v-model="show" class="readyzm">{{font}}</van-popup>
      </div>
      <span class="select">确定即表明您同意</span>
      <span @click="toUser" class="click">《用户注册协议》</span>
      <p class="erro">{{errofont}}</p>
      <div class="button" @click="submitphone()">确定</div>
      <div class="other">第三方登录</div>
      <div class="flex">
        <img src="../../public/img/1.jpg" class="img1" />
        <img src="../../public/img/2.jpg" />
        <img src="../../public/img/3.jpg" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Logining",
  data() {
    return {
      errofont: "",
      num: "",
      showyzm: "",
      show: false,
      yzmfont: "获取验证码",
      time: "",
      font: "",
      person: ""
    };
  },
  mounted() {
    this.time = 61;
    let yzm = async () => {
      // 后端获取到的验证码  到时候要进行匹配
      this.showyzm = await this.$store.dispatch(
        "login/sendyzm",
        this.$refs.phone.value
      );
      this.$refs.getyzm.removeEventListener("click", yzm);
      if (this.showyzm.success == true) {
        this.font = "验证码发送成功";
        this.show = true;
        let timer = setInterval(() => {
          this.time--;
          this.yzmfont = this.time;
          if (this.time == 0) {
            clearInterval(timer);
            this.time = 61;
            this.yzmfont = "获取验证码";
            this.$refs.getyzm.addEventListener("click", yzm);
          }
        }, 1000);
      } else {
        this.font = "验证码发送失败";
      }
    };
    this.aa = yzm;
    this.$refs.getyzm.addEventListener("click", this.yzm);
  },
  computed: {},
  methods: {
    erroyzm() {
    
      if (this.$refs.successyzm.value == "") {
        this.errofont = "验证码不能为空";
      } else {
        this.errofont = "";
      }
    },
    phonetext() {
    
      if (!/^1[3456789]\d{9}$/.test(this.$refs.phone.value)) {
        this.errofont = "手机号码有误，请重填";
        if (this.$refs.phone.value == "") {
          this.errofont = "";
        }
        return false;
      } else {
        this.$refs.getyzm.addEventListener("click", this.aa);
        this.errofont = "";
      }
    },
    async submitphone() {
      // 提交按钮  当 验证码正确  手机号码正确的时候  提交等后端返回数据  根据状态判断是否能登入
      if (
        this.$refs.phone.value != "" &&
        this.$refs.successyzm.value.length == 4
      ) {
        // 发送数据给后端同时存储数据
        this.person = await this.$store.dispatch("login/sendphone", {
          mobile: this.$refs.phone.value,
          phoneCode: this.$refs.successyzm.value
        });
        if (this.person.success == true) {
          sessionStorage.setItem('userId', this.person.data.userId);
          this.$router.push({ name: "login" });
        } else {
          this.errofont = "验证码有误";
        }
      } else if (0 < this.$refs.successyzm.value.length < 4) {
        this.errofont = "验证码长度需4位";
      }
    },
    toUser() {
      //跳转agreement页面
  
      this.$router.push({ name: "agreeOn" });
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
.readyzm {
  width: 150px;
  height: 50px;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  font-weight: 700;
}
.erro {
  margin-top: 20px;
  width: 100%;
  height: 30px;
  text-align: center;
  font-size: 16px;
  color: red;
}
#login {
  overflow: hidden;
}
#detail {
  position: relative;
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
.content {
  width: 340px;
  margin-left: 20px;
}
h4 {
  margin-top: 20px;
  font-size: 18px;
}
p {
  font-size: 16px;
  margin-top: 8px;
}
input {
  outline: none;
  width: 250px;
  height: 40px;
}
.num {
  margin-top: 50px;
  width: 340px;
  height: 65px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  line-height: 90px;
}
.yzm {
  width: 340px;
  height: 65px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  line-height: 90px;
}
.getyzm {
  font-size: 14px;
  color: green;
}

.select {
  margin-top: 30px;
  font-size: 12px;
}
.click {
  font-size: 12px;
  margin-left: 10px;
  margin-top: 30px;
  color: green;
}
.button {
  margin-top: 30px;
  margin-left: 5px;
  width: 330px;
  height: 50px;
  font-size: 16px;
  border-radius: 30px;
  background: #0fa87d;
  line-height: 50px;
  text-align: center;
  color: white;
}
.other {
  margin-top: 60px;
  font-size: 16px;
  text-align: center;
}
.flex {
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-around;
}
img {
  width: 40px;
  height: 40px;
  display: inline-block;
  margin: 30px 20px;
}
</style>


