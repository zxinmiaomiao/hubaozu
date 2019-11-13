<template>
  <div class="area">
    <header>
      <span @click="back" class="back">&lt;</span>
      <span class="title">区域认养</span>
    </header>

    <div class="arealist">
      <div class="list">
        <router-view></router-view>
      </div>
      <ul class="tab">
        <li
          @click="selTab(tab)"
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{select:selectTab===tab}"
        >{{tab.text}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Area",
  data() {
    const tabs = [
      { text: "生态公益林", routeName: "forest" },
      { text: "古树名木", routeName: "oldtree" }
    ];
    return {
      tabs,
      selectTab: tabs[0]
    };
  },
  mounted() {
    if (this.$route.name == "forest") this.selectTab = this.tabs[0];
    else this.selectTab = this.tabs[1];
  },
  methods: {
    selTab(tab) {
      if (this.selectTab.routeName != tab.routeName) {
        this.selectTab = tab;
        if (this.$route.name == "forest")
          this.$router.push({ name: tab.routeName });
        else this.$router.push({ name: tab.routeName });
      }
    },
    back() {
      this.$router.replace({ path: "/" });
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.area{
  overflow: hidden;
}
header {
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
  font-size: 18px;
}
.arealist {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 50px;
  bottom: 0px;
  width: 100%;
}
.list {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 30px;
  bottom: 50px;
  /* overflow: auto; */
  width: 100%;
}
ul.tab li.select {
  color: green;
  border-bottom: solid 1px green;
  height: 30px;
}

ul.tab {
  width: 100%;
  height: 30px;
  display: flex;
  position: absolute;
  top: 0px;
  background: white;
  height: 30px;
}

ul.tab li {
  display: inline-block;
  flex: 1;
  text-align: center;
  font-size: 13px;
  line-height: 30px;
  height: 30px;
}
</style>



