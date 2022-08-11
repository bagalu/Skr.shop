import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home/index.vue'),
      meta: { title: '首页', icon: '主页' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '商品', icon: '商品' },
    children: [
      {
        path: 'add',
        name: 'Add',
        component: () => import('@/views/shop/add/index'),
        meta: { title: '添加商品', icon: '添加' }
      },
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/shop/list/index'),
        meta: { title: '商品列表', icon: '列表模式' }
      },
      {
        path: 'classification',
        name: 'Classification',
        component: () => import('@/views/shop/classification/index'),
        meta: { title: '商品分类', icon: '商品' }
      },
      {
        path: 'management',
        name: 'Management',
        component: () => import('@/views/shop/management/index'),
        meta: { title: '品牌管理', icon: '13_pinpaiqu' }
      }
    ]
  },

  {
    path: '/marketing',
    component: Layout,
    redirect: '/marketing/coupons',
    name: 'Marketing',
    meta: { title: '营销', icon: 'ic_flag' },

    children: [
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('@/views/marketing/coupons/index'),
        meta: { title: '优惠券列表', icon: '优惠券' }

      },
      {
        path: 'secondskill',
        name: 'SecondsKill',
        component: () => import('@/views/marketing/SecondsKill/index'),
        meta: { title: '秒杀活动列表', icon: '掌上秒杀' }

      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order/list',
    name: 'Order',
    meta: { title: '订单', icon: '订单' },

    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/order/list/index'),
        meta: { title: '订单列表', icon: '列表模式' }

      },
      {
        path: 'returnshop',
        name: 'Returnshop',
        component: () => import('@/views/order/returnshop/index'),
        meta: { title: '退货申请处理', icon: '退货无忧' }

      }, {
        path: 'orderdetail',
        name: 'OrderDetail',
        component: () => { '@/views/order/orderDetail/index' },
        meta:{title:'订单详情'}
      }
    ]
  },

  {
    path: '/CustomerService',
    component: Layout,
    redirect: '/customerService',
    children: [
      {
        path: 'customerService',
        name: 'CustomerService',
        component: () => import('@/views/CustomerService/index'),
        meta: { title: '客服', icon: '客服' }

      },]
  },


  {
    path: '/ShopInformation',
    component: Layout,
    redirect: '/shopInformation',
    children: [
      {
        path: 'shopInformation',
        name: 'ShopInformation',
        component: () => import('@/views/ShopInformation/index.vue'),
        meta: { title: '店铺信息', icon: '店铺信息' }

      },]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
