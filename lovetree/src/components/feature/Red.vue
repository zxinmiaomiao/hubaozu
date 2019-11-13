<template>
    <div class="Culture">
        <!-- 大图片 -->
        <div class="culturebig">
            <img src="../../../public/img/redf-1.jpg"> 
        </div>
        <!-- 项目详情 -->
        <div class="projectInt" >
             <p class="project">红色生态林认养</p>
            <p @click="goInts" class="Int">项目简介<span></span></p>
        </div>
        <!-- 区域 -->
        <div class="region">
            <p>区域<span class="container"></span></p>
        </div>
         <!-- 树 -->
        <div class="item">
            <ul>
                <li @click="goDetails(itme)" :key="itme.id" v-for="itme of itmes">
                    <div class="div_img">
                        <img :src="itme.pic">
                    </div>
                    <div class="title">
                        <p class="title_name">{{itme.name}}</p>
                        <p class="title_title">{{itme.title}}</p>
                        <p class="title_price">{{itme.price}}元/年</p>
                    </div>
                    <div class="but">我要认养</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'Red',
     data() {
        const itmes=[
            {id:1,name:"生态树",title:"大愿文化园提供",price:8888,pic:require('../../assets/tree.png')},
            {id:2,name:"生态林",title:"大愿文化园提供",price:8888,pic:require('../../assets/tree.png')},
            {id:3,name:"生态林",title:"大愿文化园提供",price:8888,pic:require('../../assets/tree.png')},
            {id:4,name:"生态树",title:"大愿文化园提供",price:8888,pic:require('../../assets/tree.png')}
        ]
        return {
            itmes
        }
    },
    methods: {
        goInts(){
        this.$router.push({path:'/projectinter'})
        },
        goDetails(itme) {
        //点击事件 传参 把当前页面的点击itme 传给转跳的详情页
        // console.log(itme);
        this.$router.push({
        name: "details",
        params: { id: itme.id },
        query: { nm: itme.name },
        // url:{pic:itme.pic},
      });
    }
    },
}
</script>


<style scoped>
    .Culture{
        position: fixed;
        left: 0;
        top: 80px;
        right: 0;
        bottom: 0;
    }
    .culturebig{
        padding-top:10px; 
        width: 345px;
        height: 153px;
        margin: auto;
    }
    .culturebig img{
        width: 345px;
        height: 153px;
        border-radius: 10px;
    }
    .region{
        font-size: 16px;
        padding: 10px 16px;
        letter-spacing: 2px;
        position: absolute;
    }
    .container{
        width: 0;
        height: 0;
        border: 5px solid;
        border-color: #333 transparent transparent transparent;
        position: absolute;
        left: 60px;
        top: 20px;
    }
   .container::after{
        content: '';
        position: absolute;
        left: -5px;
        top: -8px;
        border: 5px solid;
        border-color: white transparent transparent transparent;
    }
    .item{
        overflow: auto;
        position:absolute;
        left:0;
        right: 0;
        top: 235px;
        bottom: 0px;
    }
    .item ul li{
        width: 345px;
        height: 101px;
        box-shadow: 0px 0px 8px #666;
        margin: 8px 0 16px 15px;
        border-radius: 6px;
        position: relative;
    }
    .div_img{
        width: 73px;
        height: 73px;
        overflow: hidden;
        border-radius: 6px;
        position: absolute;
        left: 10px;
        top: 15px;
    }
    .div_img img{
        width: 73px;
        height: 73px;
    }
    .title{
        font-size: 16px;
        position: absolute;
        left: 90px;
        top: 15px;
        color: black;
    }
    .title p{
        margin-bottom: 3px;
    }
    .title_name{
        font-weight: 600;
    }
    .title_title{
        color: #c8c8c8;
    }
    .title_price{
        color: #f82013;
    }
    .but{
        width: 68px;
        height: 29px;
        position: absolute;
        right: 5px;
        top: 35px;
        margin: auto;
        background: #0fa87d;
        font-size: 14px;
        color: white;
        text-align: center;
        line-height: 29px;
        border-radius: 15px;
    }
    .projectInt{
        display: flex;
        justify-content: space-between;
        padding: 10px 0 0 16px;
    }
    .project{ 
        font-size: 20px;
        line-height: 20px;
    }
    .Int{
        font-size: 16px;
        line-height: 20px;
        margin-right: 25px;
    }
   .Int span{
        width: 0;
        height: 0;
        border: 5px solid;
        border-color:  transparent transparent transparent #333;
        position: absolute;
        right: 0.3rem;
        top: 4.75rem;
    }
   .Int span::after{
        content: '';
        position: absolute;
        right: -0.0733rem;
        top: -0.1432rem;
        border: 5px solid;
        border-color:  transparent transparent transparent white;
    }
</style>