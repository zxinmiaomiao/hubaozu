<template>
  <div class="wrap">
    <div class="hehe">
      <div class="title">
        <span class="back">
          <b @click="back">&lt;</b>
        </span>
        好友查找
      </div>
    </div>
    <div class="search">
      <input class="area" @change="search" type="text" placeholder="请输入好友昵称/手机号" ref="text" />
      <span @click="cleartext" class="cleartext">X</span>
    </div>
    <ul v-if="flag">
      <li :key="item.name" v-for="item of list" @click="find">
        <div class="block">
          <img :src="item.img" alt />
        </div>
        <span class="nickname">{{ item.name }}</span>
        <span class="ph">{{ item.phonenumber }}</span>
        <span class="goto">&gt;</span>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Findfriends",
  data() {
    return {
      list: [],
      flag: true
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    cleartext() {
      this.$refs.text.value = "";
      this.flag = false;
    },
    search() {
      this.flag = true;
      axios
        .post("/waws/wish/find/friends", {
          data: { username: this.$refs.text.value }
        })
        .then(response => {
          this.list = response.data;
          for (let i of this.list) {
            i.phonenumber = i.phonenumber.replace(
              /^(\d{3})\d*(\d{4})$/g,
              "$1****$2"
            );
          }
        });
    },
    find() {
      this.$router.go(-1);
      // 发请求
    }
  }
};
</script>
<style scoped>
.wrap {
  position: relative;
  height: 100%;
  background-color: #f9f9f9;
}
.hehe {
  width: 100%;
  background-color: #fff;
}
.title {
  width: 346px;
  height: 48px;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
  line-height: 48px;
  background-color: #fff;
}
.back {
  height: 48px;
  line-height: 48px;
  float: left;
}
.search {
  width: 345px;
  height: 40px;
  border-radius: 20px;
  background-color: #fff;
  margin: 15px auto 0;
}
.area {
  display: inline-block;
  width: 300px;
  height: 16px;
  outline: none;
  margin: 12px 0 0 15px;
  font-size: 14px;
}
ul li {
  width: 375px;
  height: 68px;
  background-color: #fff;
  margin-top: 10px;
  display: flex;
  align-items: center;
  position: relative;
}
.block {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #ccc;
  margin-left: 13px;
  margin-right: 13px;
  float: left;
}
.nickname {
  font-size: 14px;
  float: left;
}
.ph {
  font-size: 14px;
  position: absolute;
  right: 80px;
}
.goto {
  font-size: 16px;
  position: absolute;
  right: 20px;
  color: #ccc;
}
.cleartext {
  font-size: 14px;
}
</style>