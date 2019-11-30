<template>
  <div class="affirm">
    <!-- 状态栏 -->
    <Status></Status>
    <!-- 返回 -->
    <van-nav-bar
      title="确认订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 订单组件 -->
    <Indent></Indent>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue';
import { NavBar } from 'vant';
import Status from '@/components/Status.vue'
import Indent from '@/components/Indent.vue'

Vue.use(NavBar);


export default {
  name: 'Affirm',
  components: {
    // HelloWorld
    Status,
    Indent
  }
}
</script>

<style lang="less" scoped>

</style>