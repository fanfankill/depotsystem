

import Vue from 'vue'
import VueRouter from 'vue-router'
const login = () => import('../views/login/login')
const register = () => import('../views/register/register')
const main=()=>import('../components/main.vue')
const mainshow=()=>import('../views/mainshow/mainshow.vue')
const administrators=()=>import('../views/administrators/administrators.vue')
const parking=()=>import('../views/parking/parking.vue')
const carjoin=()=>import('../views/carjoin/carjoin.vue')
const carjoincontrol=()=>import('../views/carjoincontrol/carjoincontrol')
const carpeople=()=>import('../views/carpeople/carpeople')
const position=()=>import('../views/position/position')
const allchat=()=>import('../views/allchat/allchat')
//ui组件展示页面
const mycomponents =()=>import('../views/justforcom/showcompent')
//btn
const componentbtn=()=>import ('../views/justforcom/compentchildren/btn')
//input
const componentinput=()=>import('../views/justforcom/compentchildren/input')

//安装插件
Vue.use(VueRouter)

//创建路由对象
const routes = [
 //登录
{ 
   path: '*',
   redirect: '/login' 
},
//登录面
{
  path:'/login',
  component:login
},

//ui组件页面
{
  path:'/showcompent',
  component:mycomponents,
  meta: {
    keepAlive: false,   //是否缓存（缓存后不刷新）
    needtoken:false      //权限路由
},
children:[
  {
    path:'/showcompent/btn',
    component:componentbtn,
    meta: {
      keepAlive: false,   //是否缓存（缓存后不刷新）
      needtoken:false      //权限路由
  }
  },

  {
    path:'/showcompent/input',
    component:componentinput,
    meta: {
      keepAlive: false,   //是否缓存（缓存后不刷新）
      needtoken:false      //权限路由
  }
  },
  



]

},

{
  path:'/register',
  component:register
},
//主页面
{
  path:'/main',
  component:main,
  children:[
    //管理员展示页面
    {
      path:'/administrators',
      component:administrators,
      meta: {
        keepAlive: false,   //是否缓存（缓存后不刷新）
        needtoken:true      //权限路由
    }
    },
    //数据展示页面
{
  path:'/mainshow',
  component:mainshow,
  meta: {
    keepAlive: false,   //是否缓存（缓存后不刷新）
    needtoken:true
}
},
    //车位管理
    {
      path:'/parking',
      component:parking,
      meta: {
        keepAlive: false,   //是否缓存（缓存后不刷新）
        needtoken:true
    }
    },
      //区域管理
      {
        path:'/position',
        component:position,
        meta: {
          keepAlive: false,   //是否缓存（缓存后不刷新）
          needtoken:true
      }
      },
    //进出车辆登记
     {
      path:'/carjoin',
      component:carjoin,
      meta: {
        keepAlive: false,   //是否缓存（缓存后不刷新）
        needtoken:true
    }
    },
       //进出车辆管理页面
       {
        path:'/carjoincontrol',
        component:  carjoincontrol,
        meta: {
          keepAlive: false,   //是否缓存（缓存后不刷新）
          needtoken:true
      }
      },
      //车主信息登记和固定车位续费
      {
        path:'/carpeople',
        component:  carpeople,
        meta: {
          keepAlive: false,   //是否缓存（缓存后不刷新）
          needtoken:true
      }
      },
      //群聊
      {
        path:'/allchat',
        name:'allchat',
        component:  allchat,
        meta: {
          keepAlive: true,   //是否缓存（缓存后不刷新）
          needtoken:false
      }
        
      },
      
  
  ]
},


]

const router = new VueRouter({
  routes
})


//未登录不允许访问
router.beforeEach((to, from, next) => {


  let token = sessionStorage.getItem('adminid')
  if (token) {
   
    if (to.path === '/login') {
      next();
    } else {
      next();
    }
  } else {
    if (to.path !== '/login'&&to.path!=='/register'&&to.meta.needtoken==true) {
      
      next({ path: '/login' });
    } else {
      next();
    }
  }
}
); 

//导出对象
export default router