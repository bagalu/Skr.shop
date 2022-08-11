import request from '@/utils/request'

// 跳转支付宝
export function payOrder(data){
    return request({
        url:'order/payOrder',
        method:'post',
        data:{
            ...data
        }
    })
}