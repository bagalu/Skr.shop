import request from '@/utils/axios'

// 搜索接口
export function search(data) {
    return request({
        url: "store/search",
        method: "post",
        data: {
            ...data
        }
    })
}