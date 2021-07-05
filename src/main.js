

import Vue from 'vue'
import App from './App.vue'
import router from  './router'/*别忘记给router去注册 用this.$routers.push 名字这样取的*/
import store from './store/store'
import axios from 'axios'

import './assets/style/iconfont.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts' 
/**引入font awesome */
import 'font-awesome/css/font-awesome.min.css'





//引入全局message封装
import { messageBox } from './message'
Vue.mixin(messageBox)


axios.defaults.baseURL='http://localhost:3000'

Vue.prototype.$echarts =echarts

Vue.prototype.$axios = axios

Vue.use(ElementUI)

//图表
Vue.prototype.$echarts = echarts

// 添加请求拦截器，在请求头中加token

Vue.config.productionTip = false

new Vue({
  sockets: {
    connecting() {
      console.log('正在连接')
    },
    disconnect() {
      console.log("Socket 断开");
    },
    connect_failed() {
      console.log('连接失败')
    },
    connect() {
      console.log('socket connected')
    }
  },
  render: h => h(App),
  router,
  store
}).$mount('#app')


