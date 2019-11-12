<template>
    <div>
        <!-- 头部 -->
        <header>
            <span class="containers" @click="revert"></span>
            红色认养
        </header>
        <!-- 图片 -->
        <!-- <div>
            <img src="../../../public/img/Culturebig.jpg">
        </div> -->
        <!-- 项目简介 -->
        <!-- <div>
            <div>
                <span class="before"></span>    
            项目简介
            <span class="afore"></span>
            </div>
            

            <p></p>
        </div> -->
 <!-- 认养权益 -->
        <!-- <div>
            <div>
                <span class="before"></span>    
                认养权益
                <span class="afore"></span>
            </div>
            <ul>
                <li>
                    <img src="" alt="">
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                </li>
                <li>
                    <img src="" alt="">
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                </li>
                <li>
                    <img src="" alt="">
                    <div>
                        <p></p>
                        <p></p>
                    </div>
                </li>
            </ul>
        </div> -->

        <!-- 认养金的用途 -->
        <!-- <div>
            <div>
                <span></span>
                认养金用途
                <span></span>
            </div>
            <div></div>
        </div> -->



        <div class="picrog">
            <img src="../../../public/img/jieshao.jpg">
            <div class="blue" @click="blue">
                点击这里了解详情
            </div>
        </div>
        <!-- 认养依据 -->
        <!-- <div> -->
            <!-- <div>
                <span></span>
                认养依据
                <span></span>
            </div> -->
           <!-- <div class="blue" @click="blue">
                点击这里了解详情
            </div> -->
        <!-- </div> -->
    </div>
</template>

<script>
export default {
    name:'Projectinter',
    methods:{
        revert(){
        this.$router.go(-1)
        },
        blue(){
            this.$router.replace({path:'/articles'})
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
    .blue{
        margin-left:auto;
        margin-right:auto;  
        width: 345px;
        height: 36px;
        color: white;
        font-size: 14px;
        line-height: 36px;
        text-align: center;
        background: #0fa87d;
        border-radius:20px;
        margin: 20px auto;
    }
    .picrog{
        position: absolute;
        left: 0;
        right: 0;
        top: 50px;
        bottom: 0;
        overflow: auto;
    }
</style>