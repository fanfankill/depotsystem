
import axios from 'axios'
import { Loading } from 'element-ui';

const service = axios.create({
    baseURL: 'http://139.196.87.221:3000',
    timeout: 5000,
 
})

//axios拦截器
let loadingInstance

service.interceptors.request.use(config => {

    console.log(config)
    //这里可以设置那个请求加载时的图片
     loadingInstance= Loading.service({ fullscreen: true,text:'内容加载中' });
    //要把config放行     
    return config;
}, err => {
    loadingInstance.close();
    console.log(err);
    Promise.reject(err)
})

/*响应拦截 */
service.interceptors.response.use(response => {
    console.log('响应拦截器'+response)
    
    loadingInstance.close();
    return response
    
}, err => {
    console.log(err)
    loadingInstance.close();
    return Promise.reject(err)

})

export default service
