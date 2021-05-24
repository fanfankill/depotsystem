

import Vue from 'vue'
import App from './App.vue'
import router from  './router'/*别忘记给router去注册 用this.$routers.push 名字这样取的*/
import store from './store/store'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts' 
/**引入font awesome */
import 'font-awesome/css/font-awesome.min.css'

axios.defaults.baseURL='http://localhost:3000'

Vue.prototype.$echarts =echarts

Vue.prototype.$axios = axios

Vue.use(ElementUI)

// 添加请求拦截器，在请求头中加token

Vue.config.productionTip = false

new Vue({
  
  render: h => h(App),
  router,
  store
}).$mount('#app')


