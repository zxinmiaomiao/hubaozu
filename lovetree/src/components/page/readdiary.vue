<template>
  <div>
    <p class="time">
      <span>{{detail.diaryCreatetime}}</span>
    </p>
    <div class="item">{{detail.diaryContent}}</div>
  </div>
</template>
<script>
export default {
  name: "readdiary",
  data() {
    return {
      detail: ""
    };
  },
  async mounted() {
    // 发送数据请求   给后端 获取到  日记的详细信息
    this.detail = await this.$store.dispatch("page/readdiary", {
      userId: this.$route.query.userId,
      diaryId: this.$route.query.diaryId
    });
  }
};
// 根据前一个页面发过来的ID去store里进行匹配内容  然后在渲染
</script>
<style  scoped>
.time {
  width: 100%;
  height: 46px;
  font-size: 17px;
  color: white;
  font-weight: 600px;
  margin-top: 30px;
  padding-left: 20px;
  box-sizing: border-box;
}
.item {
  text-align: justify;
  padding: 0 19px;
  font-size: 15px;
  color: white;
  letter-spacing: 1px;
  font-weight: 400;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>