<template>
  <div class="dishes">
    <div>
      <!-- 左边图片 -->
      <div class="dishes-left">
        <img :src="items.foodPhoto" alt="">
      </div>
      <!-- 右边商品名字 -->
      <div class="dishes-right">
        <h4>{{items.foodName}}</h4>
        <p class="sales">{{items.foodRemark.substr(0,8)}}...</p>
        <p class="price">
          <span class="price1">￥{{items.foodPrice}}</span>
          <span class="price2">
            <button type="button" class="red" @click="red(items)" v-show="num>0">-</button>
            <span class="price2-s" v-show="num>0">{{num}}</span>
            <button type="button" class="add" @click="add(items)">+</button>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex"//,mapGetters

export default {
  name: 'Dishes',
  props:{
    items:Object,
  },
  components: {

  },
  data(){
    return{
      num:0,
      d:"无简介",
    }
  },
  computed:{
    // getCount:function(){
    //   return this.coun =this.items.count
    // },  
    ...mapState([
      'cot'
    ])
  },
  methods:{
    ...mapMutations([ //获取 数据中心的方法
      'alterCot'
    ]),
    ...mapMutations([ //获取 数据中心的方法
      'getShopping',
      'redShopping'
    ]),
    red:function(item){ //减按钮
      this.num --
      this.alterCot(-1) //计算总数

      console.log("组件点击的商品",item)
      this.redShopping(item)//得到购物车数组
    },
    add:function(item){ //加按钮
      this.num ++
      this.alterCot(1)
      console.log("组件点击的商品",item)
      this.getShopping(item)
    }
  }
}
</script>

<style lang="less" scoped>
  .dishes{
    width: 275px;
    height: 100px;
    padding: 10px;
    position: relative;
    .dishes-left{
      width: 80px;
      height: 100px;
      float: left;
      img{
        width: 80px;
        height: 80px;
      }
    }
    .dishes-right{
      float: left;
      text-align: left;
      line-height: 30px;
      padding-left: 5px;
      .sales{
        font-size: 16px;
      }
      .price{
        .price1{
          color: red;
        }
        // 按钮样式
        .price2{
          .red,
          .add{
            width: 24px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            border: none;
            border-radius: 50%;
            font-size: 24px;
          }
          .red{
            background: white;
            color: red;
            border: red solid 1px;
            position: absolute;
            bottom: 5px;
            left: 200px;
            bottom: 20px;
          }
          .price2-s{
            position: absolute;
            left: 230px;
            bottom: 17px;
          }
          .add{
            background: red;
            color: white;
            position: absolute;
            left: 260px;
            bottom: 20px;
          }
        }
      }
    }
  }
</style>