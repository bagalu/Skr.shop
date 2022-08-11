import axios from 'axios'
import {
    Loading
} from 'element-ui';
const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 5000
})
let loadingInstance = null
instance.interceptors.request.use(config => {
    // console.log('请求拦截器',config);
    let options = {
        fullscreen: true,
    }
    loadingInstance = Loading.service(options);
    return config;
})

instance.interceptors.response.use(response => {
    // console.log('响应拦截器',response.data.code);
    setTimeout(() => {
        loadingInstance.close()
    },500)
    return response.data;
})

export default instance