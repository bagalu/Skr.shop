
import request from "../utils/request"
// 添加地址
export function addAddress(data) {
    return request({
        url:"/user/addAddress",
        method:"post",
        data,
    })
}

// 获取地址
export function getAddress(data) {
    return request({
        url:"/user/getAddress",
        method:"post",
        data,
    })
}

// 删除地址
export function deleteAddress(data) {
    return request({
        url:"/user/deleteAddress",
        method:"post",
        data,
    })
}

// 获取默认地址
export function getDefaultAddress(data) {
    return request({
        url:"/user/getDefaultAddress",
        method:"post",
        data,
    })
}

// 设置默认地址
export function defaultAddress(data) {
    return request({
        url:"/user/defaultAddress",
        method:"post",
        data,
    })
}

// 更新地址
export function updateAddress(data) {
    return request({
        url:"/user/updateAddress",
        method:"post",
        data,
    })
}
