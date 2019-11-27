<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- element 使用方法示范 详情见官网 -->
    <el-row>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
  </el-row>

  <!-- Vant 案例参考 -->
  <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

// Vant 案例参考
import Vue from 'vue';
import { Button } from 'vant';
Vue.use(Button);

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less" scoped>
  .home img {
    width: 200px;
    height: 200px;
  }
</style>
