

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
const mychat=()=>import('../views/allchat/mychat')
//ui组件展示页面
const mycomponents =()=>import('../views/justforcom/showcompent')
//btn
const componentbtn=()=>import ('../views/justforcom/compentchildren/btn')
//input
const componentinput=()=>import('../views/justforcom/compentchildren/input')
//message
const componentdialog=()=>import('../views/justforcom/compentchildren/dialog')
//alert
const componentalert=()=>import('../views/justforcom/compentchildren/alert')
//badge
const componentbadge=()=>import('../views/justforcom/compentchildren/badge')
//link
const componentlink=()=>import('../views/justforcom/compentchildren/link')
//image
const componentimage=()=>import('../views/justforcom/compentchildren/image')
//popver
const componentpopover=()=>import('../views/justforcom/compentchildren/popover')
//breadcrumb
const componentbreadcrumb=()=>import('../views/justforcom/compentchildren/breadcrumb')
//tag
const componenttag=()=>import('../views/justforcom/compentchildren/tag')


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
  component:login,
  meta:{
    index:1
  }
},

//ui组件页面
{
  path:'/showcompent',
  component:mycomponents,
  meta: {
    keepAlive: true,   //是否缓存（缓存后不刷新）
    needtoken:false      //权限路由
},
children:[
  { 
    path: '/showcompent',
    redirect: '/showcompent/btn' 
 },
  {
    path:'/showcompent/btn',
    component:componentbtn,
    meta: {
      keepAlive: true,   //是否缓存（缓存后不刷新）
      needtoken:false      //权限路由
  }
  },

  {
    path:'/showcompent/input',
    component:componentinput,
    meta: {
      keepAlive: true,   //是否缓存（缓存后不刷新）
      needtoken:false      //权限路由
  }
  },
  
  {
    path:'/showcompent/dialog',
    component:componentdialog,
    meta: {
      keepAlive: true,   //是否缓存（缓存后不刷新）
      needtoken:false      //权限路由
  }
  },

  {
    path:'/showcompent/alert',
    component:componentalert,
    meta: {
      keepAlive: true,   //是否缓存（缓存后不刷新）
      needtoken:false      //权限路由
  }
  },

  {
    path:'/showcompent/badge',
    component:componentbadge,
    meta: {
      keepAlive: true,   //是否缓存（缓存后不刷新）
      needtoken:false      //权限路由
  }
  },

  {
    path:'/showcompent/link',
    component:componentlink,
    meta: {
      keepAlive: true,   //是否缓存（缓存后不刷新）
      needtoken:false      //权限路由
  }
  },

  {
    path:'/showcompent/image',
    component:componentimage,
    meta: {
      keepAlive: true,   //是否缓存（缓存后不刷新）
      needtoken:false      //权限路由
  }
  },

  {
    path:'/showcompent/popover',
    component:componentpopover,
    meta: {
      keepAlive: true,   //是否缓存（缓存后不刷新）
      needtoken:false      //权限路由
  }
  },

  {
    path:'/showcompent/breadcrumb',
    component:componentbreadcrumb,
    meta: {
      keepAlive: true,   //是否缓存（缓存后不刷新）
      needtoken:false      //权限路由
  }
  }, {
    path:'/showcompent/tag',
    component:componenttag,
    meta: {
      keepAlive: true,   //是否缓存（缓存后不刷新）
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
        needtoken:true,
        index:2      //权限路由
    }
    },
    //数据展示页面
{
  path:'/mainshow',
  component:mainshow,
  meta: {
    keepAlive: false,   //是否缓存（缓存后不刷新）
    needtoken:true,
    index:3
}
},
    //车位管理
    {
      path:'/parking',
      component:parking,
      meta: {
        keepAlive: false,   //是否缓存（缓存后不刷新）
        needtoken:true,
        index:4
    },
    
    },
      //区域管理
      {
        path:'/position',
        component:position,
        meta: {
          keepAlive: false,   //是否缓存（缓存后不刷新）
          needtoken:true,
          index:5
      }
      },
    //进出车辆登记
     {
      path:'/carjoin',
      component:carjoin,
      meta: {
        keepAlive: false,   //是否缓存（缓存后不刷新）
        needtoken:true,
        index:6
    }
    },
       //进出车辆管理页面
       {
        path:'/carjoincontrol',
        component:  carjoincontrol,
        meta: {
          keepAlive: false,   //是否缓存（缓存后不刷新）
          needtoken:true,
          index:7
      }
      },
      //车主信息登记和固定车位续费
      {
        path:'/carpeople',
        component:  carpeople,
        meta: {
          keepAlive: false,   //是否缓存（缓存后不刷新）
          needtoken:true,
          index:8
      }
      },
      //群聊
      {
        path:'/allchat',
        name:'allchat',
        component:  allchat,
        meta: {
          keepAlive: true,   //是否缓存（缓存后不刷新）
          needtoken:false,
          index:9
      }
        
      },
       //群聊
       {
        path:'/mychat',
        name:'mychat',
        component:  mychat,
        meta: {
          keepAlive: true,   //是否缓存（缓存后不刷新）
          needtoken:false,
          index:10
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
      console.log('未登录');
      next({ path: '/login' });
    } else {
      next();
    }
  }
}
); 

//导出对象
export default router