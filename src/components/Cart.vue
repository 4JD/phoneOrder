<template>
  <!-- 购物车组件 -->
  <div class="cart">
    <!-- 底部购物车 -->
    <div class="cart-bottom">
       <!-- 弹出层  -->
      <van-cell is-link @click="showPopup">
        <!-- 购物车图标 -->
        <div class="cart-bottom-l" :class="{'cart-bottom-l-2': cot>0}">
          <van-icon name="cart-o" />
          <div class="cart-bottom-l-3" v-if="cot>0">{{cot}}</div>
        </div>
        <!-- 价格 -->
        <span class="cart-bottom-c">商品价格</span>
      </van-cell>
      <!-- 右边按钮 -->
      <div class="cart-btn">
        <button class="pay" type="button" :disabled="cot>0?true:false" :class="{'pay1': cot>0}">{{cot>0 ? text1:text}}</button>
      </div>
     
      <!-- 弹出层 -->
      <van-popup v-model="show" 
        position="bottom" 
        :style="{ height: '60%' }"
        :get-container="getContainer">
        <!-- 购物车内容 -->
        <div class="title">
          <span>已选商品</span>
          <a href=""><van-icon name="delete" /> 清空</a>
        </div>
        <Cartcontent></Cartcontent>
        </van-popup>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
import { Popup } from 'vant';
import Cartcontent from '@/components/Cartcontent.vue'

import {mapState} from "vuex"


Vue.use(Popup);
Vue.use(Icon);
export default {
  name: 'Cart',
  components: {
    Cartcontent,   
  },
  data() {
    return {
      show: false,
      text:"无商品",
      text1:"去支付"
    }
  },
  computed:{
    ...mapState([
      'cot'
    ])
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
    background: rgb(54, 52, 52);
    position: relative;
     
    // 弹出层头部
    .title{
      display: flex;
      justify-content: space-between;
      padding: 5px;
      font-size: 16px;
      a{
        color: black;
        vertical-align: medium;
      }
    }
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
      .cart-bottom-l-3{ //数量小图标
        width: 30px;
        height: 30px;
        font-size: 10px;
        line-height: 30px;
        position: absolute;
        top: -5px;
        left: 40px;
        background: red;
        color: white;
        border-radius: 50px;
        box-shadow: 0 0 5px white;
      }
    }
    .cart-bottom-l-2{
      background: rgb(207, 204, 204);
      box-shadow: 0 0 10px rgb(105, 91, 91);
    }
    .cart-btn{
      position: absolute;
      right: 10px;
      top: 10px;
      .pay{
        width: 120px;
        height: 40px;
        background: #777;
        border: none;
      }
      .pay1{
        background: rgb(41, 184, 65);
        color: white;
      }
    }
    .cart-bottom-c{
      position: absolute;
      top: 10px;
      left: 100px;
      color: rgb(167, 129, 129);
    }
  }
</style>