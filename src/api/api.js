import service from './http'

export const login=data=>{
    return service({
        url:'/login',
        method:'post',
        data
    })
       

}

