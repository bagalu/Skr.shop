import request from "@/utils/axios";

export function login (data){
    return request({
        url:'/store/login',
        method:'post',
        data:{
            ...data,
        }
    })
}
