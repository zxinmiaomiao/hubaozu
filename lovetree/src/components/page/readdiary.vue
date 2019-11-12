<template>
  <div>
    <p class="time">
      <span>2019.04.11</span>
    </p>
    <div
      class="item"
    >判断他的日记是否存在 判断他的日记是否存在 判断他的日记是否存在判断他的日记是否存在挂载的时候去向后端获取数据 判断他的日记是否存在 判断他的日记是否存在 判断他的日记是否存在判断他的日记是否存在挂载的时候去向后端获取数据 判断他的日记是否存在 判断他的日记是否存在 判断他的日记是否存在</div>
  </div>
</template>
<script>
export default {
  name: "readdiary"
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
  margin-left: 20px;
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