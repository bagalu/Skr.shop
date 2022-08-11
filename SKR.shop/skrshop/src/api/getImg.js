import request from '../utils/request'

export function getImg(data){
    return request({
        url:'type/getImg',
        method:'post',
        data:{
            ...data
        }
    })
}