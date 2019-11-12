<template>
  <div class="area">
    <header>
      <span class="containers" @click="revert"></span>
      特色认养
    </header>
    <div class="arealist">
      <div class="list"></div>
      <ul class="tab">
        <li
          @click="selTab(tab)"
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{select:selectTab===tab}"
        >{{tab.text}}</li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Special",
  data() {
    const tabs = [
      { text: "文化认养", routeName: "culture" },
      { text: "红色认养", routeName: "red" }
    ];
    return {
      tabs,
      selectTab: tabs[0]
      // selectTab:undefined
    };
  },
  mounted() {
    if (this.$route.name == "culture") this.selectTab = this.tabs[0];
    else this.selectTab = this.tabs[1];
  },
  methods: {
    selTab(tab) {
      if (this.selectTab.routeName != tab.routeName) {
        this.selectTab = tab;
        if (this.$route.name == "culture")
          this.$router.push({ name: tab.routeName });
        else this.$router.push({ name: tab.routeName });
      }
    },
    revert() {
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
header {
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  width: 100%;
  height: 44px;
  line-height: 44px;
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
  overflow: auto;
  width: 100%;
  border-bottom: 1px solid #666;
}
ul.tab li.select {
  color: green;
  border-bottom: solid 2px green;
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
  font-size: 14px;
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
</style>



