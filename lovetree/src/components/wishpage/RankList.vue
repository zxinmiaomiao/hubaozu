<template>
  <div class="rank">
    <div class="title">
      <h6>排行榜</h6>
      <p class="search" @click="findFriends()">
        <span></span>
        好友查找
      </p>
    </div>
    <ul class="friendsList">
      <li class="my">
        <div class="rankNum">{{myRink.userRank}}</div>
        <div class="photo">
          <img :src="myRink.userImage|imgFomate()" />
        </div>
        <div class="name">
          <p class="friendsNm">{{myRink.userName}}</p>
          <p class="treeNum">认领{{myRink.userTreenum}}棵树</p>
        </div>
        <div class="power">{{myRink.userEnergy|energy()}}能量</div>
      </li>

      <li :key="rank.userId" v-for="(rank,index) of friendList">
        <template v-if="index<3">
          <div :class="'rankNum rank-'+(index+1)"></div>
        </template>
        <!-- 4-10名 -->
        <template v-else>
          <div class="rankNum">{{index+1}}</div>
        </template>
        <div class="photo">
          <img :src="rank.userImage|imgFomate()" />
        </div>
        <div class="name">
          <p class="friendsNm">{{rank.userName}}</p>
          <p class="treeNum">认领{{rank.userTreenum}}棵树</p>
        </div>
        <div class="power">{{rank.userEnergy|energy()}}能量</div>
        <!-- 传一个好友ID参数 -->
        <template v-if="myRink.userId != rank.userId">
          <div class="look" @click="toFriendTree(rank)">查看TA的愿望</div>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "rankList",

  methods: {
    findFriends() {
      this.$router.push({ name: "findfriends" });
    },
    // 接收一个id参数
    toFriendTree(rank) {
      let userInfo = {
        userName: rank.userName,
        userEnergy: rank.userEnergy,
        userImage: rank.userImage
      };
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
      this.$router.push({
        name: "friendtree",
        query: { userId: rank.userId, myEnergy: this.myRink.userEnergy }
      });
    }
  },

  computed: {
    myRink() {
      return this.$store.state.wishtree.userInfo;
    },
    friendList() {
      return this.$store.state.wishtree.rankList;
    }
  },
  filters: {
    // 转换能量
    energy: function(value) {
      return Math.abs(value);
    },
  }
};
</script>



<style scoped>
/* 排行榜标题 */
.rank .title {
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.title > h6 {
  font-size: 17px;
  font-weight: 600;
  margin-left: 10px;
}

/* 搜索框 */
.title .search {
  width: 95px;
  height: 28px;
  border: 1px solid #0fa87d;
  color: #0fa87d;
  background: #ecf8f5;
  border-radius: 20px;
  font-size: 12px;
  line-height: 28px;
  margin-right: 10px;
  text-align: center;
}

.title .search > span {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url("/img/search.png");
  background-size: 100%;
  margin-top: 5px;
  vertical-align: top;
}

/* 好友列表 */
.friendsList {
  background: #f9f9f9;
  padding-bottom: 10px;
}

.friendsList > li {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  padding: 10px 16px;
  margin-bottom: 10px;
  background: #fff;
}

/* 排名顺序 */
.rankNum {
  color: #999;
  width: 23px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}

.rank-1 {
  background: url("/img/rank.png");
  background-size: 100%;
}

.rank-2 {
  background: url("/img/rank.png") no-repeat 0px -90px;
  background-size: 100%;
}

.rank-3 {
  background: url("/img/rank.png") no-repeat 0px -180px;
  background-size: 100%;
}

/* 头像 */
.photo {
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  border-radius: 50%;
  margin: 10px;
  background: yellow;
}

.photo > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

/* 好友名字 */
.name {
  margin-right: 10px;
  width: 90px;
}

.name > p {
  text-align: left;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.name .friendsNm {
  font-weight: 600;
}

.name .treeNum {
  font-size: 12px;
  color: #999;
}

/* 能量值 */
.power {
  color: #12a97f;
  margin-right: 10px;
}

/* 查找 */
.look {
  padding: 0 10px;
  height: 21px;
  line-height: 21px;
  border: 1px solid #12a97f;
  border-radius: 16px;
  font-size: 12px;
  color: #0fa87d;
}

/* 我的信息 */
.friendsList .my {
  background: #e1f0ec;
}
</style>