<template>
  <div id="myInfo">
    <div class="title">
      <router-link :to="{name:'login'}">
        <span class="iconfont icon-arrow-left"></span>
      </router-link>
      <h6>个人信息</h6>
    </div>
    <!-- 头像显示栏 -->
    <div class="changePhoto" is-link @click="photo()">
      <span>头像</span>
      <div class="pic">
        <img :src="getInfo.userImage|imgFomate()" />
        <span class="rightArr iconfont icon-arrow-right"></span>
      </div>
    </div>
    <ul class="info">
      <!-- 昵称显示栏 -->
      <li is-link @click="changeName()">
        <span>昵称</span>
        <div class="name">
          <em class="userName">{{getInfo.userName}}</em>
          <span class="rightArr iconfont icon-arrow-right"></span>
        </div>
      </li>
      <li>
        <span>手机号</span>
        <em class="phone">{{getInfo.userPhone}}</em>
      </li>
      <!-- 性别显示栏 -->
      <li is-link @click="showsex">
        <span>性别</span>
        <div class="sex">
          <em>{{getInfo.userSex|sexFormat()}}</em>
          <span class="rightArr iconfont icon-arrow-right"></span>
        </div>
      </li>
      <!-- 生日显示栏 -->
      <li is-link @click="showdate">
        <span>生日</span>
        <div class="birth">
          <em ref="time">{{getInfo.userBirthday}}</em>
          <span class="rightArr iconfont icon-arrow-right"></span>
        </div>
      </li>
    </ul>
    <button class="exit" @click="confirm()">确认修改</button>
    <router-link :to="{name:'logining'}" class="exit" @click="quit()">退出登录</router-link>

    <!-- 上传头像弹窗 -->
    <van-popup v-model="showphoto" class="selectphoto">
      <h5>请选择图片来源</h5>
      <van-uploader :after-read="onRead">
        <button class="album">相册</button>
      </van-uploader>
      <div class="btn">
        <button class="no" @click="qx()">取消</button>
        <button class="yes" @click="qx()">确认</button>
      </div>
    </van-popup>

    <!-- 日期修改弹窗 -->
    <van-popup v-model="showDate" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker
        v-model="changeDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        title="选择日期"
        @confirm="sureDate"
        @cancel="cancel()"
      />
    </van-popup>

    <!-- 修改性别弹窗 -->
    <van-popup v-model="showSex" class="selectSex">
      <h5>请选择性别</h5>
      <p>
        <label for="m">男</label>
        <input
          type="radio"
          name="sex"
          value="1"
          id="m"
          v-model="getInfo.userSex"
          @click="changeSex"
        />
      </p>
      <p>
        <label for="w">女</label>
        <input
          type="radio"
          name="sex"
          value="2"
          id="w"
          v-model="getInfo.userSex"
          @click="changeSex"
        />
      </p>
      <p>
        <label for="s">保密</label>
        <input
          type="radio"
          name="sex"
          value="3"
          id="s"
          v-model="getInfo.userSex"
          @click="changeSex"
        />
      </p>
    </van-popup>

    <!-- 修改昵称弹窗 -->
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
import axios from "axios";

export default {
  name: "personInfo",

  data() {
    return {
      userId: "",
      currentDate: "",
      picUrl: "",
      phone: "",
      afterName: "",
      changeDate: new Date(),
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(),
      showDate: false,
      showSex: false,
      showName: false,
      showphoto: false,
      changeInfo:{},
    };
  },
  computed: {
    getInfo() {
      return this.$store.state.changeInfo.userInfo;
    },
    succeed() {
      return this.$store.state.changeInfo.modifiySuccee;
    }
  },

  async mounted() {
    this.userId = sessionStorage.getItem("userId");
    await this.$store.dispatch("changeInfo/getInfo", this.userId);
  },

  methods: {
    // 返回上一页
    back() {
      this.$router.go(-1);
    },
    // 打开时间弹窗
    showdate() {
      this.showDate = true;
    },
    // 确认修改时间
    sureDate(value) {
      let year = value.getFullYear();
      let month = value.getMonth() + 1;
      let date = value.getDate();
      this.getInfo.userBirthday = year + "-" + month + "-" + date;
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
    // 确认修改昵称
    ensure() {
      let reg = /^(?!\d)([\da-zA-Z]|[\u4e00-\u9fa5])+$/;
      if (this.afterName !== "") {
        if (this.afterName.length < 7 && this.afterName.length > 1) {
          if (reg.test(this.afterName)) {
            this.getInfo.userName = this.afterName;
            this.showName = false;
            this.afterName = "";
          } else {
            this.$dialog.alert({
              message: "用户名不能纯数字或者以数字开头"
            });
          }
        } else {
          this.$dialog.alert({
            message: "请输入2-6位用户名"
          });
        }
      } else {
        this.$dialog.alert({
          message: "用户名不能为空"
        });
      }
    },
    // 打开更换头像
    photo() {
      this.showphoto = true;
    },
    // 取消/确认修改头像
    qx() {
      this.showphoto = false;
    },
    async onRead(file) {
   
      let params = new FormData(); //创建form对象
      params.append("file", file.file); //通过append向form对象添加数据//第一个参数字符串可以填任意命名，第二个根据对象属性来找到file
      let config = {
        headers: {
          //添加请求头
          "Content-Type": "multipart/form-data"
        }
      };
      await axios.post("user/portrait", params, config).then(res => {
 
        // this.this.getInfo.userImage = res;
      });
    },

    // 确认保存所有修改信息

    async confirm() {
 
      if (this.getInfo.userBirthday) {
        let reg = /-/g;
        let time = this.getInfo.userBirthday.replace(reg, "/");
        this.changeInfo = {
          userId: this.userId,
          userName: this.getInfo.userName,
          userBirthday: time,
          userSex: this.getInfo.userSex,
          userImage: this.getInfo.userImage
        };
      } else {
        this.changeInfo = {
          userId: this.userId,
          userName: this.getInfo.userName,
          userSex: this.getInfo.userSex,
          userImage: this.getInfo.userImage
        };
      }
      await this.$store.dispatch("changeInfo/modification", this.changeInfo);
      if (this.succeed) {
        this.$dialog.alert({
          message: "修改成功"
        });
      }
    },
    quit() {
      sessionStorage.clear();
    }
  },

  filters: {
    sexFormat: function(value) {
      switch (Number(value)) {
        case 1:
          return "男";
          break;
        case 2:
          return "女";
          break;
        case 3:
          return "保密";
          break;
      }
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
  padding-left: 25px;
  height: 44px;
  background: #fff;
  line-height: 44px;
  border-bottom: 1px solid #f2f2f2;
}
.title > span {
  font-size: 30px;
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
  font-size: 30px;
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
.info > li > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.info li em {
  display: inline-block;
  color: #898989;
  font-size: 16px;
}
/* 退出登录 */
.exit {
  display: block;
  width: 100%;
  height: 48px;
  font-size: 16px;
  color: red;
  text-align: center;
  line-height: 48px;
  background: #fff;
  margin-top: 10px;
  border: none;
}
/* 性别选择框 */
.selectSex,
.changeNm,
.selectphoto {
  padding: 20px;
  width: 300px;
  border-radius: 10px;
}
.selectSex > h5,
.changeNm > h5,
.selectphoto > h5 {
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
.btn {
  font-size: 12px;
  margin-top: 40px;
  text-align: right;
}
.btn > button {
  border: none;
  background: #fff;
  color: orange;
}
.btn .no {
  margin-right: 40px;
}
/* 选择相册按钮 */
.album {
  display: block;
  width: 300px;
  margin-top: 30px;
  text-align: left;
  border: none;
  background: #fff;
  font-size: 18px;
}
</style>