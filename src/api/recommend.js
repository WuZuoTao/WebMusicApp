import request from '@/utils/request'

export function carousel(data,options = {}){
    return request({
        url:'/banner',
        method: 'GET',
        data: data,
        ...options
    })
}

export function playlist(data,options = {}){
    console.log(data)
    return request({
        url:'/personalized',
        method:'GET',
        data:data,
        ...options
    })
}
