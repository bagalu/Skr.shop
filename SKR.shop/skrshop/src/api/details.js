import requert from 'utils/request.js'

export function addShopCar(shopinfo) {
    return requert({
        url: '/shopcar/addShopCar',
        method: 'post',
        data: {
            customer_id: shopinfo.customer_id,
            num: shopinfo.num,
            params: shopinfo.params,
            sku_id: shopinfo.sku_id
        }
    })
}

export function getTypeTwoList(name, series) {
    return requert({
        url: '/wares/getSpu',
        method: 'post',
        data: {
            name,
            series
        }
    })
}
