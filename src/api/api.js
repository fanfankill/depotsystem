
import service from './http'


export const login=data=>{
    return new Promise((resolve,reject)=>{
        service({
            url:'/login',
            method:'post',
            data,
        }).then((res)=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
       

}

