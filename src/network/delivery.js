

import {request} from './request'
export function getdeliverydata()
{
    return request({
        url:'/travel/user/findAll'
        
    })
}