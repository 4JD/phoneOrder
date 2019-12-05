<template>
  <div>
    <!-- <Status></Status> -->
    <van-loading size="24px">正在跳转到支付页面...</van-loading>
    <div v-html="str">{{str}}</div>
  </div>
</template>

<script>
// document.forms[0].submit();
import Vue from 'vue';
import { Loading } from 'vant';
// import Status from '@/components/Status.vue'

Vue.use(Loading);

import { mapState} from 'vuex'

export default {
  name: 'PayShow',
  data(){
    return{

    }
  },
  components: {
    // HelloWorld
    // Status,
  },
  computed:{ // 计算属性
  ...mapState([ //获取数据
    'str'
  ])
  },
  created(){
    this.$nextTick(()=>{
      document.forms[0].submit();
    })
  }
}
</script>

<style lang="less" scoped>

</style>