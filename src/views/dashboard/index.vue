<template>
  <div class="app-container">
    <!-- <div style="color: white">{{ content }}</div> -->
    <div class="info-container">
      <span class="display_name">无人车算法展示</span>
      <!-- <TinymceEditor style="width: 90vw; height: 400px" v-model="content" /> -->
    </div>
    <!-- <div v-html="content"></div> -->
    <!-- <el-button @click="goto">123</el-button> -->
  </div>
</template>
<script>
export default {
  name: "Dashboard",
};
</script>

<style lang="scss" scoped>
.app-container {
  height: 100%;
  width: 100%;
  background-color: #474a9e;
  // 让div充满整个屏幕
  position: fixed;
}

.info-container {
  position: relative;
  margin-left: 20px;
  height: 150px;
  line-height: 200px;
  .display_name {
    font-size: 48px;
    line-height: 48px;
    color: #ffffff;
    position: absolute;
    top: 25px;
  }
}
</style>