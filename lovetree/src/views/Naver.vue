<template>
  <div>
    <div class="toparea">
      <div class="bgblock">
        <img class="applogo" src="/img/applogo.png" alt />
      </div>
      <div class="bgimg">
        <img src="/img/bg.png" alt />
      </div>
    </div>
    <div class="wrap">
      <div class="area" @click="gotored">
        <div class="img_wrap">
          <img src="/img/logo_1.jpg" />
        </div>
        <span>特色认养</span>
      </div>
      <div class="area" @click="gotoareasupport">
        <div class="img_wrap">
          <img src="/img/logo_2.jpg" />
        </div>
        <span>区域认养</span>
      </div>
      <div class="area" @click="gotowish">
        <div class="img_wrap">
          <img src="/img/logo_3.jpg" />
        </div>
        <span>许愿树</span>
      </div>
      <div class="area">
        <div class="img_wrap">
          <img src="/img/logo_4.jpg" />
        </div>
        <span>转赠</span>
      </div>
    </div>
    <div class="hot">
      <p>气人榜</p>
    </div>
    <div class="ul_wrap">
      <ul class="tree_list">
        <li :key="item.tree_id" v-for="item of ul_wrap.prpularList" @click="viewdetail(item)">
          <img src alt />
          <p class="treename">{{item.tree_name }}</p>
          <div class="showprice">
            <span class="price">{{item.tree_price }}</span>
            <span>元</span>
          </div>
        </li>
        <!-- <li>
          <img src alt />
          <p class="treename">112</p>
          <div class="showprice">
            <span class="price">1</span>
            <span>元</span>
          </div>
        </li>
        <li>
          <img src alt />
          <p class="treename">112</p>
          <div class="showprice">
            <span class="price">1</span>
            <span>元</span>
          </div>
        </li>
        <li>
          <img src alt />
          <p class="treename">112</p>
          <div class="showprice">
            <span class="price">1</span>
            <span>元</span>
          </div>
        </li>
        <li>
          <img src alt />
          <p class="treename">112</p>
          <div class="showprice">
            <span class="price">1</span>
            <span>元</span>
          </div>
        </li>-->
      </ul>
    </div>
    <div class="poster">
      <img src="/img/poster.jpg" alt />
    </div>
    <div class="support">
      <p class="title">古树名木认养</p>
      <ul class="oldtree">
         <li :key="item.tree_id" v-for="item of ul_wrap.ecologyList" @click="viewdetail(item)">
          <img src="" alt />
          <h3 class="tree_name">{{item.tree_name }}</h3>
          <p class="tree_age">树龄：{{item.tree_age }}年</p>
          <div class="tree_price">
            <span>{{item.tree_price }}</span>元
            <span class="gettree">认养></span>
          </div>
        </li>
        <!-- <li>
          <img src alt />
          <h3 class="tree_name">细叶青冈</h3>
          <p class="tree_age">树龄：820年</p>
          <div class="tree_price">
            <span>42000.00</span>元
            <span class="gettree">认养></span>
          </div>
        </li>
        <li>
          <img src alt />
          <h3 class="tree_name">细叶青冈</h3>
          <p class="tree_age">树龄：820年</p>
          <div class="tree_price">
            <span>42000.00</span>元
            <span class="gettree">认养></span>
          </div>
        </li>
        <li>
          <img src alt />
          <h3 class="tree_name">细叶青冈</h3>
          <p class="tree_age">树龄：820年</p>
          <div class="tree_price">
            <span>42000.00</span>元
            <span class="gettree">认养></span>
          </div>
        </li>
        <li>
          <img src alt />
          <h3 class="tree_name">细叶青冈</h3>
          <p class="tree_age">树龄：820年</p>
          <div class="tree_price">
            <span>42000.00</span>元
            <span class="gettree">认养></span>
          </div>
        </li> -->
      </ul>
    </div>
    <div class="support_sec">
      <p class="title">生态公益林认养</p>
      <ul class="oldtree">
        <li :key="item.tree_id" v-for="item of ul_wrap.ancientList" @click="viewdetail(item)">
          <img src="" alt />
          <h3 class="tree_name">{{item.tree_name }}</h3>
          <p class="tree_age">树龄：{{item.tree_age }}年</p>
          <div class="tree_price">
            <span>{{item.tree_price }}</span>元
            <span class="gettree">认养></span>
          </div>
        </li>
        <!-- <li>
          <img src alt />
          <h3 class="tree_name">细叶青冈</h3>
          <p class="tree_age">树龄：820年</p>
          <div class="tree_price">
            <span>42000.00</span>元
            <span class="gettree">认养></span>
          </div>
        </li>
        <li>
          <img src alt />
          <h3 class="tree_name">细叶青冈</h3>
          <p class="tree_age">树龄：820年</p>
          <div class="tree_price">
            <span>42000.00</span>元
            <span class="gettree">认养></span>
          </div>
        </li>
        <li>
          <img src alt />
          <h3 class="tree_name">细叶青冈</h3>
          <p class="tree_age">树龄：820年</p>
          <div class="tree_price">
            <span>42000.00</span>元
            <span class="gettree">认养></span>
          </div>
        </li>
        <li>
          <img src alt />
          <h3 class="tree_name">细叶青冈</h3>
          <p class="tree_age">树龄：820年</p>
          <div class="tree_price">
            <span>42000.00</span>元
            <span class="gettree">认养></span>
          </div>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Naver",
  data() {
    return {
      ul_wrap: []
    };
  },
  mounted() {
    axios.post("/homepage/queryData").then(res => {
      this.ul_wrap = res.data.data;
    });
    window.sessionStorage.setItem('userId','1')
  },
  methods: {
    gotowish() {
      if(window.sessionStorage.getItem('userId')){
        this.$router.push({ name: "wishTree" });
      }
      else{
        this.$router.push({ name: "logining" });
      }
      
    },
    gotoareasupport() {
      this.$router.push({ name: "area" });
    },
    gotofriends() {
      this.$router.push({ name: "findfriends" });
    },
    gotored() {
      this.$router.push({ name: "special" });
    },

    // 查看树详情的方法
    viewdetail(item) {
      this.$router.push({
        name: "forestdetail",
        query: {
          tree_id: 1,
          tree_name: item.tree_name,
          tree_price: item.tree_price,
          tree_age: item.tree_age,
          tree_type_id: item.tree_type_id,
          tree_publisher: item.tree_publisher
        }
      });
    },
    
  }
};
</script>

<style  scoped>
.toparea {
  width: 375px;
  height: 243px;
  position: relative;
}
.bgblock {
  width: 375px;
  height: 167px;
  background-color: #39c998;
  position: relative;
}
.applogo {
  width: 22px;
  position: absolute;
  top: 32px;
  left: 15px;
}
.bgimg {
  width: 346px;
  height: 173px;
  position: absolute;
  top: 70px;
  left: 15px;
}
.wrap {
  width: 345px;
  height: 68px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  margin-top: 22px;
}
.area {
  width: 49px;
  height: 69px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.img_wrap {
  width: 49px;
  height: 49px;
  border-radius: 50%;
  background-color: #ccc;
}
.hot {
  width: 375px;
  height: 22px;
  margin-top: 29px;
}
.hot p {
  font-size: 14px;
  margin-left: 15px;
}
.ul_wrap {
  width: 346px;
  height: 212px;
  margin: 11px auto 0;
}
.tree_list {
  white-space: nowrap;
  overflow-x: scroll;
  background-color: #ccc;
  overflow-x: auto;
}
.tree_list li {
  width: 135px;
  height: 212px;
  display: inline-block;
}
.tree_list li img {
  display: inline-block;
  width: 135px;
  height: 135px;
}
.treename {
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
}
.showprice {
  font-size: 16px;
  text-align: center;
}
.price {
  color: red;
}
.support {
  width: 345px;
  margin: 0 auto;
}
.title {
  font-size: 14px;
  height: 41px;
  line-height: 41px;
}
/* 古树认养 */
.oldtree {
  overflow: hidden;
}
.oldtree li {
  width: 167px;
  height: 247px;
  float: left;
}
.oldtree li:nth-child(odd) {
  padding-right: 5px;
}
.oldtree li img {
  display: block;
  width: 167px;
  height: 165px;
  background-color: #ccc;
}
.tree_name {
  font-size: 14px;
  margin-left: 16px;
}
.tree_age {
  margin-left: 16px;
  font-size: 12px;
  color: #ccc;
}
.tree_price {
  font-size: 12px;
  margin-left: 16px;
  margin-top: 6px;
}
.gettree {
  font-size: 12px;
  margin-left: 16px;
}
.support_sec {
  width: 345px;
  margin: 0 auto;
  padding-bottom: 80px;
}
</style>