<template>
  <div class="affirm">
    <!-- 状态栏 -->
    <!-- <Status></Status> -->
    <!-- 返回 -->
    <van-nav-bar
      title="确认订单"
      left-text="取消订单"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 订单组件 -->
    <Indent></Indent>

    <!-- 支付显示 -->
    
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue';
import { NavBar } from 'vant';
// import Status from '@/components/Status.vue'
import Indent from '@/components/Indent.vue'

Vue.use(NavBar);
import { mapState,mapActions } from 'vuex'

export default {
  name: 'Affirm',
  components: {
    // HelloWorld
    // Status,
    Indent
  },
  computed:{ // 计算属性
    ...mapState([ //获取数据
      'orderNum'
    ])
  },
  methods:{ //定义方法
    ...mapActions([
      'cancelOrder'
    ]),
    onClickLeft:function(){ //取消订单
      console.log("取消订单")
      var dd = String(this.orderNum)
      console.log(dd)
      this.cancelOrder(dd)
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="less" scoped>

</style>