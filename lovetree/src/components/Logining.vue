<template>
<div id='login'>
    <header>
        <span @click='back' class='back'>&lt;</span>
        <span class='title'>登录</span>
    </header>

    <div class='content'>
        <h4>登录/注册</h4>
        <p>欢迎来到我爱我树</p>
        <div class='num'><input type="text" placeholder='请输入手机号码'></div>
        <div class='yzm'><input type="text" placeholder='请输入验证码'><span class='getyzm'>获取验证码</span></div>
        <span class='select'>确定即表明您同意</span><span @click="toUser" class='click'>《用户注册协议》</span>
        <div class='button'>确定</div>
        <div class='other'>第三方登录</div>
        <span><img src="../../public/img/1.jpg" class='img1'></span>
        <span><img src="../../public/img/2.jpg"></span>
        <span><img src="../../public/img/3.jpg"></span>
        
    </div>
    
    

   
</div>
</template>
<script>
export default {
    name:'Logining',
    data(){
        return{
            

        }
        
    },
    methods:{
        
    },
    computed:{
        
    },
    methods:{
        toUser(){
            //跳转agreement页面
            // console.log(this.$router)
            this.$router.push({name: 'user'});
        },
        
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
  header {
      height:40px;
      /* margin-top:10px;   */
  }
  header .back {
      position: absolute;
      left:20px;
      font-size:30px;
      line-height:30px;
  }
  header .title {
      position: absolute;
      left:45%; 
      line-height:30px;
      font-size:18px;

  }
  .content {
      
      width:340px;
      margin-left:20px;
  }
  h4 {
      margin-top:20px;
      font-size:18px;
  }
  p {
      font-size:16px;
      margin-top:8px;
  }
  input {
      outline:none;
      width:250px;
      height: 40px;
  }
  .num {
      margin-top:50px;
      width:340px;
      height:65px;
      border-bottom:1px solid #ccc;
      font-size:16px;
      line-height:90px;
  }
  .yzm {
      width:340px;
      height:65px;
      border-bottom:1px solid #ccc;
      font-size:16px;
      line-height:90px;
  }
  .getyzm {
      font-size:14px;
      color: green;
      
  }
  
  .select {
    
    margin-top:30px;
    font-size:12px;
    
  }
  .click {
    font-size:12px;
    margin-left:10px;
    margin-top:30px;
    color:green;
    
  }
  .button {
    margin-top:80px;
    margin-left:5px;
    width:330px;
    height:50px;
    font-size:16px;
    border-radius:30px;
    background:#0fa87d;
    line-height:50px;
    text-align:center;
    color:white;
  }
  .other {
      margin-top:60px;
      font-size:16px;
      text-align:center;
  }
  img {
      width:40px;
      height:40px;
      display:inline-block;
      margin:30px 20px;
  }
  .img1 {
      margin-left: 60px;
  }
  

</style>


