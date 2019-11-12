<template>
  <div class="home">首页
  <router-link :to="{path: '/area'}">区域认养</router-link>////
  <router-link :to="{name:'news'}">资讯</router-link>////
  <router-link :to="{name:'login'}">我的</router-link>

    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  components: {
    
  }
}
</script>
