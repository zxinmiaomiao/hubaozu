<template>
    <div class='newsdetail'>
        <header>
            <span @click='back' class='back'><</span>
            <span class='title'>资讯详情</span>
        </header>
        <div v-for="news of newslist" :key="news.id" class='content'>
           <div class='newstitle'>{{news.title}}</div>
           <span>红色认养</span>
           <span class='date'>{{news.date}}</span>
           <img src="../../../public/img/tree.jpg">
           <p>蓝湖是一款产品文档和设计图的共享平台,帮助互联网团队更好地管理文档和设计图。蓝湖可以在线展示Axure,自动生成设计图标注,与团队共享设计图,展示页面之间的跳转关系蓝湖是一款产品文档和设计图的共享平台,帮助互联网团队更好地管理文档和设计图。蓝湖可以在线展示Axure,自动生成设计图标注,与团队共享设计图,展示页面之间的跳转关系</p>
           <img src="../../../public/img/tree.jpg">
           <p>蓝湖是一款产品文档和设计图的共享平台,帮助互联网团队更好地管理文档和设计图。蓝湖可以在线展示Axure,自动生成设计图标注,与团队共享设计图,展示页面之间的跳转关系蓝湖是一款产品文档和设计图的共享平台,帮助互联网团队更好地管理文档和设计图。蓝湖可以在线展示Axure,自动生成设计图标注,与团队共享设计图,展示页面之间的跳转关系</p>

        
        </div>
    </div>
</template>

<script>
export default {
    name: 'Newsdetail',
    data(){
        return{
            newslist:[
                {id: '111', title: '蓝湖是一款产品文档和设计图的共享平台', date: "2019-07-19", time:'15:35:03', img:''},
  
            ]

        }

    },
    mounted() {
        
    },
    methods:{
        back(){
            history.back();
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
    height:50px;
    top:0px;
    background:white; 
    position: fixed;
    width:100%;
  }
header .back {
    position: absolute;
    left:20px;
    font-size:30px;
    line-height:50px;
 }
header .title {
    position: absolute;
    left:40%; 
    line-height:50px;
    font-size:18px;

 }
 .content {
     margin:60px 15px;
 }
 span {
     font-size:13px;
 }
 .date {
     margin-left: 10px;
 }
 img {
     margin: 10px 0;
 }
 p {
     font-size:16px;
 }

  
</style>