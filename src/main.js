

import Vue from 'vue'
import App from './App.vue'
import router from './router'/*别忘记给router去注册 用this.$routers.push 名字这样取的*/
import store from './store/store'
import axios from 'axios'

//引入手写组件
import fanui from './components/fanfanui'

import './assets/style/iconfont.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
/**引入font awesome */
import 'font-awesome/css/font-awesome.min.css'


//引入全局message封装
import { messageBox } from './message'
Vue.mixin(messageBox)


import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({

  debug: true,

  connection: 'http://139.196.87.221:3002'

}))


axios.defaults.baseURL = 'http://139.196.87.221:3000'

Vue.prototype.$echarts = echarts

Vue.prototype.$axios = axios

Vue.use(ElementUI)

Vue.use(fanui)



//图表
Vue.prototype.$echarts = echarts

// 添加请求拦截器，在请求头中加token

Vue.config.productionTip = false

new Vue({

  render: h => h(App),
  router,
  store
}).$mount('#app')


