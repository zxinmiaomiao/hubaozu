<template>
  <div class="wishtop">
    <div class="wishtop-font">
      <!-- @click="selecthead" -->
      <span class="left iconfont icon-arrow-left"></span>
      <!-- <router-link :to="{name:'init'}"> -->
      <span>我的心愿</span>
      <!-- </router-link> -->
    </div>
    <div class="nowishread" v-if="state">
      <p>还没有写心愿哦~</p>
    </div>
    <div class="haswishread" v-else>
      <div class="list" @click="read()">
        <!-- 内容部分 -->
        <p class="item">判断他的日记是否存在挂载的时候去向后端获取数据 判断他的日记是否存在 判断他的日记是否存在 判断他的日记是否存在</p>
        <div class="smalllog"></div>
        <div class="lookstatus">公开</div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "wishingread",
  data() {
    return { state: false };
  },
  async mounted() {
    //   挂载的时候去向后端获取数据   判断他的心愿是否存在  //同时获取到心愿的内容，事件和ID
    //   如果不存在的话   显示false
    // await this.$store.dispatch("wishtree/hasstate");
    // this.state = this.$store.state.wishtree.status;
    // this.readdate = this.$store.state.wishtree.readwish;
    // console.log(this.readdate);
  },
  methods: {
   read(){
    //  需要传许愿的id  然后获取到许愿的内容
      this.$router.push({name:'wishinglook'})
    }
  }
};
</script>
<style  scoped>
.wishtop {
  width: 100%;
  height: 100%;
  background: url("/img/wishbackground.png");
  background-size: 100% 100%;
  overflow: hidden;
}
.nowishread {
  margin-top: 152px;
  background: url("/img/book.png") no-repeat 105px;
  background-size: 166px 123px;
  height: 177px;
  position: relative;
  text-align: center;
}
.nowishread p {
  font-size: 15px;
  color: white;
  position: absolute;
  bottom: 0;
  left: 130px;
}
.wishtop-font {
  width: 100%;
  height: 41px;
  text-align: center;
}
.left {
  float: left;
  overflow: hidden;
  vertical-align: middle;
  margin-top: 6px;
  padding-left: 10px;
}
.wishtop-font span {
  font-size: 18px;
  color: white;
}
.list {
  width: 347px;
  height: 109px;
  margin-top: 20px;
  background: white;
  border-radius: 6px;
  margin-left: 15px;
  box-shadow: 0 0 0 4px #f2e6e5;
  display: flex;
  position: relative;
}
/* .time {
  width: 80px;
  height: 100%;
  border-right: 2px dashed #8f8f8f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
} */
/* .month {
  width: 100%;
  font-size: 22px;
  font-weight: 800;
  text-align: center;
}
.year {
  text-align: center;
  width: 100%;
  font-size: 15px;
  font-size: 400;
} */
.item {
  width: 240px;
  height: 80px;
  padding: 18px;
  box-sizing: border-box;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  font-weight: 500;
}
.smalllog {
  width: 81px;
  height: 75px;
  background: url("/img/smalllog.jpg") no-repeat;
  background-size: 100% 100%;
  margin-left: 30px;
}
.lookstatus {
  width: 65px;
  height: 20px;
  border: 1px solid #f75e00;
  border-radius: 3px;
  font-size: 10px;
  text-align: center;
  height: 20px;
  color: #f75e00;
  position: absolute;
  bottom: 10px;
  right: 20px;
}
</style>