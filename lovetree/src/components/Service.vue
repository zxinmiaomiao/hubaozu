<template>
<div id='setting'>
    <header>
        <span @click='back' class='back'><</span>
        <span class='title'>我的客服</span>
    </header>
    <div class='notice'>当前客服不在线，如需帮助请留言</div>

    <div class='content'></div>
    <footer><img src="../../public/img/input.jpg"></footer>
    
    
</div>
</template>
<script>
export default {
    name:'Service',
    data(){
        return{
            

        }
        
    },
    computed:{
        
    },
    methods:{
        back(){
            //跳转上一级页面
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
  #detail {
      position:relative;
  }
  #setting{
      overflow: hidden;
  }
  header {
      height:40px;
      margin-top:10px;  
  }
  header .back {
      position: absolute;
      left:20px;
      font-size:30px;
      line-height:30px;
  }
  header .title {
      position: absolute;
      left:40%; 
      line-height:30px;
      font-size:18px;

  }
  .notice {
      margin-top:10px;
      width:100%;
      height:50px;
      background:#fef9e3;
      font-size:15px;
      text-align:center;
      line-height:50px;
      color:#99904f;
  }
  .content {
      width:100px;
      height:504px;
  }
  footer {
      width:100%;
      height:46px;
      border-top:1px solid #ccc;
  }
  
</style>


