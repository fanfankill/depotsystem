
import axios from 'axios'

const service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
})

//axios拦截器
service.interceptors.request.use(config => {

    console.log('inter')
    //这里可以设置那个请求加载时的图片

    //要把config放行     
    return config;
}, err => {
    console.log(err);
    Promise.reject(err)
})

/*响应拦截 */
service.interceptors.response.use(response => {
    console.log(response)
    if(response.data.flag!=0)
    {
        this.messageBox(response.data.message,'success')
    }
}, err => {
    console.log(err)
    return Promise.reject(err)

})
export default service
