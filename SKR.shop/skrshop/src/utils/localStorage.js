const Tokenkey = 'vue_ShopCarAll'
const Price = 'vue_Shop_Price'
export function getShop() {
    return localStorage.getItem(Tokenkey)
}
export function getPrice() {
    return localStorage.getItem(Price)
}

export function setShop(token) {
    return localStorage.setItem(Tokenkey, token)
}
export function setPrice(token) {
    return localStorage.setItem(Price, token)
}

export function removeShop() {
    return localStorage.removeItem(Tokenkey)
}
export function removePrice() {
    return localStorage.removeItem(Price)
}