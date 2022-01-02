
import request from './http'


export function login(data){
    return request({
            url:'/login',
            method:'post',
            data,
        })
}

