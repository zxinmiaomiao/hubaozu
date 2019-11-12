<template>
    <div>
        <!-- 头部 -->
        <header>
            <span class="containers" @click="revert"></span>
            认养依据
        </header>
        <ul class="basis">
            <li :key="pic.id" v-for="pic of pices">
                <img :src="pic.pic">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'articles',
     data(){
        const pices=[
            {id:1,pic:require('../../assets/yiju.jpg')},
            {id:2,pic:require('../../assets/yiju.jpg')},
            {id:3,pic:require('../../assets/yiju.jpg')},
         ]
        return {
            pices
        }
    },
    methods:{
        revert(){
            this.$router.replace({path:'/projectint'})
        }
    }
}
</script>

<style scoped>
     *{
      padding:0;
      margin:0;
    }
    header {
      font-size: 20px;
      text-align: center;
      font-weight: 600;
      width:100%;
      height: 44px;
      line-height: 44px;
    }
    .containers{
        width: 0;
        height: 0;
        border: 13px solid;
        border-color: transparent #333 transparent transparent;
        position: absolute;
        left: 0px;
        top: 10px;
    }
   .containers::after{
        content: '';
        position: absolute;
        left:-9px;
        top: -13px;
        border: 13px solid;
        border-color: transparent white transparent transparent;
    }
    .basis{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 20px;
        top: 50px;
        overflow: auto
    }
</style>