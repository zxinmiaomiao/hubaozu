<template>
<div class='area'>

    <div class='banner'></div>
    <div class='middle'>
        <h3>古树古木认养</h3>
        <p @click="toRecommend" class='item'>项目介绍></p>
    </div>
    <div>
        <span>区域</span>
        <!--<span>综合排序</span>-->
    </div>
    <ul class='list'>
       <li v-for="tree of treeslist" :key="tree.id" @click="toDetail(tree)">
            <img src="../../../public/img/tree.jpg">
            <p class='name'>{{tree.name}}</p>
            <p class='price'>{{tree.price}}</p>
            <p class='age'>树龄：{{tree.age}}</p>
            <p class='address'>{{tree.address}}</p>

            
            <p class='click'>我要认养</p>
       </li>
        
        
    </ul>
    

   
   </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Oldtree',
    data(){
        return{
            treeslist:[
                {id: '111', name: '细叶青冈', price: "42000.00/株", age:'820年', address:'安徽省九华镇人民政府', img: ''},
                {id: '222', name: '银杏', price: "42000.00/株", age:'800年', address:'安徽省九华镇人民政府', img: ''},
                {id: '333', name: '枫杨', price: "42000.00/株", age:'760年', address:'安徽省九华镇人民政府', img: ''},
                {id: '444', name: '细叶青冈', price: "42000.00/株", age:'820年', address:'安徽省九华镇人民政府', img: ''},
                {id: '555', name: '银杏', price: "42000.00/株", age:'800年', address:'安徽省九华镇人民政府', img: ''},
                {id: '666', name: '枫杨', price: "42000.00/株", age:'760年', address:'安徽省九华镇人民政府', img: ''},
                {id: '777', name: '细叶青冈', price: "42000.00/株", age:'820年', address:'安徽省九华镇人民政府', img: ''},
                {id: '888', name: '银杏', price: "42000.00/株", age:'800年', address:'安徽省九华镇人民政府', img: ''},
                {id: '999', name: '枫杨', price: "42000.00/株", age:'760年', address:'安徽省九华镇人民政府', img: ''},
            ]

        }

    },
    mounted() {
        // axios.get('/oldtree').then((result)=>{
        //     console.log(result.data);
        //     this.treeslist=result.data.goodsList;
        // })
    },
    methods:{
        toDetail(tree){
            // console.log(this.$router)
            this.$router.push({name: 'detail', params: {id: tree.id}, query: {nm: tree.name}});
        },
        toRecommend(){
            this.$router.push({name: 'recommend'});
        }
    },
}
    

</script>

<style scoped>
*{
    padding:0;
    margin:0;
}
.banner {
    width:100%;
    height:188px;
    background:url(../../../public/img/Culturebig.jpg) no-repeat;
}
.list{
   
}
li {
    border-radius:10px;
    width:348px;
    height:102px;
    font-size:12px;
    border: 1px solid #ccc;
    margin:17px 12px;
    position:relative;
}
.list li img{
    border-radius:10px;
    width:72px;
    height:72px;
    position:absolute;
    top:15px;
    left:9px;
}
.list li .name {
    position:absolute;
    top:16px;
    left:90px;
    font-weight:bolder;
    font-size:15px;
}
.list li .price {
    position:absolute;
    top:19px;
    right:11px;
    color:red;
}
.list li .age {
    position:absolute;
    top:45px;
    left:90px;
    
}
.list li .address {
    position:absolute;
    top:65px;
    left:90px;
    
}
.list li .click {
    position:absolute;
    width:70px;
    height:30px;
    border-radius:10px;
    background:#0fa87d;
    top:52px;
    right:10px;
    color: white;
    line-height:30px;
    text-align:center;
    
}
.middle {
    margin:10px 12px;
    position:relative;
}

.middle h3 {
    font-size:15px;
    font-weight:normal;
}
.middle .item {
    font-size:12px;
    top:2px;
    right:10px;
    position:absolute;
    
}
span {
   font-size:12px; 
   display:inline-block;
   margin:0 11px;
}

</style>