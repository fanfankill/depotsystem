

import Vue from 'vue'
import App from './App.vue'
import router from  './router'/*别忘记给router去注册 */
import store from './store/store'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts' 

Vue.prototype.$echarts =echarts

Vue.prototype.$axios = axios

axios.defaults.baseURL='http://120.55.195.10:8080'

axios.defaults.headers['principal'] = `Bearer ${localStorage.getItem('Authorization')}`;

Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  
  render: h => h(App),
  router,
  store
}).$mount('#app')


