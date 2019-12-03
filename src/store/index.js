import Vue from 'vue'
import Vuex from 'vuex'
import http from '../utils/http'
import vueAxios from 'vue-axios'
// import axios from 'axios'

Vue.use(Vuex)
Vue.use(vueAxios, http)

const food = [
  {
    foodId: "1",
    foodName:"名称1",
    foodType: "新品",
    foodLargePrice: 120,
    foodPhoto:"../assets/logo.png",
    foodRemark:"这是一段菜品简介",                                                                     
  },
  {
    foodId: "2",
    foodName:"名称2",
    foodType: "小炒",
    foodLargePrice: 120,
    foodPhoto:"../assets/logo.png",
    foodRemark:"这是一段菜品简介",                                                                     
  },
  {
    foodId: "3",
    foodName:"名称3",
    foodType: "新品",
    foodLargePrice: 160,
    foodPhoto:"../assets/logo.png",
    foodRemark:"这是一段菜品简介",                                                                     
  },
  {
    foodId: "4",
    foodName:"名称4",
    foodType: "新品",
    foodLargePrice: 120,
    foodPhoto:"../assets/logo.png",
    foodRemark:"这是一段菜品简介",                                                                     
  },
  {
    foodId: "5",
    foodName:"名称5",
    foodType: "新品",
    foodLargePrice: 120,
    foodPhoto:"../assets/logo.png",
    foodRemark:"这是一段菜品简介",                                                                     
  },
  {
    foodId: "6",
    foodName:"名称6",
    foodType: "新品",
    foodLargePrice: 120,
    foodPhoto:"../assets/logo.png",
    foodRemark:"这是一段菜品简介",                                                                     
  },
  {
    foodId: "7",
    foodName:"名称7",
    foodType: "新品",
    foodLargePrice: 120,
    foodPhoto:"../assets/logo.png",
    foodRemark:"这是一段菜品简介",                                                                     
  },
]

const tap=[
  {text:"类型1",num:1},
  {text:"类型2",num:2},
  {text:"类型3",num:3},
  {text:"类型4",num:4}
]

export default new Vuex.Store({
  state: {
    food:[],
    foodType:[],
    cot:0,
    tap:[],
    storeID:1,
    shopping:[]
  },
  getters:{//计算数据

  },
  mutations: {//在这里定义修改数据的方案
    getFood(state,n){ //获取数据
      state.food = n
      console.log("获取了数据",state.food);
    },
    getTap(state,t){ //获取标签数据
      state.tap = t
      console.log("获取了数据",state.tap);
    },
    alterCot(state,n){
      if(n==1){
        state.cot++
        console.log("加了",state.cot);
      } else if(n==-1){
        state.cot--
        console.log("减了",state.cot);
      }
    }
  },
  actions: {// 提交 mutations 中定义的方案 actions 主要用于处理异步操作
    getFoodSync({commit}){ //commit 是参数 statex下的一个方法
      setTimeout(function() { //模仿异步请求
        commit('getFood', food)
      }, 1000)
    },
    getTapSync({commit}){ //commit 是参数 statex下的一个方法
      setTimeout(function() { //模仿异步请求
        commit('getTap', tap)
      }, 1000)
    },

    // 获取后台数据 
    // getFoodTap:function({commit}){ // 获取标签数据
    //   console.log("执行了axios")
    //   http
    //   .post("food/foodList",{   
    //     header:1
    //   })
    //   .then((res) => {
    //     console.log("成功了",res.data)
    //     commit("getTap",res.data)//标签数据赋值
    //   })
    //   .catch(err=> {
    //     console.log("失败了",err)
    //   })
    // },
  //   getFoodWhat:function({commit}){ //根据标签数据去获取菜品数据
  //     http
  //     .post("food/foodList",{
  //       foodTypeId:1
  //     })
  //     .then((res) => {
  //       console.log("成功了",res.data)
  //       commit('getFood',res.data)
  //     })
  //     .catch(err=> {
  //       console.log(err)
  //     })             
  //   }
  },
  modules: {
  }
})
