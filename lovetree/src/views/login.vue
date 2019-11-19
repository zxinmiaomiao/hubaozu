<template>
  <!-- 登入页面外层的大盒子 -->
  <div class="bigbox">
    <div class="top"></div>
    <!-- 用户名部分 -->
    <div class="loginbox">
      <div class="loginame">
        <!-- 头像部分 -->
        <!-- 路由跳转  个人信息部分 -->
        <router-link to="/personInfo">
          <div class="headlog">
            <!-- 头像 -->
            <img :src="userinfo.userImage|imgFomate()" alt class="head" />
            <!-- 用户名 -->
            <div class="username">
              {{userinfo.userName}}
              <span class="iconfont icon-arrow-right"></span>
            </div>
          </div>
        </router-link>

        <!-- 底部的余额部分 -->
        <div class="money">
          <span>{{userinfo.userMoney}}</span>
          <span>余额</span>
          <span class="iconfont icon-wenhao"></span>
          <!-- 右边的积分记录 -->
          <!-- 路由跳转  余额部分 -->
          <span class="record">
            <span class="iconfont icon-jizhangben"></span>
            <span>欢迎光临</span>
          </span>
        </div>
      </div>
      <!-- 我的档案部分 -->
      <div class="flie">
        <!-- 我的文档顶部 -->
        <div class="flie-top">
          <span>我的档案</span>
        </div>
        <!-- 我的文档底部 -->
        <div class="flie-bottom">
          <div class="logo">
            <!-- 路由跳转  认养记录部分 -->

            <div class="pushme" @click="pushme()">
              <span class="iconfont icon-shu"></span>
              <p>认养记录</p>
            </div>

            <!-- 路由跳转  转赠记录部分 -->
            <router-link to="/give">
              <div>
                <span class="iconfont icon-zhuanzeng"></span>
                <p>转赠记录</p>
              </div>
            </router-link>
            <!-- 路由跳转  我的成就部分 -->
            <router-link to="/achievement">
              <div>
                <span class="iconfont icon-chengjiu"></span>
                <p>我的成就</p>
              </div>
            </router-link>
            <!-- 路由跳转 余额部分 -->
            <router-link to="/money">
              <div>
                <span class="iconfont icon-yue"></span>
                <p>余额</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <!-- 我的助手 -->
      <div class="helper">
        <!-- 我的助手顶部 -->
        <div class="flie-top">
          <span>我的助手</span>
        </div>
        <!-- 我的助手底部 -->
        <div class="help-bottom">
          <!-- 路由跳转 设置部分 -->
          <router-link to="/setting" style="float:left">
            <div class="set">
              <span class="iconfont icon-shezhi"></span>
              <p>设置</p>
            </div>
          </router-link>
          <!-- 路由跳转  在线客服部分 -->
          <router-link to="/Service" style="float:left">
            <div class="service">
              <span class="iconfont icon-kefu"></span>
              <p>在线客服</p>
            </div>
          </router-link>
        </div>
      </div>
      <!-- 客服电话 -->
      <div class="phone">
        <span>在线客服电话：400-820-5880</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      userinfo: ""
    };
  },
  async mounted() {
  
   this.userinfo= await this.$store.dispatch("login/getinfo",{userId:sessionStorage.getItem('userId')})

  },
  methods: {
    pushme() {
      let loginstatus = true;
      this.$store.dispatch("me/changeme", loginstatus);
      this.$router.push({ name: "me" });
    }
  }
};
</script>
<style  scoped>
.bigbox {
  height: 100%;
  position: relative;
  background: #f8f8f8;
}
.loginbox {
  height: 526px;
  /* position: relative; */
}
.top {
  width: 100%;
  height: 141px;
  text-align: center;
  line-height: 50px;
  position: relative;
  border-radius: 0 0 50% 50%;
  overflow: hidden;
  background: #39c998;
}

.loginame {
  width: 343px;
  margin: 0px 15px;
  height: 120px;
  box-sizing: border-box;
  border-radius: 10px;
  background: white;
  position: absolute;
  top: 60px;
}
.headlog {
  height: 75px;
}
.head {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: lightpink;
  position: absolute;
  left: 20px;
  top: -20px;
}
.username {
  text-indent: 100px;
  font-size: 18px;
  margin-top: 6px;
  font-weight: 600;
}
.username span {
  font-size: 20px;
}
.money {
  text-indent: 30px;
  line-height: 36px;
}
.money span:first-child {
  color: #39c998;
  font-weight: 700;
  font-size: 18px;
}
.money span {
  color: #000;
  font-size: 16px;
  margin-right: 6px;
  vertical-align: middle;
  font-weight: normal;
  line-height: 18px;
}
.record {
  float: right;
  width: 115px;
  background: #39c998;
  height: 36px;
  margin: 0 !important;
  border-radius: 20px 0 0 20px;
}
.record span:first-child {
  line-height: 36px;
  font-size: 18px;
  color: white;
}
.record span:last-child {
  color: white;
  font-size: 12px;
}
.flie {
  width: 343px;
  margin: 0px 15px;
  height: 120px;
  box-sizing: border-box;
  border-radius: 10px;
  background: white;
  position: absolute;
  top: 200px;
}
.flie-top {
  height: 43px;
  line-height: 43px;
  text-indent: 15px;
}
.flie-top span {
  font-size: 16px;
  font-weight: 600;
}
.logo {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
}
.logo div {
  text-align: center;
}
.logo span {
  font-size: 25px;
  color: #39c998;
}
.logo p {
  font-size: 12px;
}
.helper {
  width: 343px;
  margin: 0px 15px;
  height: 120px;
  box-sizing: border-box;
  border-radius: 10px;
  background: white;
  position: absolute;
  top: 350px;
}
.help-bottom {
  text-align: center;
  /* line-height:  */
}
.help-bottom span {
  font-size: 25px;
  color: #39c998;
}
.help-bottom p {
  font-size: 12px;
}
.set {
  width: 80px;
  height: 80px;
  float: left;
}
.service {
  width: 80px;
  height: 80px;
  float: left;
  margin-left: 18px;
}
.phone {
  width: 100%;
  position: absolute;
  top: 530px;
  text-align: center;
  font-size: 20px;
  color: #d1d1d1;
}
</style>