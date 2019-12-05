<template>
  <div>
    <!-- <Status></Status> -->
    <h3>谢谢惠顾</h3>
    <van-loading size="24px">
      <span>正在跳转到主页</span>
      </van-loading> 
  </div>
</template>

<script>

// Vant 案例参考
// import Vue from 'vue';
import Vue from 'vue';
import {mapActions} from 'vuex'
// import Status from '@/components/Status.vue'
import { Loading } from 'vant';

Vue.use(Loading);
export default {
  name: 'PayWin',
  data(){
    return {
      times:3
    }
  },
  components: {
    // HelloWorld
    // Status
  },
  methods:{ //定义方法
    ...mapActions([
      'paywin'
    ]),
  },
  created(){
    var orderNum = location.search.split("=")[2].split("&")[0]
    console.log("取到的订单编号",orderNum)
    this.paywin(orderNum)
    this.$router.replace('/')
  }
}
</script>

<style lang="less" scoped>

</style>
