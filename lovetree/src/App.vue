<template>
  <div id="app">
    <router-link :to="{name:'diary'}"></router-link>
    <router-link :to="{name:'login'}"></router-link>
    <router-view />
  </div>
</template>
<script>

export default {
};
</script>
<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
