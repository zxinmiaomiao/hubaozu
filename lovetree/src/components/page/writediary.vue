<template>
  <div class="bigbox">
    <div class="writehead">
      <p>人生的酸甜苦辣都在你的脚下</p>
    </div>
    <!-- 写记忆的文档 -->
    <div class="writefont">
      <!-- 分享成功后的内容 -->
      <div v-if="status" class="successd">
        <div class="successtop">
          <p>好友可以通过许愿树进行查看</p>
        </div>
        <div class="successbutton">
          <span @click="close()">分享成功</span>
        </div>
      </div>
      <textarea name id cols="15" rows="10" maxlength="300" @input="num()" ref="text"></textarea>
      <p>{{count}}/300</p>
    </div>
    <!-- 保存按钮 -->
    <div class="save" @click="success()"></div>
  </div>
</template>
<script>
export default {
  name: "writediary",

  data() {
    return { timefont: "", count: 0, status: false, successd: "" };
  },
  mounted() {
    this.$store.dispatch("page/change", "写日记");
    this.timefont = this.$store.state.page.timememory;
  },
  methods: {
    num() {
      this.count = this.$refs.text.value.length;
    },
    async success() {
      if (this.$refs.text.value != "") {
        // 把日记的  用户名  和日记的内容传给后端
        this.successd = await this.$store.dispatch("page/writediary", {
          userId: sessionStorage.getItem("userId"),
          diaryContext: this.$refs.text.value
        });
        if (this.successd == "成功") {
          this.status = true;
        }
      }
    },
    close() {
      this.status = false;
      this.$refs.text.value = "";
      this.count = 0;
      this.$router.push({ name: "init" });
    }
  }
};
</script>
<style  scoped>
.bigbox {
  position: relative;
}
.writehead {
  overflow: hidden;
  height: 81px;
  font-size: 15px;
}
.writehead p {
  color: white;
  margin-top: 45px;
  margin-left: 14px;
}
.writefont {
  width: 347px;
  height: 392px;
  margin: 0 15px;
  position: relative;
}
.writefont textarea {
  width: 347px;
  height: 392px;
  font-size: 15px;
  box-sizing: border-box;
  padding: 21px;
  border-radius: 8px;
  background: rgba(69, 96, 172, 0.3);
  border: none;
  color: white;
  border: 1px solid #4953a2;
}
.writefont p {
  font-size: 15px;
  color: white;
  position: absolute;
  bottom: 20px;
  right: 30px;
  /* float: right;
  margin-right: 15px; */
}
.save {
  width: 222px;
  height: 49px;
  background: url(/img/save.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 55px;
  margin-left: 77px;
}
.successd {
  width: 260px;
  height: 260px;
  border-radius: 20px;
  position: absolute;
  top: 75px;
  left: 49px;
  background: white;
}
.successtop {
  height: 167px;
  background: url(/img/wish.png) no-repeat 100px 70px;
  background-size: 50px 50px;
}
.successtop p {
  position: absolute;
  bottom: 85px;
  /* height: 30px; */
  font-size: 14px;
  color: black;
}
.successbutton {
  position: absolute;
  height: 60px;
  width: 100%;
  bottom: 0px;
  background: #2fb38e;
  border-radius: 0 0 20px 20px;
  text-align: center;
  line-height: 60px;
}
.successbutton .span {
}
</style>