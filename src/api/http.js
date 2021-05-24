
import axios from 'axios'
import qs from 'qs'
import { config } from 'vue/types/umd';



axios.defaults.baseURL='http://localhost:3000'

/**设置超时时间和是否携带凭证 */
axios.defaults.timeout=5000;
axios.defaults.withCredentials=true

/**设置请求传递数据的格式 */
axios.defaults.headers['Content-Type']='application/x-www-form-urlencoded';
axios.defaults.transformRequest=data=>qs.stringify(data);

//请求拦截器
axios.interceptors.request.use(()=>{
    let token=localStorage.getItem('token')
    token&&(config.headers.Authorzation=token);

    return config;
},error=>{
    return Promise.reject(error)
})


//响应拦截器
axios.interceptors.response.use(()=>{

        
},error=>{

})

axios.get(url,{
    params:{

    }
}).then(res=>{

}).catch(err=>{

})