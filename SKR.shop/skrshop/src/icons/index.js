import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
// 自动加载svg中所有的图标
// context返回一个指定目录的加载方法,是否要递归,匹配的后缀名
const req = require.context('./svg', false, /\.svg$/) // webpack方法
// keys() 返回指定上下文中所有匹配文件名称
req.keys().forEach(item => req(item)) // 遍历所有文件名并require自动加载

// 注册svg-icon组件
Vue.component('SvgIcon', SvgIcon)

export default req