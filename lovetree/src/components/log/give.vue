<template>
  <div>
    <!-- 转赠记录顶部的  我的转赠记录部分 -->
    <div class="top">
      <span class="iconfont icon-arrow-left" @click="back()"></span>
      <span class="me">转赠记录</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "give",
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>