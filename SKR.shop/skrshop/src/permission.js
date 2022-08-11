// 在跳转成功前一定要经过beforeeach，他就是先进性拦截一下，判断一下用户，进行权限验证
import router from './router/index.js'
import store from './store/modules/user.js'


router.beforeEach((to, from, next) => {

    let token = store.user.token
    if (!token) {
        if (to.path == '/login') {
            next(`${to.path}?redirect=${from.path}`)

        } else {
            next('/login')
        }
    } else {
        if (to.path == '/login') {
            next('/')
        } else {
            next()
        }
    }


})