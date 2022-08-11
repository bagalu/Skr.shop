import request from '@/utils/request'

export function getSecondaryList(data){
    return request({
        url:'/wares/getSpu',
        method:"post",
        data:{
            ...data
        }
    })
}