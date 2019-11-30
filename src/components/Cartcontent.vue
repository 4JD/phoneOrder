<template>
  <div class="cartcontent">   
    <!-- 左边图片 -->
    <div class="cartcontent-left">
      <img src="../assets/logo.png" alt="">
    </div>
    <!-- 右边商品名字 -->
    <div class="cartcontent-right">
      <h3>菜名</h3>
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
  name: 'cartcontent',
  components: {

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