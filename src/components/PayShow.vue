<template>
  <div>
    <h1>正在跳转到支付页面</h1>
    <div v-html="str">{{str}}</div>
  </div>
</template>

<script>
// document.forms[0].submit();

import { mapState} from 'vuex'

export default {
   name: 'PayShow',
  data(){
    return{

    }
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