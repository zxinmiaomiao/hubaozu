<template>
  <div class="area">
    <div class="banner">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item :key="image.id" v-for="image of images">
          <img :src="image.pic" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="middle">
      <h3>古树古木认养</h3>
      <p @click="toRecommend" class="item">项目介绍></p>
    </div>
    <div>
      <span>区域</span>
      <!--<span>综合排序</span>-->
    </div>
    <ul class="list">
      <li v-for="tree of treeslist" :key="tree.tree_id" @click="toDetail(tree)">
        <img :src="tree.treeThumbnail|treeImg()" />
        <p class="name">{{tree.treeName}}</p>
        <p class="price">{{tree.treePrice}}.00/株</p>
        <p class="age">树龄：{{tree.treeAge}}年</p>
        <p class="address">{{tree.treePublisher}}</p>

        <p class="click">我要认养</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Oldtree",
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
      treeslist: [],
      images
    };
  },
  
  async mounted() {
    //请求 1.2、特色认养/区域认养（首页进入）4古树认养区域的数据
   await axios.get('/homepage/treetype/4').then((result)=>{
     
           this.treeslist = result.data.data;
    })    
  },

  methods: {
    toDetail(tree) {
 
      this.$router.push({
        name: "detail",
        // params: { id: tree.tree_id },
      query: { nm: tree.treeName, treeid: tree.treeId }
      });
    },
    toRecommend() {
      this.$router.push({ name: "recommend" });
    }
  },
  
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.banner {
  width: 100%;
  height: 188px;
  /* background:url(../../../public/img/Culturebig.jpg) no-repeat; */
}
/* .list{
   
} */
li {
  border-radius: 10px;
  width: 348px;
  height: 102px;
  font-size: 12px;
  border: 1px solid #ccc;
  margin: 17px 12px;
  position: relative;
}
.list li img {
  border-radius: 10px;
  width: 72px;
  height: 72px;
  position: absolute;
  top: 15px;
  left: 9px;
}
.list li .name {
  position: absolute;
  top: 16px;
  left: 90px;
  font-weight: bolder;
  font-size: 15px;
}
.list li .price {
  position: absolute;
  top: 19px;
  right: 11px;
  color: red;
}
.list li .age {
  position: absolute;
  top: 45px;
  left: 90px;
}
.list li .address {
  position: absolute;
  top: 65px;
  left: 90px;
}
.list li .click {
  position: absolute;
  width: 70px;
  height: 30px;
  border-radius: 10px;
  background: #0fa87d;
  top: 52px;
  right: 10px;
  color: white;
  line-height: 30px;
  text-align: center;
}
.middle {
  margin: 10px 12px;
  position: relative;
}

.middle h3 {
  font-size: 15px;
  font-weight: normal;
}
.middle .item {
  font-size: 12px;
  top: 2px;
  right: 10px;
  position: absolute;
}

span {
  font-size: 12px;
  display: inline-block;
  margin: 0 11px;
}
</style>