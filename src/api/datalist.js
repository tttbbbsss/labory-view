import request from '@/utils/request'

// 分页查询用户接口
export function gettataList(data) {
    // console.log('params', params)
    return request({
        url: '/datamation',
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        params: data
    })
}

// 删除用户
export function userdelete(data) {
    // console.log('params', params)
    return request({
        url: `/datamation/${data}`,
        method: 'delete',
        // paramsSerializer:function(params) {
        //   return Qs.stringify(params, {arrayFormat: 'indices'})
        // }
        headers: {
            'Content-Type': 'application/json'
        },
    })
}

// 新增用户
export function useradd(data) {
    // console.log('params', params)
    return request({
        url: '/datamation',
        method: 'post',
        // paramsSerializer:function(params) {
        //   return Qs.stringify(params, {arrayFormat: 'indices'})
        // }
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    })
}
