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
    zong:0
  },
  getters:{//计算数据
    // 计算购物车总价
    totalPrice(state){
      state.shopping.forEach(function(item){
        state.zong = item.count * item.foodPrice + state.zong
      })
      return state.zong;
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
    getShopping(state,itemm){
      console.log("数据中心数据",state)
      console.log("参数点击的商品",itemm)
      if(state.shopping.indexOf(itemm)==-1){
        state.shopping.push(itemm);
      } 
      console.log("更新后的数组",state.shopping)
      
    },
    addShoppingNum(state,id){ // 增加购物车数量
      state.shopping.forEach(function(item){
        if(item.foodId==id){
          item.count++
        }
      });
      console.log("增加后的购物车数组",state.shopping)
    },
    reduceShoppingNum(state,id){ // 减少购物车数量
      state.shopping.forEach(function(item){
        if(item.foodId==id){
          item.count--
        }
      });
      console.log("减少后的购物车数组",state.shopping)
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
        "storeId":"1"
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
        console.log("菜品获取成功了",res.data.data)
        commit('getFood',res.data.data)
      })
      .catch(err=> {
        console.log(err)
      })             
    },
    generateOrder:function({commit}){ // 提交订单
      http
      .post("user/placeOrder",{
        "deskNum":"1",	//桌号
        "foodOrders": [	//菜品列表
          {
            "foodId":4,	//菜品id
            "foodNum":1	//菜品数量
          },
          {
            "foodId":3,
            "foodNum":1
          }
        ],
        "orderRemark":"123",	//备注
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
    cancelOrder:function(id){ //取消订单{commit},
      http
      .post("/user/cancleOrder",{
        "orderNum":`${id}`
      })
      .then((res) => {
        console.log("订单取消成功",res.data)
        // commit('getIndent',res.data.data)
      })
      .catch(err=> {
        console.log(err)
      })  
    },
    paymentOrder:function({commit},orderNum,name1,orderPrice,message){ //支付接口
      http
      .post("/alipay",{
        "out_trade_no":`${orderNum}`,	//订单编号
        "subject":`${name1}`,			//订单名称
        "total_amount":"30",		//金额
        "body":`${message}`			//描述
      })
      .then((res) => {
        console.log("支付接口",res.data)
        console.log("得到了返回的字符串",res.data.data);
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
