<template>
  <!-- 购物车组件 -->
  <div class="cart">
    <!-- 底部购物车 -->
    <div class="cart-bottom">
       <!-- 弹出层  -->
      <van-cell is-link @click="showPopup">
        <!-- 购物车图标 -->
        <div class="cart-bottom-l">
          <van-icon name="cart-o" />
        </div>
        <!-- 价格 -->
        <span class="cart-bottom-c">请选择商品</span>
      </van-cell>
      <!-- 右边按钮 -->
      <div class="cart-btn">
        <van-button type="primary" color="#666" url="/vant/mobile.html">去支付</van-button>
      </div>
     

      <!-- 弹出层 -->
      <van-popup v-model="show" 
        position="bottom" 
        :style="{ height: '60%' }"
        :get-container="getContainer">
        <!-- 购物车内容 -->
        <Cartcontent></Cartcontent>
        </van-popup>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
import { Button } from 'vant';
import { Popup } from 'vant';
import Cartcontent from '@/components/Cartcontent.vue'

Vue.use(Popup);
Vue.use(Button);
Vue.use(Icon);
export default {
  name: 'Cart',
  components: {
    Cartcontent
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    // 返回一个特定的 DOM 节点，作为挂载的父节点
    getContainer() {
      return document.querySelector('.cart');
    }
  }
}
</script>

<style lang="less" scoped>
  .cart{
    width: 375px;
    height: 80px;
    background: rgba(54, 52, 52, 0.602);
    position: relative;
    .cart-bottom-l{//购物车图标
      width: 70px;
      height: 70px;
      background: #777;
      box-shadow: 0 0 10px rgb(26, 25, 25);
      border-radius: 50%;
      line-height: 70px;
      text-align: center;
      font-size: 40px;
      position: absolute;
      left: 20px;
      top: -10px;
    }
    .cart-btn{
      position: absolute;
      right: 10px;
      top: 10px;
    }
    .cart-bottom-c{
      position: absolute;
      top: 10px;
      left: 100px;
    }
  }
</style>