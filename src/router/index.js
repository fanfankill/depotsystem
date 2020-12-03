

import Vue from 'vue'
import VueRouter from 'vue-router'
const main_view=()=>import('../components/main_view/main_view')
const Home=()=>import('../views/home/home')
const Catergory=()=>import('../views/catergory/catergory')

const Banner=()=>import('../components/lunbo/lunbo')
const Config=()=>import('../views/config/config')
const Application=()=>import('../views/application/application')
const Banner2=()=>import('../components/lunbo/lunbo2')
const Login=()=>import('../components/login/login')
const Orders=()=> import('../components/orders/orders')


//安装插件
 Vue.use(VueRouter)

 //创建路由对象
 const routes=[
     {
         path:'/',
         redirect:'/login',
     },
     {
         path:'/main',
         component:main_view,
         children:[
            {
                path:'/',
                redirect:'/home',

            },

            {
                path:'/home',
                component:Home,
            },
            {
                path:'/orders',
                component:Orders,
            },

            {
                path:'/catergory',
                component:Catergory,
                children:[
                    {
                        path:'/banner',
                        component:Banner,
                    },
                ]
            },
            
            {
                path:'/config',
                name:'Config',
                component:Config,
                children:[
                 
                ]
            },

            {
                path:'/application',
                name:'Application',
                component:Application,
            },
            {
                path:'/banner2',
                name:'Banner2',
                component:Banner2,
            },
           

         ]
     },
     
     {
        path:'/login',
        component:Login,
    },
   
   

   
 
   
 ]

 const router=new VueRouter({
     routes,
     mode:'history'/*把网页的#号去掉*/
 })

 /*全局前置守卫 判断用户是否登录 */
 router.beforeEach((to, from, next) => {

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
  
  });

 //导出对象
 export default router