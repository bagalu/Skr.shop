import request from '@/utils/axios'

// 获取订单列表
export function getOrder(data){
    return request({
        url:'order/getOrder',
        method:'post',
        data:{
            ...data
        }
    })
}

// 删除订单
export function deleteOrder(data){
    return request({
        url:'order/deleteOrder',
        method:'post',
        data:{
            ...data
        }
    })
}
// 订单详情
export function getOrderDetail(data){
    return request({
        url:'order/getOrderDetail',
        method:'post',
        data:{
            ...data
        }
    })
}