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

export default {
  name: 'mindex',
  components: {
    // HelloWorld
    Status,
    Store,
    Leftsidebar,
    Cart
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