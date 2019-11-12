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
        <div class="rankNum">20</div>
        <div class="photo">
          <img src alt />
        </div>
        <div class="name">
          <p class="friendsNm">世界好大</p>
          <p class="treeNum">认领2棵树</p>
        </div>
        <div class="power">300能量</div>
      </li>
      <li>
        <div class="rankNum rank-one"></div>
        <div class="photo">
          <img src alt />
        </div>
        <div class="name">
          <p class="friendsNm">世界好大哈大</p>
          <p class="treeNum">认领2棵树</p>
        </div>
        <div class="power">300能量</div>
        <div class="look">查看TA的愿望</div>
      </li>
      <li>
        <div class="rankNum rank-two"></div>
        <div class="photo">
          <img src alt />
        </div>
        <div class="name">
          <p class="friendsNm">世界好大哈大</p>
          <p class="treeNum">认领2棵树</p>
        </div>
        <div class="power">300能量</div>
        <div class="look">查看TA的愿望</div>
      </li>
      <li>
        <div class="rankNum rank-three"></div>
        <div class="photo">
          <img src alt />
        </div>
        <div class="name">
          <p class="friendsNm">世界好大哈大</p>
          <p class="treeNum">认领2棵树</p>
        </div>
        <div class="power">300能量</div>
        <div class="look">查看TA的愿望</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'RankList',

    methods: {
        findFriends(){
            this.$router.push({ name: "findfriends" });
        }
    },
}
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

.title>h6 {
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

.title .search>span {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url('/img/search.png');
  background-size: 100%;
  margin-top: 5px;
  vertical-align: top;
}

/* 好友列表 */
.friendsList {
  background: #f9f9f9;
  padding-bottom: 10px;
}

.friendsList>li {
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
  font-size: 20px;
  font-weight: 600;
}

.rank-one {
  background: url('/img/rank.png');
  background-size: 100%;
}

.rank-two {
  background: url('/img/rank.png') no-repeat 0px -90px;
  background-size: 100%;
}

.rank-three {
  background: url('/img/rank.png') no-repeat 0px -180px;
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

.photo>img {
  width: 100%;
  height: 100%;
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