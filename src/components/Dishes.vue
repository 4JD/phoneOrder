<template>
  <div class="dishes">
    <!-- 左边图片 -->
    <div class="dishes-left">
      <img src="../assets/logo.png" alt="">
    </div>
    <!-- 右边商品名字 -->
    <div class="dishes-right">
      <h3>菜名</h3>
      <p>销量：22</p>
      <p class="price">
        <span class="price1">￥18.00</span>
        <span class="price2">
          <button type="button" class="red">-</button>
          <span class="price2-s">10</span>
          <button type="button" class="add">+</button>
        </span>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Dishes',
  components: {

  }
}
</script>

<style lang="less" scoped>
  .dishes{
    width: 252px;
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
            left: 160px;
            bottom: 20px;
          }
          .price2-s{
            position: absolute;
            bottom: 15px;
            left: 185px;
            bottom: 17px;
          }
          .add{
            background: red;
            color: white;
            position: absolute;
            bottom: 5px;
            left: 210px;
            bottom: 20px;
          }
        }
      }
    }
  }
</style>