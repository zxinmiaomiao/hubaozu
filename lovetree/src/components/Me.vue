<template>
  <div class="wrap">
    <div class="title">
      <span class="back">
        <b class="back" @click="back">&lt;</b>
      </span>
      <template v-if="$store.state.me.detail==0">许愿树</template>
      <template v-if="$store.state.me.detail==1">我的能量</template>
      <template v-if="$store.state.me.detail==2">认养记录</template>
    </div>
    <template v-if="$store.state.me.detail==0">
      <div class="bg">
        <div class="info">
          <div class="photo_wrap">
            <img :src="$store.state.me.self.userImage|imgFomate()" alt />
          </div>
          <span class="username">{{ $store.state.me.self.userName }}</span>
        </div>
      </div>
      <div class="tree">
        <div class="my_energy" @click="details">
          <p class="energy">我的能量</p>
          <p class="num">{{ $store.state.me.self.userEnergy }}</p>
        </div>
        <div class="line"></div>
        <div class="my_trees" @click="tree_details">
          <p class="trees">我的树</p>
          <p class="num">{{ $store.state.me.self.userTreenum }}</p>
        </div>
      </div>
      <div class="signed">
        <img class="singedlogo" src="/img/singedlogo.jpg" alt />
        <!-- 此处缺少累计签到天数 -->
        <span class="signedsum">
          累计签到
          <b class="count">{{ $store.state.me.self.daynum}}</b>天
        </span>
        <span class="energysum">
          获得
          <b class="count">{{ $store.state.me.self.daynum }}</b>个能量
        </span>
      </div>
    </template>
    <!-- 我的能量 -->
    <template v-if="$store.state.me.detail==1">
      <ul>
        <li class="energy_list" :key="index" v-for="(item,index) of $store.state.me.energylist">
          <div class="energy_logo">
            <img :src="$store.state.me.self.userImage|imgFomate() " alt />
          </div>
          <span class="signedto">{{ item.type }}</span>
          <div class="infor">
            <template>
              <p class="amount">{{ item.energyNum }}能量</p>
            </template>
            <p class="time">{{ item.createTime }}</p>
          </div>
        </li>
      </ul>
    </template>
    <!-- 我的树 -->
    <template v-if="$store.state.me.detail==2">
      <div class="personalinfo">
        <div class="touxiang">
          <img :src=" $store.state.me.self.userImage|imgFomate() " alt />
        </div>
        <p class="name">{{ $store.state.me.self.userName }}</p>
        <p class="chengjiu">已累计认养了0颗树，消耗碳0.00吨</p>
      </div>
      <div class="tree_nav">
        <ul>
          <li
            :key="one.id"
            :class="[{active:nowseled==one}]"
            @click="select(one)"
            v-for="one of treekindarr"
          >{{one.title}}</li>
        </ul>
      </div>
      <div class="kind">
        <ul class="kindtitle">
          <li>订单编号</li>
          <li>树名</li>
          <li>数量</li>
          <li>总价</li>
        </ul>
        <ul class="datainfo">
          <template v-if="$store.state.me.treearr">
            <li :key="one.orderId" v-for="one of $store.state.me.treearr">
              <span>{{ one.orderCode }}</span>
              <span>{{ one.treeName }}</span>
              <span>{{ one.orderTreenum }}</span>
              <span>{{ one.orderAccount }}</span>
            </li>
          </template>
        </ul>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "Me",
  methods: {
    back() {
      if (this.$store.state.me.detail == 0) {
        this.$router.go(-1);
      } else if (this.$store.state.me.detail == 1) {
        this.$store.state.me.detail = 0;
      } else if (
        this.$store.state.me.detail == 2 &&
        this.$store.state.me.loginstatus == false
      ) {
        this.$store.state.me.detail = 0;
      } else if (
        this.$store.state.me.detail == 2 &&
        this.$store.state.me.loginstatus == true
      ) {
        this.$router.push({ name: "login" });
        this.$store.state.me.detail = 0;
        this.$store.state.me.loginstatus = false;
      }
    },
    details() {
      this.$store.dispatch("me/details", 1);
      this.$store.dispatch("me/getlist");
    },
    tree_details() {
      this.$store.dispatch("me/treedetails", 2);
    },
    select(one) {
      this.nowseled = one;
      this.$store.dispatch("me/getecology", one.id);
    }
  },
  data() {
    const arr = [
      { id: 3, title: "生态公益林", flag: true },
      { id: 4, title: "古树名木", flag: false },
      { id: 1, title: "红色认养", flag: false },
      { id: 2, title: "文化认养", flag: false }
    ];
    return {
      treekindarr: arr,
      nowseled: arr[0]
      // username : this.$store.state.me.self[0].data.userName
    };
  },

  mounted() {
    this.$store.dispatch(
      "me/getselfinfo",
      window.sessionStorage.getItem("userId")
    );
    // 挂载时请求认养记录数据
    // 生态公益林认养
    this.$store.dispatch("me/getecology", 3);
  }
};
</script>
<style scoped>
.wrap {
  position: relative;
}
.title {
  width: 346px;
  height: 48px;
  margin: 0 auto;
  text-align: center;
  font-size: 16px;
  line-height: 48px;
}
.back {
  height: 48px;
  line-height: 48px;
  float: left;
}
.bg {
  width: 375px;
  height: 130px;
  background-color: #22b289;
  overflow: hidden;
}
.info {
  width: 346px;
  height: 56px;
  margin: 21px auto 0;
}
.photo_wrap {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #fff;
  float: left;
  overflow: hidden;
}
.username {
  float: left;
  line-height: 56px;
  font-size: 20px;
  margin-left: 15px;
  color: #fff;
}
.tree {
  width: 346px;
  height: 87px;
  background-color: #fff;
  position: absolute;
  left: 14.6px;
  top: 136px;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 #ccc;
}
.tree .my_energy {
  width: 60px;
  height: 45px;
  position: absolute;
  top: 20px;
  left: 59px;
}
.tree .line {
  width: 1px;
  height: 25px;
  background-color: #ccc;
  position: absolute;
  top: 30px;
  left: 174px;
}
.tree .my_trees {
  width: 60px;
  height: 45px;
  position: absolute;
  top: 20px;
  left: 240px;
}
.energy,
.trees {
  font-size: 14px;
  color: #333;
  text-align: center;
}
.num {
  text-align: center;
  font-size: 16px;
  color: #0fa87d;
}
.signed {
  height: 24px;
  width: 346px;
  margin: 63px auto 0;
}
.singedlogo {
  float: left;
  width: 24px;
}
.signedsum {
  line-height: 24px;
  font-size: 14px;
  float: left;
  margin-left: 5px;
}
.energysum {
  line-height: 24px;
  font-size: 14px;
  float: right;
}
.count {
  padding: 6px;
  color: #0fa87d;
}
.energy_list {
  width: 375px;
  height: 75px;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
  position: relative;
}
.energy_logo {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 15px;
  margin-left: 14.6px;
  overflow: hidden;
}
.signedto {
  font-size: 14px;
}
.infor {
  width: 90px;
  height: 50px;
  position: absolute;
  right: 0px;
  /* margin-left: 150px; */
  /* display: flex; */
  /* align-items: center; */
}
.amount,
.time {
  /* float: right; */
  font-size: 14px;
}
/* 我的树 */
.personalinfo {
  width: 350px;
  height: 82px;
  margin: 0 auto;
  overflow: hidden;
}
.personalinfo .name {
  font-size: 14px;
  margin-top: 22px;
  float: left;
  margin-left: 15px;
}
.personalinfo .touxiang {
  height: 37px;
  width: 37px;
  border-radius: 50%;
  background-color: #ccc;
  float: left;
  margin-top: 22px;
  margin-left: 5px;
  overflow: hidden;
}
.personalinfo .chengjiu {
  float: left;
  font-size: 12px;
  color: #ccc;
  margin-top: 45px;
  margin-left: -8px;
}
.tree_nav {
  width: 300px;
  height: 45px;
  margin: auto;
}
.tree_nav li {
  font-size: 14px;
  float: left;
  width: 25%;
  text-align: center;
  height: 100%;
  line-height: 45px;
}
.kind {
  width: 350px;
  height: 45px;
  margin: auto;
}
.kind .kindtitle {
  overflow: hidden;
}
.kind .kindtitle li {
  font-size: 14px;
  float: left;
  width: 25%;
  text-align: center;
  height: 100%;
  line-height: 45px;
}
.kind .datainfo {
  overflow: hidden;
}
.kind .datainfo li {
  font-size: 14px;
  height: 100%;
  line-height: 45px;
}
.kind .datainfo li span {
  display: inline-block;
  width: 25%;
  text-align: center;
}
.active {
  color: #0fa87d;
}
</style>