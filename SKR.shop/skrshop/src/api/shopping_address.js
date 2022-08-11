import request from '../utils/request.js'

// 新增收货地址
// customer_id,name, tel,address
export function addAddress(data){
    return request({
        url:'user/addAddress',
        method:'post',
        data:{
            ...data
        }
    })
}
// 获取收货地址
// customer_id
export function getAddress(data){
    return request({
        url:'user/getAddress',
        method:'post',
        data:{
            ...data
        }
    })
}
// 修改默认地址
// id:地址id prime:是否默认地址
export function defaultAddress(data){
    return request({
        url:'user/defaultAddress',
        method:'post',
        data:{
            ...data
        }
    })
}
// 删除地址
// id:地址id
export function deleteAddress(data){
    return request({
        url:'user/deleteAddress',
        method:'post',
        data:{
            ...data
        }
    })
}

// 修改收货地址
export function updateAddress(data){
    return request({
        url:'user/updateAddress',
        method:'post',
        data:{
            ...data
        }
    })
}