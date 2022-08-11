import http from '@/utils/request'

export function register(data){
    return http({
        url:'/user/register',
        method:'POST',
        data:{
            ...data
        }
    })
}

export function SendverificationCode (data){
    return http({
        url:'/user/getMessage',
        method:'post',
        data:{
            ...data
        }
    })
}