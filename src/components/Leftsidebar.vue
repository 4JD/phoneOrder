<template>
  <div class="Leftsidebar">
    <!-- 点餐左边 -->
    <div class="tab-title">
      <!-- <a href="javascript:;" @click="num = 1" :class="{'tab-title-l': num==1}">选项1</a> -->
      <a href="javascript:;" @click="fn(index)" :class="{'tab-title-l': num==index}" v-for="(item,index) in tap" :key="index">{{item.text}}</a>

    </div>

    <p class="food-title">选项{{num+1}}内容</p>
    <!-- 点餐右边 -->
    <div class="tab-content">
      <div v-show="num == index" v-for="(item,index) in tap" :key="index">
        {{item.tex}}
        <Dishes></Dishes>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';
import { TreeSelect } from 'vant';
import Dishes from '@/components/Dishes.vue'

import { mapState } from 'vuex'//,mapGetters

Vue.use(TreeSelect);

export default {
  name: 'Leftsidebar',
  data() {
    return {
      num:1,
      activeIndex: 0,
      items: []
    }
  },
  components: {
    Dishes
  }, 
  computed:{ // 计算属性
    // 获取数据
    ...mapState([
      'food',
      'tap'
    ]),
    ...mapState([
      'newArr'
    ])
  },
  methods:{
  fn:function(index){
    this.num = index
    // 点击时获取属于标签的数据
  }
  },
  created(){

 }
}
</script>

<style lang="less" scoped>
  .Leftsidebar{
    a{
      color: black;
      font-size: 16px;
    }
    width: 375px;
    float: left;
    .tab-title{//左边
      width: 80px;
      height: 450px;
      float: left;
      overflow-y: scroll;
      overflow-x: hidden;
      a {
        display: inline-block;
        width: 80px;
        height: 40px;
        // background: rgba(233, 227, 191, 0.445);
        line-height: 40px;
        font-weight: 400;

      }       
      .tab-title-l{
        border-left: 3px solid red;
        background: rgba(240, 220, 220, 0.356);
        font-weight: 600;
      }
    }
    .food-title{ // 标题
      width: 280px;
      height: 20px;
      float: left;
      font-size: 16px;
      background: rgba(212, 205, 205, 0.39);
      text-align: left;
      padding: 5px 6px;
    }
    .tab-content{//右边
      width: 295px;
      height: 450px;
      float: left;
      overflow-y: scroll;
    }
  }
</style>