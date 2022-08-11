import request from 'utils/request.js'

export function getShopBySkuId(spuid) {
    return request ({
        url:'store/getsku',
        method:'post',
        data:{
            spu_id:spuid
        }
    })
}

export function getShopBySpuId(spuid) {
    return request ({
        url:'store/getspu',
        method:'post',
        data:{
            id:spuid
        }
    })
}