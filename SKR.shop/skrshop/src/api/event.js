import request from '@/utils/request'

export function titleRequest(data){
    return request({
        url:'/type/getParentName',
        method:'post',
        data:{
            ...data
        }
    })
}

export function titleItem(data){
    return request({
        url:'/type/getImg',
        method:'post',
        data:{
            ...data
        }
    })
}
// export function clothingitem(data){
//     return request({
//         url:'/type/getImg',
//         method:'post',
//         data:{
//             ...data
//         }
//     })
// }
// export function accessoriesitme(data){
//     return request({
//         url:'/type/getImg',
//         method:'post',
//         data:{
//             ...data
//         }
//     })
// }