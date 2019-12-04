<template>
  <h1>支付成功</h1>
</template>

<script>

// Vant 案例参考
// import Vue from 'vue';
import {mapActions} from 'vuex'

export default {
  name: 'PayWin',
  components: {

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
  }
}
</script>

<style lang="less" scoped>

</style>
