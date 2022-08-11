import requert from 'utils/request.js'

export function getSwiperList(){
    return requert({
        url:'/type/getSwiper',
        method:'post'
    })
}