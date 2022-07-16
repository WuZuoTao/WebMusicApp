import request from '@/utils/request'

//  轮播图API
export function carousel(data,options = {}){
    return request({
        url:'/banner',
        method: 'GET',
        data: data,
        ...options
    })
}

// 推荐歌单API
export function playlist(data,options = {}){
    return request({
        url:'/personalized',
        method:'GET',
        data:data,
        ...options
    })
}

// 独家放送API

export function exclusive(data,options = {}){
    return request({
        url:'/personalized/privatecontent',
        method:'GET',
        data:data,
        ...options
    })
}

// 最新音乐API
export function newmusic(data,options = {}){
    return request({
        url:'/personalized/newsong',
        method:'GET',
        data:data,
        ...options
    })
}