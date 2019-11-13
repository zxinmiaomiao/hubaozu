<template>
<div class='news'>
<header>资讯</header>
<ul class='news'>
   <li v-for="news of newslist" :key="news.id" @click='toNews'>
       <h4 class='title'>{{news.title}}</h4>
       <p class='date'>{{news.date}}</p>
       <p class='time'>{{news.time}}</p>
       <img src="../../../public/img/tree.jpg">
       
   </li>
</ul>
  
</div>
</template>
<script>
export default {
    name: 'News',
    data(){
        return{
            newslist:[
                {id: '111', title: '蓝湖是一款产品文档和设计图的共享平台', date: "2019-07-19", time:'15:35:03', img:''},
                {id: '222', title: '蓝湖是一款产品文档和设计图的共享平台', date: "2019-07-19", time:'15:35:03', img:''},
                {id: '333', title: '蓝湖是一款产品文档和设计图的共享平台', date: "2019-07-19", time:'15:35:03', img:''},

               
            ]

        }

    },
    mounted() {
        
    },
    methods:{
        toNews(){
            this.$router.push({name: 'newsdetail'});
        }
        
    },
}
</script>


<style scoped>
*{
    padding:0;
    margin:0;
}
header {
      text-align:center;
      font-size:18px;
      margin:10px 0;
  }
  .news{
      overflow: hidden;
  }
  .news li {
      padding:15px;
      width:315px;
      height:100px;
      border: 1px solid #ccc;
      margin:10px 14px;
      border-radius:10px;
      position:relative;
  }
  p {
      font-size:13px;
  }
  .title {
      position:absolute;
      font-size:16px;
      width:150px;
  }
  .date {
      position:absolute;
      top:100px;
  }
  .time {
      position:absolute;
      top:100px;
      left:90px;
  }
  img {
    border-radius:10px;
    width:150px;
    height:100px;
    position:absolute;
    top:15px;
    right:9px;
  }

  
</style>