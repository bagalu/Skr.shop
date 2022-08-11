import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home'
},
{
  path: '/home',
  name: 'home',
  component: () => import('views/home/index.vue')
},
{
  path: "/login",
  name: "login",
  component: () => import('views/login/login.vue')
},
{
  path: '/shopcar',
  name: 'shopCar',
  component: () => import('views/shopCar/shopCar.vue')
},
{
  path: '/register',
  name: 'Register',
  component: () => import('views/register/index.vue')
},
{
  path: '/details/:id',
  name: 'Details',
  component: () => import('views/details/index.vue')

  },
  {
    path: '/event',
    name: 'Event',
    component: () => import('views/event/index.vue')
  },
  {
    path: '/exclusive',
    name: 'Exclusive',
    component: () => import('views/exclusive/exclusive.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('views/about/index.vue')
  },
  {
    path: '/global',
    name: 'global',
    component: () => import('views/global/global.vue')
  },
  {
    path: '/best',
    name: "Best",
    component: () => import('views/best/index')
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import('../views/payment/index.vue')
  }, {
    path: '/pop',
    name: "Pop",
    component: () => import('views/pop/index')
  },
  {
    path: '/secondary/:item',
    name: 'Secondary',
    component: () => import('views/secondary/index')
  },
  {
    path:'/search/product',
    name:"search",
    component:()=>import('views/search/search.vue')
  },
  {
    path:'/mypage',
    name:"mypage",
    component:()=>import('views/myself/myself.vue')
  },{
    path: '/inquiry',
    name: 'Inquiry',
    component: () => import('views/inquiry/inquiry.vue')
  },
  {
    path: '/partner',
    name: 'Partner',
    component: () => import('views/partner/partner.vue')
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('views/terms/terms.vue')
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('views/privacy/privacy.vue')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('views/service/service.vue')
  },
  {
    path: '/offters',
    name: 'Offters',
    component: () => import('views/offters/offters.vue')
  },
]

const router = new VueRouter({
  routes
})


export default router