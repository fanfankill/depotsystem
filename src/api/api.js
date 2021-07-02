import request from './http'

export function getallposition(url,method,data){
    return request({
        url,
        method,
        data
    })
       

}

