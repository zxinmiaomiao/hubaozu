<template>
  <div>
    <div class="nowish" v-if="state">
      <p>还没有写日记哦~</p>
    </div>
    <div class="wishlist" v-else>
      <div
        class="list"
        @click="read(items.diaryId,items.userId)"
        :key="items.uerId"
        v-for="items in readdate"
      >
        <div class="time">
          <p class="month">{{items.diaryCreatetime|month()}}</p>
          <p class="year">{{items.diaryCreatetime|year()}}</p>
        </div>
        <!-- 内容部分 -->
        <p class="item">{{items.diaryContent}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "getdiary",
  data() {
    return {
      state: "",
      readdate: "",
      time: ""
    };
  },
  async mounted() {
    //   挂载的时候去向后端获取数据   判断他的日记是否存在  //同时获取到日记的内容，事件和ID
    //   如果不存在的话   显示false
    await this.$store.dispatch("page/hasstate", { userId: window.sessionStorage.getItem("userId") });
    this.state = this.$store.state.page.status;
    this.readdate = this.$store.state.page.readmemory.data;
  },
  methods: {
    //   点击的时候 传一个日记的ID参数    从store的对象里 把这个id参数对应的 文档信息获取
    read(diaryid, userid) {
      this.$router.push({
        name: "readdiary",
        query: { diaryId: diaryid ,userId:userid}
      });
    }
  },
  filters: {
    year(value) {
      return value.substr(0, 4);
    },
    month(value) {
      return value.substr(5, 5);
    }
  }
};
</script>
<style  scoped>
.nowish {
  overflow: hidden;
  margin-top: 152px;
  background: url("/img/book.png") no-repeat 105px;
  background-size: 166px 123px;
  height: 177px;
  position: relative;
  text-align: center;
}
.nowish p {
  font-size: 15px;
  color: white;
  position: absolute;
  bottom: 0;
  left: 130px;
}
.list {
  width: 347px;
  height: 109px;
  margin-top: 20px;
  background: white;
  border-radius: 6px;
  margin-left: 15px;
  box-shadow: 0 0 0 4px #b9eadb;
  display: flex;
}
.time {
  width: 80px;
  height: 100%;
  border-right: 2px dashed #8f8f8f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.month {
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
}
.item {
  width: 265px;
  height: 100%;
  padding: 18px;
  box-sizing: border-box;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
</style>