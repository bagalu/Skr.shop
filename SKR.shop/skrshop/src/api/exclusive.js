import requert from 'utils/request.js'

export function getPic(data){
    return requert({
        url:'type/getImg',
        method:'post',
        data:{
            ...data
        }
    })
}
export function getlittlePic(data){
    return requert({
        url:'type/getImg',
        method:'post',
        data:{
            ...data
        }
    })
}

export function getmidPic(data){
    return requert({
        url:'type/getproduct',
        method:'post',
        data:{
            ...data
        }
    })
}
export function getthreePic(data){
    return requert({
        url:'type/getImg',
        method:'post',
        data:{
            ...data
        }
    })
}
export function getfourPic(data){
    return requert({
        url:'type/getImg',
        method:'post',
        data:{
            ...data
        }
    })
}



