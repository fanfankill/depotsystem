

import Vue from 'vue'
import VueRouter from 'vue-router'
const login = () => import('../views/login/login')
const main=()=>import('../components/main.vue')
const mainshow=()=>import('../views/messhow/messhow.vue')
const administrators=()=>import('../views/administrators/administrators.vue')
const parking=()=>import('../views/parking/parking.vue')
const carjoin=()=>import('../views/carjoin/carjoin.vue')


//安装插件
Vue.use(VueRouter)

//创建路由对象
const routes = [
 
{ 
   path: '*',
   redirect: '/login' 
},
    
{
  path:'/login',
  component:login
},
//主页面
{
  path:'/main',
  component:main,
  children:[
    //管理员展示页面
    {
      path:'/administrators',
      component:administrators
    },
    //数据展示页面
{
  path:'/mainshow',
  component:mainshow
},
    //车位管理
    {
      path:'/parking',
      component:parking
    },
    //进出车辆登记
     {
      path:'/carjoin',
      component:carjoin
    },
  ]
},


]

const router = new VueRouter({
  routes,
  mode: 'history'/*把网页的#号去掉*/
})



/**router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
 
    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
}); */

//导出对象
export default router