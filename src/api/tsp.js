import request from '@/utils/request'


export function tsp(data) {
    // console.log('params', params)
    return request({
        url: '/tsp',
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: data
    })
}