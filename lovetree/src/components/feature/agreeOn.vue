<template>
    <div>
        <!-- 头部 -->
        <header>
            <span class="containers" @click="revert"></span>
            生态林认养协议
        </header>
        <div class="text"> 
            <h2>生态林认养协议</h2>
            一、甲方自愿认养乙方梨基地内XX梨树 株，位于 区，编号为 ，认养期限为 年。<br>

            二、乙方认养甲方XX梨树的认养资金为 元（大写： ），协议签定时由甲方支付给乙方。<br>

            三、乙方保证甲方认养的XX梨树产量达到 公斤，超出部分归乙方，不足部分由乙方补足。<br>

            四、XX梨果实在9月下旬成熟，甲方应在9月20日-10月8日期间自行采摘，或委托乙方免费采摘，乙方可为甲方保管果实至当年的10月31日，过期由乙方自行处理。<br>

            五、认养树的标志牌由乙方制做，书写内容由甲方提供，乙方审定。<br>

            六、甲方的权利及义务： <br>  

            （一）甲方权利 <br>

            1、 甲方有权在认养期内对认养的XX梨树从事修剪、除草、施肥、浇水等管理活动。<br>

            2、甲方有权在果实成熟时，自行或组织人员前来采摘。<br>

            3、甲方有权在自己认养的XX梨树上悬挂标志牌。<br>

            （二）甲方义务  <br>

            1、甲方对认养的XX梨树从事管理活动时，须在基地技术人员的指导和要求下进行，不得从事有损XX梨树正常生长的活动。<br>

            2、甲方在园内从事各种活动时，不得伤及认养树和非认养树。<br>

            六、乙方权利及义务：<br>

            （一）乙方权利<br>

            1、乙方有权对甲方认养的XX梨树进行正常的技术管理。<br>

            2、甲方对认养的XX梨树技术管理不当时，乙方有权对其进行纠正。<br>

            （二）乙方义务<br>

            1、乙方必须及时对甲方认养的树进行灌水、施肥、修剪、病虫害防治等管理。<br>

            2、 甲方对认养树进行技术操作时，乙方必须派技术人员进行现场指导。<br>

            七、此协议自签字之日起生效。<br>
    </div>
    </div>
</template>

<script>
export default {
    name:'agreeOn',
    methods:{
        revert(){
        history.back();
        },
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
    .text{
        font-size: 18px;
        letter-spacing: 2px;
        word-wrap: 2px;
        position: absolute;
        top: 50px;
        left: 16px;
        right: 16px;
        bottom: 30px;
        overflow: auto;
    }
    h2{
        text-align: center;
        font-size: 26px;
        margin-bottom:20px; 
    }
</style>