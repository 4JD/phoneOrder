<template>
<!-- 状态栏组件 -->
  <div class="store">
    <!-- 返回按钮 -->
    <van-nav-bar
      title="点餐"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 餐厅的信息 -->
    <div class="info">
      <div class="info-left">
        <img src="../assets/timg.jpg" alt="">
      </div>
      <div class="info-right">
        <p>大米先生</p>
        <!-- 通知 -->
        <p>
          <van-notice-bar
            text="欢迎来到本店，本店支持在线点餐、下单后请耐心等待"
            left-icon="volume-o"
          />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import { Image } from 'vant';
import { NoticeBar } from 'vant';

Vue.use(NoticeBar);
Vue.use(Image);
Vue.use(NavBar);

export default {
  name: 'Store',
  props: {

  },
  methods:{
    onClickLeft(){

    },
    onClickRight(){
      
    }
  }
}
</script>

<style lang="less" scoped>
  .info{
    height: 80px;
    padding: 5px 0;
    // background: pink;
    text-align: left;
    .info-left,
    .info-right{
      float: left;
    }
    .info-left{
      img{
        width: 80px;
        height: 80px;
      }
    }
    .info-right{
      padding-left: 10px;
      font-size: 16px;
      line-height: 28px;
      p:nth-child(1){
        font-size: 18px;
        font-weight: 600;
      }
      p:nth-child(2){
        width: 270px;
        border-radius: 5px;
      }
    }
  }
</style>
