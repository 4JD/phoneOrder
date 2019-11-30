<template>
  <div class="shop-content">
    <!-- 状态栏组件 -->
    <Status></Status>
    <!-- 返回组件 -->
    <Store></Store>
    <!-- 左边导航组件 和菜品 -->
    <Leftsidebar></Leftsidebar>
    <!-- 购物车 -->
    <div class="cart">
    <Cart></Cart>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import Status from '@/components/Status.vue'
import Store from '@/components/Store.vue'
import Leftsidebar from '@/components/Leftsidebar.vue'
import Cart from '@/components/Cart.vue'

import { mapState,mapActions } from 'vuex'//引入可以接收 vuex方法 的方法 , ,mapGetters，mapMutations0

export default {
  name: 'mindex',
  components: {
    // HelloWorld
    Status,
    Store,
    Leftsidebar,
    Cart
  },
  data(){
    return {

    }
  },
  methods:{ //定义方法
    ...mapActions([ //获取 数据中心的方法
      'getFoodSync'
    ]),
    ...mapActions([ //获取 数据中心的方法
      'getTapSync'
    ]),
    ...mapActions([ //获取 数据中心的方法
      'saveForm'
    ])
  },
  computed:{ // 计算属性
    ...mapState([ //获取数据
      'food'
    ])
  },
  created(){ // 生命周期函数
    this.getFoodSync() //页面加载时获取数据
    this.getTapSync() //标签
  },
  mounted(){
    this.saveForm({
      context:"tap"
    })
  }
}
</script>

<style lang="less" scoped>
  // .shop-content{

  // }
  .cart{
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3000;
  }
</style>