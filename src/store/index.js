import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
    tap:[]
  },
  getters:{//计算数据

  },
  mutations: {//在这里定义修改数据的方案
    getFood(state,n){ //获取数据
      state.food = n
      console.log("获取了数据",state.food);
    },
    getTap(state,t){ //获取数据
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
    saveForm (context) {
      this.axios.post("/users/mindex",{context})
      .then((res) => {
        console.log("成功了",res.data)
        if(res.data.state == "200") {
          var token = res.data.token;
          sessionStorage.setItem("token", token)

          // 获取参数（未登录时想访问的路由）
          var url = this.$route.query.redirect;

          url = url ? url : "/Mindex"
          // 切换路由
          this.$router.replace(url)
        } else {
          console.log("登陆失败")
        }
      })
      .catch(err=> {
        console.log(err)
      })
 }

  },
  modules: {
  }
})
