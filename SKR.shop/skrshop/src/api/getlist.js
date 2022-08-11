import requert from 'utils/request.js'

export function getTypeOneList(parent_name) {
    return requert({
        url: '/type/getproduct',
        method: 'post',
        data: {
            parent_name
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

export function getParentOneList() {
    return requert({
        method: 'post',
        url: 'type/getParentName',
    })
}

export function getParentTwoList(parent_name) {
    return requert({
        method: 'post',
        url: "/wares/getSecond",
        data: {
            parent_name
        }
    })
}

export function search(name) {
    return requert({
        url: '/wares/getSpu',
        method: 'post',
        data: {
            name
        }
    })
}

export function getSecond(name) {
    return requert({
        url: '/type/getproduct',
        method: 'post',
        data: {
            name
        }
    })
}

export function shoelist(name) {
    return requert({
        url: '/type/getproduct',
        method: 'post',
        data: {
            ...name
        }
    })
}