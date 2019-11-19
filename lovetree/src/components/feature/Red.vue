<template>
  <div class="Culture">
    <!-- 大图片 -->
    <div class="culturebig">
      <!-- <img src="../../../public/img/redf-1.jpg">  -->
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item :key="image.id" v-for="image of images">
          <img :src="image.pic" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 项目详情 -->
    <div class="projectInt">
      <p class="project">红色生态林认养</p>
      <p @click="goInts" class="Int">
        项目简介
        <span></span>
      </p>
    </div>
    <!-- 区域 -->
    <div class="region">
      <p>
        区域
        <span class="container"></span>
      </p>
    </div>
    <!-- 树 -->
    <div class="item">
      <ul>
        <li @click="goDetails(tree)" :key="tree.id" v-for="tree of treeslist">
          <div class="div_img">
            <img :src="tree.treeThumbnail|treeImg()" />
          </div>
          <div class="title">
            <p class="title_name">{{tree.treeName}}</p>
            <p class="title_title">{{tree.treePublisher}}</p>
            <p class="title_price">{{tree.treePrice+"元/年"}}</p>
          </div>
          <div class="but">我要认养</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Red",
  data() {
    const images = [
      {
        id: 1,
        pic: require("../../../public/img/redf-1.jpg")
      },
      {
        id: 2,
        pic: require("../../../public/img/Culturesbig.jpg")
      }
    ];
    return {
      images,
      treeslist: ""
    };
  },
  async mounted() {
    //请求 1.2、特色认养/区域认养（首页进入）4古树认养区域的数据
    await axios
      .get("/homepage/treetype/2")
       .then(result => {
     
        this.treeslist = result.data.data;
      });
  },
  methods: {
    goInts() {
      this.$router.push({ path: "/projectinter" });
    },
    goDetails(tree) {
      //点击事件 传参 把当前页面的点击itme 传给转跳的详情页
 
      this.$router.push({
        name: "detail",
        query: { nm: tree.treeName, treeid: tree.treeId }
      });
    }
  }
};
</script>


<style scoped>
.Culture {
  position: fixed;
  left: 0;
  top: 80px;
  right: 0;
  bottom: 0;
}
.culturebig {
  height: 4.08rem;
  position: absolute;
  left: 0.38rem;
  right: 0;
  top: 10px;
}
.culturebig img {
  width: 345px;
  height: 153px;
  border-radius: 10px;
}
.region {
  font-size: 16px;
  padding: 10px 16px;
  letter-spacing: 2px;
  position: absolute;
  top: 5.1rem;
}
.container {
  width: 0;
  height: 0;
  border: 5px solid;
  border-color: #333 transparent transparent transparent;
  position: absolute;
  left: 60px;
  top: 20px;
}
.container::after {
  content: "";
  position: absolute;
  left: -5px;
  top: -8px;
  border: 5px solid;
  border-color: white transparent transparent transparent;
}
.item {
  overflow: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 235px;
  bottom: 0px;
}
.item ul li {
  width: 345px;
  height: 101px;
  border: 1px solid #ccc;
  margin: 8px 0 16px 15px;
  border-radius: 6px;
  position: relative;
}
.div_img {
  width: 73px;
  height: 73px;
  overflow: hidden;
  border-radius: 6px;
  position: absolute;
  left: 10px;
  top: 15px;
}
.div_img img {
  width: 73px;
  height: 73px;
}
.title {
  font-size: 16px;
  position: absolute;
  left: 90px;
  top: 15px;
  color: black;
}
.title p {
  margin-bottom: 3px;
}
.title_name {
  font-weight: 600;
}
.title_title {
  color: #c8c8c8;
}
.title_price {
  color: #f82013;
}
.but {
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
.projectInt {
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 16px;
  right: 0;
  top: 4.65rem;
}
.project {
  font-size: 20px;
  line-height: 20px;
}
.Int {
  font-size: 16px;
  line-height: 20px;
  margin-right: 25px;
}
.Int span {
  width: 0;
  height: 0;
  border: 5px solid;
  border-color: transparent transparent transparent #333;
  position: absolute;
  right: 0.3rem;
  top: 4.5px;
}
.Int span::after {
  content: "";
  position: absolute;
  right: -0.0733rem;
  top: -0.13rem;
  border: 5px solid;
  border-color: transparent transparent transparent white;
}
</style>