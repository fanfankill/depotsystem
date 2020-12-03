
import axios from 'axios'
  
export function request(config){
    //创建axios实例
    const instance =axios.create({
        baseURL:'http://120.55.195.10:8080',
        timeout:5000,
    })
    //axios拦截器
    instance.interceptors.request.use(config=>{

        //这里可以设置那个请求加载时的图片
        if (localStorage.getItem('Authorization')) {

            config.headers.Authorization = localStorage.getItem('Authorization');
      
          }
      
        //要把config放行      
    },err=>{
        console.log(err);
    })
    
   /*响应拦截 */
   instance.interceptors.response.use(res=>{
   console.log(res)
   },err=>{
       console.log(err)
       
   })
   return instance(config)
}