<template>
  <div class="indent">
    <h5>订单详情</h5>
    <p class="ddxq">桌号：{{deskNum}}</p>
    <p class="ddxq">订单时间：{{new Date().toLocaleString()}}</p>
    <p class="ddxq">订单编号：{{orderNum}}</p>

    <p class="ddxq ddxq-last">
      <van-count-down :time="time"/>
    </p>

    <p class="content" v-for="(item,index) in shopping" :key="index">
      <img src="../assets/logo.png" alt="">
      <span class="content-tow">{{item.foodName}}</span>
      <span>x{{item.count}}</span>
      <span class="content-three">￥{{item.count*item.foodPrice}}</span>
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

      <!-- 支付宝接口 -->
       <PayShow></PayShow>
    </div>
    <div class="perch">

    </div>

    <!-- 底部支付 -->
    <div class="bottom">
      <span>
        ￥{{orderPrice}}
      </span>
      <button type="button" class="btn" @click="pay">待支付</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Field } from 'vant';
import { CountDown } from 'vant';

Vue.use(CountDown);
Vue.use(Field);

import { mapState,mapActions} from 'vuex'

export default {
  name: 'Indent',
  components: {
  },
  data(){
    return {
      message:"",
      time: 15 * 60 * 1000
    }
  },
  computed:{ // 计算属性
    ...mapState([ //获取数据
      'orderPrice',//价格
      'deskNum',//桌号
      'orderTime', //订单时间
      'orderNum', //订单编号
      'str',
      'shopping' //订单数组
    ])
  },
  methods:{
    ...mapActions([
      'paymentOrder'
    ]),

  pay(){
    console.log("支付函数被调用");
    var name1 = "123"
    this.paymentOrder(this.orderNum,name1,this.orderPrice,this.message);
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
    .ddxq{ // 订单支付详情
      font-size: 15px
    }
    .ddxq-last{
      border-bottom: #666 1px solid;
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