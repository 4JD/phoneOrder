import Vue from 'vue'
import Vuex from 'vuex'
import http from '../utils/http'
import vueAxios from 'vue-axios'
import router from '../router'
// import axios from 'axios'

Vue.use(Vuex)
Vue.use(vueAxios, http)

export default new Vuex.Store({
  state: {
    food:[], //菜品
    cot:0, //总量数组
    tap:[], // 菜品标签
    storeID:1, //店铺id
    shopping:[], // 购物车数组
    shop:[], // 购物车粗处理数组
    deskNum:1, //桌号
    orderPrice:0, //订单价格
    orderNum:0, //订单编号
    orderTime:"", //订单时间
    str:"" ,//支付字符串
    zong:0,
    wg:[]
  },
  getters:{//计算数据
    // 计算购物车总价
    totalPrice(state){
      var n = 0
      for(var i=0; i<state.shopping.length;i++){
        n = state.shopping[i].foodNum*state.shopping[i].foodPrice + n
        console.log("执行了计算总价")
      }
      console.log("总价为",n);
      return n
    },
    // 计算总数
    countSum(state){
      var num = 0
      for(var i=0; i<state.shopping.length;i++){
        num = state.shopping[i].foodNum + num
      }
      return num
    },
    // 计算单件商品数量
    getCount(state,n){
      return state.shopping[n].foodNum
    } 
  },
  mutations: {//在这里定义修改数据的方案
    getFood(state,n){ //获取数据
      state.food = n
      // console.log("获取了数据1",state.food);
    },
    getTap(state,t){ //获取标签数据
      state.tap = t
      // console.log("获取了数据2",state.tap);
    },
    getIndent(state,data){ // 获取订单信息
      state.orderNum = data.orderNum //获取订单编号
      state.orderTime = data.orderTime //获取订单时间
      state.orderPrice = data.orderPrice //订单价格
    },
    alterCot(state,n){
      if(n==1){
        state.cot++
        // console.log("加了",state.cot);
      } else if(n==-1){
        state.cot--
        // console.log("减了",state.cot);
      }
    },
    getShopping(state,itemm){ //将商品加入购物车数组
      // console.log("数据中心数据",state)
      console.log("传过来的参数",itemm)
      console.log("一开始的数组",state.shopping)
      if(state.shopping.indexOf(itemm)==-1){
        itemm.foodNum = 1
        state.shopping.push(itemm);
        console.log("刚加入数组",state.shopping) 
      } else {
        for(var i=0; i<state.shopping.length; i++){
          if(state.shopping[i].foodId == itemm.foodId){
            state.shopping[i].foodNum = state.shopping[i].foodNum +1
            break;
          }
        }
      }
      console.log("更新后的数组",state.shopping) 
    },
    redShopping(state,itemm){ //将商品数量减少
      // console.log("数据中心数据",state)
      console.log("传过来的参数",itemm)
      for(var i=0; i<state.shopping.length; i++){
        if(state.shopping[i].foodId==itemm.foodId){
          state.shopping[i].foodNum --
        }
        if(state.shopping[i].foodNum==0){
          state.shopping.splice(i,1);
          break;
        }
      }
      console.log("更新后的数组",state.shopping) 
    },
    getShopping1(state,itemm){ //将购物车商品怎加
      for(var i=0; i<state.shopping;i++){
        if(state.shopping[i].foodId==itemm.foodId){
          state.shopping[i].foodNum++
          break;
        }
      }
      console.log("更新后的数组",state.shopping) 
    },
    getstr(state,str){ // 支付宝接口
      state.str =str
    }
  },
  actions: {// 提交 mutations 中定义的方案 actions 主要用于处理异步操作
    // 获取后台数据 
    getFoodTap:function({commit}){ // 获取标签数据
      http
      .post("foodType/foodTypeList",{   
        "storeId":"12"
      })
      .then((res) => {
        console.log("菜品标签获取成功了",res.data.data)
        commit("getTap",res.data.data)//标签数据赋值
      })
      .catch(err=> {
        console.log("失败了",err)
      })
    },
    getFoodWhat:function({commit},i){ //根据标签数据去获取菜品数据
      http
      .post("food/foodList",{
        "foodTypeId":`${i}`
      })
      .then((res) => {
        console.log("菜品列表url",res.data.data.url);
        console.log("菜品列表s",res.data.data.foods);
        const newFoodList = [];
        for(var i=0;i<res.data.data.foods.length;i++) {
          var a = {
            foodId: res.data.data.foods[i].foodId,
            foodName: res.data.data.foods[i].foodName,
            foodPhoto: res.data.data.url + res.data.data.foods[i].foodPhoto,
            foodPrice: res.data.data.foods[i].foodPrice,
            foodRemark: res.data.data.foods[i].foodRemark,
            foodState: res.data.data.foods[i].foodState,
            foodTypeId: res.data.data.foods[i].foodTypeId,
            foodTypeName: res.data.data.foods[i].foodTypeName,
            saleId: res.data.data.foods[i].saleId,
            saleState: res.data.data.foods[i].saleState,
            tasteId: res.data.data.foods[i].tasteId
          }
          newFoodList.push(a);
        }
        commit('getFood',newFoodList)
      })
      .catch(err=> {
        console.log(err)
      })             
    },
    generateOrder:function({commit},shopping){ // 提交订单
      console.log("传的参数",shopping)
      http
      .post("user/placeOrder",{
        "deskNum":"1",	//桌号
        "foodOrders": shopping,
        "orderRemark":"新订单",
        "storeId": "1"	//店铺
      })
      .then((res) => {
        console.log("订单生成成功",res.data.data)
        commit('getIndent',res.data.data)
      })
      .catch(err=> {
        console.log(err)
      })             
    },
    cancelOrder:function(){ //取消订单{commit},
      console.log("调用时的参数",arguments[1])
      http
      .post("/user/cancleOrder",{
        "orderNum":arguments[1]
      })
      .then((res) => {
        console.log("订单取消成功",res.data)
        // commit('getIndent',res.data.data)
      })
      .catch(err=> {
        console.log(err)
      })  
    },
    paymentOrder:function({commit},obj){ //支付接口 name1,,message
      http
      .post("/alipay",{
        "out_trade_no":String(obj.orderNum),	//订单编号
        "subject":`新订单`,			//订单名称
        "total_amount":String(obj.orderPrice),		//金额
        "body":"描述"			//描述
      })
      .then((res) => {
        console.log("支付的参数000",obj)
        console.log("支付接口调用了，得到了返回的字符串",res.data);
        commit('getstr',res.data.data) 
        router.replace('/PayShow')
      })
      .catch(err=> {
        console.log(err)
      })  
    },
    paywin:function(){ //支付成功接口
      console.log("参数:",arguments[1])
      http
      .post("/success",{
        "out_trade_no":`${arguments[1]}`,	//订单编号
      })
      .then((res) => {
        console.log("支付成功接口",res.data)
        // console.log("得到了返回的字符串",res.data.data);
      })
      .catch(err=> {
        console.log(err)
      })  
    }
  },

  modules: {
  }
})
