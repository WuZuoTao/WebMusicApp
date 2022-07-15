import request from '@/utils/request'

export function carousel(data,options = {}){
    return request({
        url:'/banner',
        method: 'GET',
        data: data,
        ...options
    })
}
