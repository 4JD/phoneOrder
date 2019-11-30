<template>
<!-- 状态栏组件 -->
  <div class="store">
    <!-- 返回按钮 -->
    <van-nav-bar
      title="点餐"
      left-text="返回"
      right-text="我的订单"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 餐厅的信息 -->
    <div class="info">
      <div class="info-left">
        <van-image
          round
          width="80px"
          height="80px"
          src="../assets/logo.png"
        />
      </div>
      <div class="info-right">
        <p>商家名</p>
        <!-- 通知 -->
        <p>
          <van-notice-bar
            text="商家公告公告公告商家公告公告公告商家公告公告公告商家公告公告公告商家公告公告公告"
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
