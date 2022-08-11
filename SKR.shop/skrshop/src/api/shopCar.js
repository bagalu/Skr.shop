import request from '../utils/request.js'

// 获取购物车
export function getShopCar(data) {
    return request({
        url:'shopCar/getShopCar',
        method:'post',
        data:{
            ...data
        }
    })
}

// 删除购物车
export function delgoods(data){
    return request({
        url:"shopCar/deleteShopCar",
        method:'post',
        data:{
            ...data
        }
    })
}

// 商品数量更改
export function addshopCard(data){
    return request({
        url:"shopCar/addShopCar",
        method:'post',
        data:{
            ...data
        }
    })
}