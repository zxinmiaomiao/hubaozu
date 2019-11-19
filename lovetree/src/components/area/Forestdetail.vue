<template>
  <div class="forestdetailbox">
    <!-- 头部 -->
    <header>
      <div class="detail_title">
        <span @click="back" class="back">&lt;</span>
        <h4>{{detaillists.treeName}}</h4>
      </div>
    </header>
    <!-- 中间 -->
    <article>
      <div class="detail_center">
        <div class="detail_img">
          <img :src="detaillists.treeThumbnail|treeImg()" />
        </div>
        <!-- 信息 -->
        <div class="detailinfor">
          <div class="detail_inner_top">
            <div class="treeinfor">
              <div>
                <p class="treename">{{detaillists.treeName}}</p>
                <span class="treelv"></span>
              </div>
              <p class="treeage">{{detaillists.treeAge+'余年'}}</p>
              <p>{{detaillists.treePublisher}}</p>
            </div>
            <span class="price">{{detaillists.treePrice+'元'}}</span>
          </div>
        </div>

        <div class="detail_inner">
          <h4>历史典故</h4>
          <p>{{detaillist.treeDetailDesc}}</p>
          <h5>=======详情 =======</h5>
          <img :src="detaillist.treeDetailImg|treeImg()" />

          <p>{{detaillist.treeDetailDesc}}</p>
        </div>
      </div>
      <!-- {{detailInfor.count}} -->
    </article>

    <!-- 底部 -->
    <footer>
      <div class="footer_top">
        <input type="radio" />
        <p class="read">您已阅读</p>
        <p @click="toAgreement" class="read1">古墓古树认养协议</p>
      </div>

      <img @click="toService" class="pic" src="../../../public/img/12.jpg" />
      <button class="button" @click="toOrder">我要认养</button>
    </footer>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Forestdetail",

  data() {
    return {
      detaillists: '',
      detaillist:'',
      treeid:''
    };
  },
  props:['treeinfor'],
  computed: {
    detailInfor() {
      return this.$route.query.treeinfor;
    }
  },
  async mounted() {
    //请求 1.3、查询树木详情/homepage/treedetail
   
    this.treeid=this.$route.query.treeid
   
    await axios.get("/homepage/treedetail",{params:{treeId:this.treeid}}).then(result => {
      this.detaillists = result.data.data[0];
        this.detaillist = result.data.data[1];

    });
  },
  methods: {
    forestmed(detailInfor) {
    },
    back(){
            //跳转上一级页面
            history.back();
        },
        toOrder(){
            //跳转order页面
            // this.$router.push({name: 'order'});
            if(window.sessionStorage.getItem('userId')){
              this.$router.push({ name: "order", query: { treeid: this.treeid } });
            }
            else{
              this.$router.push({ name: "logining" });
            }
        },
        toService(){
            //跳转客服页面
            this.$router.push({name: 'service'});
        },
        toAgreement(){
            //跳转agreement页面
       
            this.$router.push({name: 'agreeOn'});
        },
  }
};
</script>
<style scoped>
.back {
  font-size: 30px;
}

.forestbtn {
  color: #fff;
  width: 260px;
  height: 40px;
  line-height: 40px;
  background: #0fa87d;
  border-radius: 28px;
  border: none;
  font-size: 12px;
  float: right;
  margin: 5px 20px 0 0;
}
.footer_top {
  font-size: 16px;
  margin: 5px 0 0 20px;
}
.read {
  font-size: 12px;
  position: absolute;
  top: 0px;
}
.read1 {
  top: 0px;
  left: 80px;
  position: absolute;
  color: #0fa87d;
  font-size: 12px;
}
.button {
  position: absolute;
  top: 30px;
  right: 15px;
  width: 260px;
  height: 40px;
  border-radius: 20px;
  background: #0fa87d;
  line-height: 40px;
  text-align: center;
  color: white;
}
.pic {
  width: 50px;
  height: 45px;
  position: absolute;
  bottom: 5px;
  left: 30px;
}
body,
html {
  height: 100%;
}
header {
  height: 54px;
  position: fixed;
  left: 0px;
  top: 0;
  right: 0px;
  z-index: 1;
}
article {
  height: 100%;
  overflow: auto;
  padding-top: 54px;
  padding-bottom: 100px;
  box-sizing: border-box;
}
footer {
  background: #fff;
  height: 80px;
  position: fixed;
  left: 0;
  background: white;
  right: 0;
  bottom: 0;
}
.forestdetailbox {
  font-size: 12px;
  width: 100%;
  height: 100%;
}

/* 头部 */
.detail_title {
  position: sticky;
  font-size: 16px;
  font-weight: bold;
  height: 54px;
  line-height: 54px;
  width: 100%;
  top: 0;
  background: #fff;
}
.detail_title span {
  position: absolute;
  left: 14px;
}
.detail_title h4 {
  text-align: center;
}
/* .detail_center {
  height: 100%;
  left:0;
  right: 0;
} */

/* 共同样式 */

.treeinfor {
  float: left;
  color: #ccc;
  margin-left: 10px;
  margin-top: 10px;
  background: #fff;
}
.treelv {
  width: 40px;
  height: 14px;
  display: inline-block;
  background: url(../../../public/img/lv-1.jpg) no-repeat;
}
.treename {
  color: #3f3f3f;
  font-weight: bold;
  display: inline-block;
  margin-right: 10px;
}
.treeage {
  margin: 7px 0;
}

/* 共同样式 */
.price {
  color: #4fbfa0;
  font-size: 14px;
  font-weight: bold;
  right: 15px;
  top: 10px;
  position: absolute;
}

/* 图片内容 */

.detail_img {
  width: 375px;
  height: 280px;
}
.detail_img img {
  width: 375px;
  height: 280px;
}
.detailinfor {
  position: relative;
}
.detail_inner_top {
  margin: 0 15px;
  position: absolute;
  top: -40px;
  border-radius: 5px;
  background: #fff;
  left: 0;
  right: 0;
}
.detail_inner {
  margin-top: 60px;
  padding: 0 15px;
  height: 100%;
  padding-bottom: 50px;
}
.detail_inner h4 {
  margin-bottom: 10px;
  margin-left: 10px;
}
.detail_inner h5 {
  font-size: 12px;
  text-align: center;
  color: #888;
  margin: 20px 0;
}
/* 固定导航 */
</style>