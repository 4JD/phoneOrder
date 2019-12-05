<template>
  <div class="cartcontent">   
    <!-- 左边图片 -->
    <div class="cartcontent-left">
      <img :src="items.foodPhoto" alt="">
    </div>
    <!-- 右边商品名字 -->
    <div class="cartcontent-right">
      <h3>{{items.foodName}}</h3>
      <p class="price">
        <span class="price1">￥{{items.foodPrice}}</span>
        <span class="price2">
          <button type="button" class="red" @click="red(items)" v-show="items.foodNum>0">-</button>
            <span class="price2-s" v-show="items.foodNum>0">{{items.foodNum}}</span>
          <button type="button" class="add" @click="add(items)">+</button>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
// import {mapState} from "vuex"
import {mapMutations} from "vuex"

export default {
  name: 'cartcontent',
  data(){
    return {
      num:0,
    }
  },
  props:{
    items:Object,
  },
  components: {

  },
  methods:{
    ...mapMutations([
      'addShoppingNum',
      'reduceShoppingNum',
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
      this.getShopping1(item)
    }
  },
  created(){
    this.num = this.items.count
  }
}
</script>

<style lang="less" scoped>
  .cartcontent{
    width: 350px;
    height: 100px;
    padding: 10px;
    position: relative;
    .cartcontent-left{
      width: 80px;
      height: 100px;
      float: left;
      img{
        width: 80px;
        height: 80px;
      }
    }
    .cartcontent-right{
      float: left;
      text-align: left;
      line-height: 50px;
      padding-left: 5px;
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
            right: 120px;
            bottom: 20px;
          }
          .price2-s{
            position: absolute;
            right: 85px;
            bottom: 10px;
          }
          .add{
            background: red;
            color: white;
            position: absolute;
            right: 50px;
            bottom: 20px;
          }
        }
      }
    }
  }
</style>