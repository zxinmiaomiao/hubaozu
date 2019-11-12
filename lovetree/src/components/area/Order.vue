<template>
<div class='order'>
   <header>
    <span @click='back' class='back'>&lt;</span>
    <span class='title'>确认订单</span>
</header>
   <div v-for="tree of treeslist" :key="tree.id" class='content'>
       <img src="../../../public/img/tree.jpg">
       <p class='name'>{{tree.name}}</p>
       <p class='age'>{{tree.age}}</p>
       <p class='address'>{{tree.address}}</p>
       <p class='price'>{{tree.price}}</p>

   </div>
   <ul class='list'>
      <li><span>单价</span><span class='p1'>42000</span></li>
      <li><span>数量</span><span class='p1'>1颗</span></li>
      <li><span>期限</span><span class='p1'>一年 ></span></li>
      <li><span>代付金额</span><span class='p1'>42000</span></li>
      <li><span>支付方式</span><span class='p1'>微信 ></span></li>
   
   </ul>
   <div class='confirm'>确认支付</div>

   
   </div>
</template>


<script>
export default {
    name: 'Order',
    data(){
        return{
            treeslist:[
                {id: '111', name: '细叶青冈', price: "42000.00/株", age:'820年', address:'安徽省九华镇人民政府'},
               
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
.content {
    padding:15px;
    width:315px;
    height:70px;
    border-radius:10px;
    border: 1px solid #ccc;
    margin:15px 15px;
    position:relative;
    background:white;
    
}
p {
    font-size:12px;
    
}
.content img {
    border-radius:10px;
    width:72px;
    height:72px;
    position:absolute;
    top:15px;
    left:9px;
}
.content .name {
    border-radius:10px;
    position:absolute;
    top:18px;
    left:95px;
    font-size:15px;
    font-weight:700;
}
.content .age {
    border-radius:10px;
    position:absolute;
    top:50px;
    left:95px;
}
.content .address {
    border-radius:10px;
    position:absolute;
    top:70px;
    left:95px;
}
.content .price {
    border-radius:10px;
    position:absolute;
    top:40px;
    right:15px;
    color:red;
}
.list {
    position:absolute;
    padding:15px;
    width:315px;
    height:130px;
    border-radius:10px;
    border: 1px solid #ccc;
    margin:15px 15px;
    background:white;
}
.list li {
    font-size:12px;
    line-height:28px;
}
.p1 {
    position:absolute;
    right:15px;
}
.confirm {
    width:345px;
    height:40px;
    border-radius:20px;
    background:#0fa87d;
    line-height:40px;
    text-align:center;
    color:white;
    margin-left:15px;
    position:absolute;
    bottom:20px;
    font-size:16px;
}


</style>