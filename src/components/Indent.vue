<template>
  <div class="indent">
    <h5>订单详情</h5>
    <p class="content">
      <img src="../assets/logo.png" alt="">
      <span class="content-tow">特别长的菜名很长很</span>
      <span>x2</span>
      <span class="content-three">￥88</span>
    </p>
    <p class="content">
      <img src="../assets/logo.png" alt="">
      <span class="content-tow">特别长的菜名很ddddddddddddddd长很</span>
      <span>x2</span>
      <span class="content-three">￥88</span>
    </p>
    <p class="content">
      <img src="../assets/logo.png" alt="">
      <span class="content-tow">特别长的菜名很长很</span>
      <span>x2</span>
      <span class="content-three">￥88</span>
    </p>
    <p class="content">
      <img src="../assets/logo.png" alt="">
      <span class="content-tow">特别长的菜名很长很</span>
      <span>x2</span>
      <span class="content-three">￥88</span>
    </p>
    <p class="content">
      <img src="../assets/logo.png" alt="">
      <span class="content-tow">特别长的菜名很长很</span>
      <span>x2</span>
      <span class="content-three">￥88</span>
    </p>
    <p class="content">
      <img src="../assets/logo.png" alt="">
      <span class="content-tow">特别长的菜名很长很</span>
      <span>x2</span>
      <span class="content-three">￥88</span>
    </p>
    <p class="content">
      <img src="../assets/logo.png" alt="">
      <span class="content-tow">特别长的菜名很长很</span>
      <span>x2</span>
      <span class="content-three">￥88</span>
    </p>
    <p class="content">
      <img src="../assets/logo.png" alt="">
      <span class="content-tow">特别长的菜名很长很</span>
      <span>x2</span>
      <span class="content-three">￥88</span>
    </p>
    <p class="content">
      <img src="../assets/logo.png" alt="">
      <span class="content-tow">特别长的菜名很长很</span>
      <span>x2</span>
      <span class="content-three">￥88</span>
    </p>
    <p class="content">
      <img src="../assets/logo.png" alt="">
      <span class="content-tow">特别长的菜名很长很</span>
      <span>x2</span>
      <span class="content-three">￥88</span>
    </p>
    <p class="content">
      <img src="../assets/logo.png" alt="">
      <span class="content-tow">特别长的菜名很长很</span>
      <span>x2</span>
      <span class="content-three">￥88</span>
    </p>
    <p class="content">
      <img src="../assets/logo.png" alt="">
      <span class="content-tow">特别长的菜名很长很</span>
      <span>x2</span>
      <span class="content-three">￥88</span>
    </p>
    <p class="content">
      <img src="../assets/logo.png" alt="">
      <span class="content-tow">特别长的菜名很长很</span>
      <span>x2</span>
      <span class="content-three">￥88</span>
    </p>
    <p class="content">
      <img src="../assets/logo.png" alt="">
      <span class="content-tow">特别长的菜名很长很</span>
      <span>x2</span>
      <span class="content-three">￥88</span>
    </p>
    <p class="content">
      <img src="../assets/logo.png" alt="">
      <span class="content-tow">特别长的菜名很长很</span>
      <span>x2</span>
      <span class="content-three">￥88</span>
    </p>

    <!-- 备注 -->
    <div class="van-cell-group">
      <van-cell-group>
        <van-field
          v-model="message"
          rows="2"
          autosize
          label="备注："
          type="textarea"
          maxlength="50"
          placeholder="口味、偏好"
          show-word-limit
        />
      </van-cell-group>
    </div>
    <div class="perch">

    </div>

    <!-- 底部支付 -->
    <div class="bottom">
      <span>
        ￥103.34
      </span>
      <button type="button" class="btn">待支付</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Field } from 'vant';

Vue.use(Field);

export default {
  name: 'Indent',
  components: {

  },
  data(){
    return {
      message:""
    }
  }
}
</script>

<style lang="less" scoped>
  .indent{
    text-align: left;
    position: relative;
    h5{
      padding: 5px;
      box-shadow: 0 1px 1px #666;
    }
    p:nth-last-child {
      background: forestgreen;
    }
    .content{
      padding: 5px;
      font-size: 20px;
      border-radius: 5px;

      img{
        width: 40px;
        height: 40px;
        vertical-align: top;
      }
      .content-tow{
        display: inline-block;
        padding-left: 5px;
        width: 200px;
        font-size: 18px
      }
      .content-three{
        padding-left: 40px;
        font-size: 24px;
        font-weight: 700px;
      }
    }
    // 备注框
    .van-cell-group{
      margin-top: 30px;
      height: 80px;
      line-height: 80px;
      padding: 10px;
      border-radius: 5px;
      background: rgb(230, 230, 228);
    }

    // 底部支付
    .bottom {
      width: 100%;
      height: 60px;
      line-height: 60px;
      color: white;
      background: #666;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 2;
      display: flex;
      justify-content: space-around;
      align-items:center;
      .btn{
        width: 120px;
        height: 40px;
        background: rgb(93, 224, 93);
        line-height: 40px;
        border: none;
        border-radius: 5px;
      }
    }
    .perch{
      width: 100%;
      height: 90px;
      background: rgb(230, 230, 228);
    }
  }
</style>