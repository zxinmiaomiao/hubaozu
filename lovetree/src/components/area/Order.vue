<template>
  <div class="order">
    <header>
      <span @click="back" class="back">&lt;</span>
      <span class="title">确认订单</span>
    </header>
    <div class="content">
      <img :src="orderlist.treeThumbnail|treeImg()" />
      <p class="name">{{orderlist.treeName}}</p>
      <p class="age">树龄：{{orderlist["tree_age"]}}</p>
      <p class="address">{{orderlist["tree_publisher"]}}</p>
      <p class="price">￥{{orderlist.treePrice}}</p>
    </div>
    <ul class="list">
      <li>
        <span>单价</span>
        <span class="p1">￥{{orderlist.treePrice}}</span>
      </li>
      <li>
        <span>数量</span>
        <!-- <span class="p1">1颗</span> -->
        <van-stepper v-model="value" class="p1 sl" />
      </li>
      <li>
        <span>期限</span>
        <span class="p1">一年</span>
      </li>
      <li>
        <span>代付金额</span>
        <span class="p1">￥{{(orderlist.treePrice*this.value).toFixed(2)}}</span>
      </li>
      <li>
        <span>支付方式</span>
        <span class="p1">余额</span>
      </li>
    </ul>
    <!-- <div class="confirm">确认支付</div> -->
    <div is-link @click="showPopup" class="confirm">确认支付</div>
    <van-popup v-model="show" class="showlist">
      <ul v-if="ok" class="buydetail">
        <!-- <li>树ID:{{showw.treeId}}</li> -->
        <!-- <li>认养人：</li> -->
        <li>树的名字：{{orderlist.treeName}}</li>
        <li>树的类型：{{orderlist.treeTypeId}}</li>
        <li>数量：{{this.value}}颗</li>
        <li>订单总金额：￥{{orderlist.treePrice*this.value}}</li>
        <li>
          <span class="yes" @click="pay">确认</span>
          <span class="no" @click="cancel">取消</span>
        </li>
      </ul>

      <div v-if="no" class="paid">支付成功</div>
      <div v-if="nomoney" class="paid">余额不足，请充值</div>
    </van-popup>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Order",
  data() {
    return {
      orderlist: {},
      show: false,
      value: 1,
      ok: true,
      no: false,
      nomoney: false
    };
  },
  async mounted() {
    //请求 3.1确认订单(我要认养) /order/sureOrder
    await axios
      .get("/order/sureOrder", { params: { treeId: this.$route.query.treeid } })
      .then(result => {
      
  
        this.orderlist = result.data.data;
     
      });
  },
  methods: {
    back() {
      history.back();
    },
    showPopup() {
      this.show = true;
      this.ok = true;
    },
    async pay() {
      this.show = false;
      this.ok = false;
      let _this = this;
      //点击确认按钮支付  发送请求并返回后端需要的参数

      await axios
        .get("/order/treeOrder", {
          params: {
            treeId: this.$route.query.treeid,
            userId: window.sessionStorage.getItem("userId"),
            treeName: this.orderlist.treeName,
            treeTypeId: this.orderlist.treeTypeId,
            orderTreenum: this.value,
            orderAccount: this.orderlist.treePrice * this.value
          }
        })
        .then(result => {
          if (result.data.success === true) {
            setTimeout(function() {
              _this.show = true;
              _this.no = true;
            }, 500);
            setTimeout(function() {
              _this.show = false;
              _this.$router.push({ name: "naver" });
            }, 2000);
          } else {
        
            setTimeout(function() {
              _this.show = true;
              _this.nomoney = true;
            }, 500);
            setTimeout(function() {
              _this.show = false;
              _this.$router.push("/money");
            }, 2000);
          }
        });
    },
    cancel() {
      this.show = false;
    }
  },
  computed: {
    detail() {

      return this.$route.query;
    },
    showw() {
      return this.orderlist;

    }
  }
};
</script>


<style scoped>
.paid {
  text-align: center;
  line-height: 180px;
  font-size: 20px;
}
.showlist {
  font-size: 16px;
  padding: 15px;
  width: 200px;
  height: 180px;
  border-radius: 20px;
}
.yes,
.no {
  display: inline-block;
  width: 70px;
  height: 30px;
  background: #0fa87d;
  margin: 10px 10px;
  line-height: 30px;
  text-align: center;
  border-radius: 10px;
}
.no {
  background: #ccc;
}
* {
  padding: 0;
  margin: 0;
}
.order {
  overflow: hidden;
}
header {
  height: 40px;
  margin-top: 10px;
}
header .back {
  position: absolute;
  left: 20px;
  font-size: 30px;
  line-height: 30px;
}
header .title {
  position: absolute;
  left: 40%;
  line-height: 30px;
  font-size: 18px;
}
.content {
  padding: 15px;
  width: 315px;
  height: 70px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin: 15px 15px;
  position: relative;
  background: white;
}
p {
  font-size: 12px;
}
.content img {
  border-radius: 10px;
  width: 72px;
  height: 72px;
  position: absolute;
  top: 15px;
  left: 9px;
}
.content .name {
  border-radius: 10px;
  position: absolute;
  top: 18px;
  left: 95px;
  font-size: 15px;
  font-weight: 700;
}
.content .age {
  border-radius: 10px;
  position: absolute;
  top: 50px;
  left: 95px;
}
.content .address {
  border-radius: 10px;
  position: absolute;
  top: 70px;
  left: 95px;
}
.content .price {
  border-radius: 10px;
  position: absolute;
  top: 40px;
  right: 15px;
  color: red;
}
.list {
  position: absolute;
  padding: 15px;
  width: 315px;
  height: 130px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin: 15px 15px;
  background: white;
}
.list li {
  font-size: 12px;
  line-height: 28px;
}
.sl {
  margin-top: -28px;
}
.p1 {
  position: absolute;
  right: 15px;
}
.confirm {
  width: 345px;
  height: 40px;
  border-radius: 20px;
  background: #0fa87d;
  line-height: 40px;
  text-align: center;
  color: white;
  margin-left: 15px;
  position: absolute;
  bottom: 20px;
  font-size: 16px;
}
.buydetail {
  margin-top: 20px;
}
</style>