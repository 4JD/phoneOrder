<template>
  <div class="Leftsidebar">
    <!-- 点餐左边 -->
    <van-tree-select
      height="300px"
      :items="items"
      :main-active-index.sync="activeIndex"
    >
      <template slot="content" class="menu">
        <div v-if="activeIndex === 0">
            <p class="foodtitle">菜系1</p>
            <!-- 菜品展示 -->
            <Dishes></Dishes>
            <Dishes></Dishes>
            <Dishes></Dishes>
            <Dishes></Dishes>
            <Dishes></Dishes>
            <Dishes></Dishes>
            <Dishes></Dishes>
            <Dishes></Dishes>
            <Dishes></Dishes>
            <Dishes></Dishes>
            <p>到底了~</p>
        </div>
        <div v-if="activeIndex === 1">
            <h1>内容2</h1>
        </div>
        <div v-if="activeIndex === 2">
            <h1>内容3</h1>
        </div>
        
      </template>
    </van-tree-select>

  </div>
</template>

<script>
import Vue from 'vue';
import { TreeSelect } from 'vant';
import Dishes from '@/components/Dishes.vue'

Vue.use(TreeSelect);

export default {
  name: 'Leftsidebar',
  data() {
    return {
      activeIndex: 0,
      items: [{ text: '菜系 1' }, { text: '菜系 2' }]
    }
  },
  components: {
    Dishes
  }
}
</script>

<style lang="less" scoped>
  .Leftsidebar{
    float: left;
    .foodtitle{
      background: rgba(251, 246, 242, 0.76);
      text-align: left;
      padding-left: 10px;
    }
    .van-tree-select__content{
      overflow-x: hidden;
      overflow-y: scroll;
    }
  }
</style>