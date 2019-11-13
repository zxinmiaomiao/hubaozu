<template>
  <div id="myInfo">
    <div class="title">
      <router-link :to="{name:'login'}"><span class="iconfont icon-arrow-left"></span></router-link>
      <h6>个人信息</h6>
    </div>
    <div class="changePhoto">
      <span>头像</span>
      <div class="pic">
        <img src alt />
        <span class="rightArr">></span>
      </div>
    </div>
    <ul class="info">
      <li>
        <span>ID</span>
        <em class="userId">12345789</em>
      </li>
      <li is-link @click="changeName()">
        <span>昵称</span>
        <div class="name">
          <em class="userName">{{user.currentName}}</em>
          <span class="rightArr">></span>
        </div>
      </li>
      <li>
        <span>手机号</span>
        <em class="phone">12345789</em>
      </li>
      <li is-link @click="showsex">
        <span>性别</span>
        <div class="sex">
          <em>{{user.sex}}</em>
          <span class="rightArr">></span>
        </div>
      </li>
      <li is-link @click="showdate">
        <span>生日</span>
        <div class="birth">
          <em>{{user.changeDate | dateFormat()}}</em>
          <span class="rightArr">></span>
        </div>
      </li>
    </ul>
    <router-link to="/#" class="exit">退出登录</router-link>

    <!-- <van-uploader>
      <van-button icon="photo" type="primary">上传图片</van-button>
    </van-uploader>-->

    <!-- 日期 -->
    <van-popup v-model="showDate" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        title="选择日期"
        @confirm="sureDate"
        @cancel="cancel()"
      />
    </van-popup>

    <!-- 性别 -->
    <van-popup v-model="showSex" class="selectSex">
      <h5>请选择性别</h5>
      <p>
        <label for="m">男</label>
        <input type="radio" name="sex" value="男" id="m" v-model="user.sex" @click="changeSex" />
      </p>
      <p>
        <label for="w">女</label>
        <input type="radio" name="sex" value="女" id="w" v-model="user.sex" @click="changeSex" />
      </p>
      <p>
        <label for="s">保密</label>
        <input type="radio" name="sex" value="保密" id="s" v-model="user.sex" @click="changeSex" />
      </p>
    </van-popup>

    <!-- 修改昵称 -->
    <van-popup v-model="showName" class="changeNm">
      <h5>设置用户名</h5>
      <p>
        <input type="text" v-model="afterName" class="inputName" placeholder="请输入" />
      </p>
      <div class="btn">
        <button class="no" @click="deselect()">取消</button>
        <button class="yes" @click="ensure()">确认</button>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "personInfo",

  data() {
    return {
      user: {
        changeDate: new Date(),
        sex: "保密",
        currentName: "123"
      },
      afterName: "",
      currentDate: new Date(),
      minDate: new Date(1900, 0, 1),
      showDate: false,
      showSex: false,
      showName: false
    };
  },

  methods: {
    // 打开时间弹窗
    showdate() {
      this.showDate = true;
    },
    // 确认修改时间
    sureDate(value) {
      this.user.changeDate = value;
      this.showDate = false;
    },
    // 取消修改时间
    cancel() {
      this.showDate = false;
    },
    // 打开性别窗口
    showsex() {
      this.showSex = true;
    },
    // 保存并关闭
    changeSex() {
      this.showSex = false;
    },
    // 打开修改昵称
    changeName() {
      this.showName = true;
    },
    // 取消修改昵称
    deselect() {
      this.showName = false;
    },
    // 确认修改
    ensure() {
      if (this.afterName !== "") {
        this.user.currentName = this.afterName;
        this.afterName = "";
        this.showName = false;
      }
    }
  },

  filters: {
    //   格式化日期
    dateFormat: function(value) {
      let year = value.getFullYear();
      let month = value.getMonth() + 1;
      let date = value.getDate();
      return year + "-" + month + "-" + date;
    }
  }
};
</script>

<style scoped>
#myInfo {
  background: #f8f8f8;
  width: 100%;
  height: 100%;
}

/* 头部 */
.title {
  padding-left: 30px;
  height: 44px;
  background: #fff;
  line-height: 44px;
  border-bottom: 1px solid #f2f2f2;
}
.title > span {
  font-size: 20px;
  vertical-align: middle;
}
.title > h6 {
  display: inline;
  font-size: 18px;
  font-weight: 500;
  color: #000;
  margin-left: 115px;
}
/* 头像 */
.changePhoto {
  padding: 0 30px;
  background: #fff;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.changePhoto > span {
  font-size: 16px;
  color: #000;
}
.pic {
  display: flex;
  align-items: center;
}
.pic > img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: yellow;
}
/* 右箭头 */
.rightArr {
  margin-left: 10px;
}
/* 个人信息 */
.info {
  padding: 0 30px;
  background: #fff;
}
.info > li {
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f3f3f3;
}
.info > li > span {
  color: #000;
  font-size: 16px;
}
.info > li em {
  color: #898989;
  font-size: 16px;
}
/* 退出登录 */
.exit {
  display: block;
  height: 48px;
  font-size: 16px;
  color: red;
  text-align: center;
  line-height: 48px;
  background: #fff;
  margin-top: 10px;
}
/* 性别选择框 */
.selectSex,
.changeNm {
  padding: 20px;
  width: 300px;
  border-radius: 10px;
}
.selectSex > h5,
.changeNm > h5 {
  font-size: 18px;
  font-weight: 500;
}
.selectSex > p {
  font-size: 16px;
  padding: 10px 0;
}
.selectSex > p label {
  display: inline-block;
  width: 100%;
}
/* 昵称修改框 */
.changeNm .inputName {
  margin-top: 20px;
  width: 100%;
  border-bottom: 2px solid orange;
  font-size: 14px;
}
.changeNm .btn {
  font-size: 12px;
  margin-top: 40px;
  text-align: right;
}
.changeNm .btn > button {
  border: none;
  background: #fff;
  color: orange;
}
.changeNm .btn .no {
  margin-right: 40px;
}
</style>