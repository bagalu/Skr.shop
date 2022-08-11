import instance from '../utils/request.js'

export function getlogin(data) {
    return instance({
        url: "/user/login",
        method: 'POST',
        data: {
            ...data
        }
    })
}