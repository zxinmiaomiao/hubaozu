<template>
  <div class="forest">
    <div class="banner">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item :key="image.id" v-for="image of images">
          <img :src="image.pic" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="introduce">
      <strong>生态公益林认养</strong>
      <span @click="toRecommend">项目介绍></span>
    </div>
    <div class="areaforest">区域</div>
    <div class="treeslist">
      <ul>
        <li v-for="tree of treeslist" :key="tree.id" @click="fosterjump(tree)">
          <div class="tree_left">
            <div class="treeimg">
              <img :src="tree.treeThumbnail|treeImg()" />
            </div>
            <div class="treeinfor">
              <div>
                <p class="treename">{{tree.treeName}}</p>
                <span class="treelv"></span>
              </div>

              <p class="treeage">树龄:{{tree.treeAge}}年</p>
              <p>{{tree.treePublisher}}</p>
            </div>
          </div>
          <div class="tree_right">
            <p class="moneyage">{{tree.treePrice+"元/年"}}</p>
            <p>
              <button>我要认养</button>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Forest",
  data() {
    const images = [
      {
        id: 1,
        pic: require("../../../public/img/Culturesbig.jpg")
      },
      {
        id: 2,
        pic: require("../../../public/img/redf-1.jpg")
      }
    ];
    return {
      images,
      treeslist: ""
    };
  },

  methods: {
    fosterjump(tree) {
      this.$router.push({
        name: "forestdetail",
   query: { nm: tree.treeName, treeid: tree.treeId }
      }); //点击认养要跳转的连接
    },
    toRecommend() {
      this.$router.push({ name: "recommend" });
    }
  },
  async mounted() {
    //请求 1.2、特色认养/区域认养（首页进入）4古树认养区域的数据
    await axios.get("/homepage/treetype/3").then(result => {
      this.treeslist = result.data.data;
    });
  }
};
</script>            
<style scoped>
.forest {
  width: 100%;
  height: 100%;
  font-size: 12px;
}
/* 轮播 */
.forest .banner {
  height: 188px;
  width: 100%;
}
/* 树木认养 */
.forest .introduce {
  height: 44px;
  margin: 0 14px;
}
.forest .introduce > strong {
  margin: 9px 0;
  float: left;
  font-size: 14px;
  font-weight: 700;
}
.forest .introduce > span {
  float: right;
  margin-top: 8px;
  color: #bcbcbc;
}
/* 区域 */
.forest .areaforest {
  color: #bcbcbc;
  height: 32px;
  margin: 0 14px;
}
.forest .treeslist {
  padding-bottom: 50px;
  position: relative;
  /* height: 100%; */
  /* z-index: 200; */
}

.forest .treeslist ul {
  float: left;
  width: 100%;
}
.forest .treeslist ul li {
  margin: 12px 14px;
  height: 74px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 14px;
  /* box-shadow: 1px 1px 2px #f5f9fb; */
}

/* 树木列表左侧 */
.tree_left {
  float: left;
}
.tree_left .treeimg {
  width: 74px;
  height: 74px;
  border-radius: 3px;
  float: left;
}
.treeimg img {
  width: 72px;
  height: 72px;
  float: left;
}
.tree_left .treeinfor {
  float: left;
  color: #ccc;
  margin-left: 10px;
}
.treeinfor .treelv {
  width: 38px;
  height: 14px;
  display: inline-block;
  background: url(../../../public/img/lv-1.jpg);
}
.treeinfor .treename {
  color: #3f3f3f;
  font-weight: bold;
  display: inline-block;
}
.treeinfor .treeage {
  margin: 7px 0;
}
/* 树木列表右侧 */
.tree_right {
  float: right;
  /* width:84px; */
}
.tree_right .moneyage {
  color: #ff908a;
  margin: 4px 0 23px 0;
  text-align: center;
}
.tree_right button {
  width: 67px;
  height: 28px;
  border-radius: 20px;
  background: #0fa87d;
  font-size: 12px;
  color: #fff;
  border: none;
}
</style>>
   

