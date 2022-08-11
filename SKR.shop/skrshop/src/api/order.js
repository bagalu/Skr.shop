// 订单接口
import request from '@/utils/request'

// 添加订单
export function addOrder(data){
    return request({
        url:'/order/addOrder',
        method:"post",
        data:{
            ...data
        }
    })
}