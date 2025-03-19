import axios, {InternalAxiosRequestConfig, AxiosError,AxiosResponse} from 'axios';
import base from '@/config/index';
import { useCookies } from 'vue3-cookies';
import router from '@/router';

const baseURL = base.domain +  '/';
const { cookies } = useCookies();
// 创建一个 axios 实例
const service = axios.create({
    baseURL: baseURL, // 所有的请求地址前缀部分
    timeout: 60000, // 请求超时时间毫秒
    withCredentials: true, // 异步请求携带cookie
    headers: {
        // 设置后端需要的传参类型
        'Content-Type': 'application/json'
    },
})

// 添加请求拦截器
service.interceptors.request.use(
    function (config: InternalAxiosRequestConfig) {
        const csrfToken = cookies.get('XSRF-TOKEN');
        if (csrfToken) {
            config.headers['X-XSRF-TOKEN'] = csrfToken; // 设置请求头中的 CSRF 令牌
        }
        return config
    },
    function (error: Error) {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)

// 添加响应拦截器
service.interceptors.response.use(
    function (response: AxiosResponse) {
        //响应数据
        const dataAxios = response.data;
        const code = dataAxios.code
        if (code !== 0) {

            /** 鉴权失败 */
            if (code === 1001 || code === 1002) { //token 过期
              //返回登录页面 删除 token
            }
            return Promise.reject(dataAxios);
        } else {
            return dataAxios;
        }
    },
    function (error: typeof AxiosError) {
        // 超出范围的状态码都会触发该函数。

        return Promise.reject(error)
    }
)
service.interceptors.response.use(null, error => {
    const originalRequest = error.config;
    console.log(error.response.status);
    if (error.response.status === 404) {
        router.push('/page404')
    }else if (error.response.status === 500) {
        router.push('/page500')
    }else {
        router.push('/error')
    }


    return Promise.reject(error); // 对其他类型的错误不做处理，直接返回错误对象
});
export default service;
