// 获取商品列表
import request from '@/utils/axios.js'
//  获取商品列表
export function getShopList(data){
    return request({
        url:"store/getShopList",
        method:'post',
        data:{
            ...data
        }
    })
}
// 删除商品
export function deleteSpu(data){
    return request({
        url:"store/deleteSpu",
        method:'post',
        data:{
            ...data
        } 
    })
}