<template>
  <div>
    <!-- 头部 -->
    <header>
      <span class="containers" @click="revert"></span>
      文化认养
    </header>

    <!-- <div class="picrog">
            <img src="../../../public/img/jieshao.jpg">
            <div class="blue" @click="blue">
                点击这里了解详情
            </div>
    </div>-->

    <!-- 图片 -->
    <div>
      <img src="../../../public/img/Culturesbig.jpg" />
    </div>
    <div class="tille">
      <!-- 项目简介 -->
      <div>
        <div class="suggest">
          项目简介
        </div>

        <p>
            公益文化是人类进步文化的重要组成部分，对于倡导社会主义核心价值观，弘扬中华民族悠久的道德传统，鼓励、推动和引导社会公益事业的发展，具有着重要的意义和作用。以真、善、美、爱、乐、新为主题内容的公益文化形式无处不在，它宣扬的爱心、励志、环保、感恩、孝顺、行善和助人为乐等观念，正在成为大多数公民的自觉行为，促进了社会和谐与文明进步。
        </p>
      </div>

      <!-- 认养权益 -->
      <div>
        <div class="suggest">
          认养权益
        </div>
        <ul>
          <li class="equity equity_once">
            <div >
              <p>实施专业养护</p>
             <span>被认养的树木都会得到最专业的养护</span>
            </div>
          </li>
          <li class="equity">

            <div>
              <p>优先续认养权</p>
              <span>
                  养护期一年，认养期满认养方有优先续认养权
              </span>
            </div>
          </li>
          <li class="equity">

            <div>
              <p>颁发认养证书</p>
             <span>
                 古树古木行政管理部门建立认养档案，并在养护地区的古树古木信息监管平台上公布信息
             </span>
            </div>
          </li>
          <li class="equity">

            <div>
              <p>拥有监护权</p>
              <span>
                  在【我的古树古木】可查看树木生长情况，树木精准位置
              </span>
            </div>
          </li>
        </ul>
      </div>

      <!-- 认养金的用途 -->
      <div>
        <div class="suggest">
          认养金用途
        </div>
        <div>
            每一颗被认养的树都会获得唯一的树木编码，每一份认养金都将用于树木的种植与养护，让您养的既省心又安心还舒心。感谢您对生态文化林的支持！
        </div>
      </div>
      <!-- 认养依据 -->
      <div>
        <div class="suggest" style="margin-bottom: 35px;">
          认养依据
        </div>
        <div class="blue" @click="blue">点击这里了解详情</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projectint",
  methods: {
    revert() {
      this.$router.go(-1);
    },
    blue() {
      this.$router.replace({ path: "/articles" });
    }
  }
};
</script>


<style scoped>
* {
  padding: 0;
  margin: 0;
}
header {
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  width: 100%;
  height: 44px;
  line-height: 44px;
}
.containers {
  width: 0;
  height: 0;
  border: 13px solid;
  border-color: transparent #333 transparent transparent;
  position: absolute;
  left: 0px;
  top: 10px;
}
.containers::after {
  content: "";
  position: absolute;
  left: -9px;
  top: -13px;
  border: 13px solid;
  border-color: transparent white transparent transparent;
}
.blue {
  margin-left: auto;
  margin-right: auto;
  width: 345px;
  height: 36px;
  color: white;
  font-size: 14px;
  line-height: 36px;
  text-align: center;
  background: #0fa87d;
  border-radius: 20px;
  margin: 20px auto;
}
.picrog {
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  bottom: 0;
  overflow: auto;
}
.tille{
    font-size: 16px;
    border-radius: 20px;
    position: absolute;
    top:200px;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    padding: 0 15px;
    overflow: auto;
    letter-spacing: 2px;
}
.suggest{
    margin: 20px 0 18px 0;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
}
li{
    width: 100%;
}
.equity p{
    font-weight: 600;
    margin-bottom: 5px;
}
.equity div{
    margin:0 20px 20px 20px; 
}
</style>