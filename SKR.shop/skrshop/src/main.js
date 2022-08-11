import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

// import './assets/scss/common.scss'
import SvgIcon from '@/components/SvgIcon/index.vue'// svg组件
Vue.component('svg-icon', SvgIcon)
import '@/icons/index.js'

Vue.config.productionTip = false;


Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h=>h(App)
}).$mount('#app')

