import axios from "axios";
import type {  AxiosResponse } from 'axios'
import { RequestConfig ,Result} from "@/types/http";

const instance = axios.create({
//不写baseURL可以对多个进行配置代理，写了只能一个
  baseURL: '',
  timeout: 5000,
});

instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么,在此可以设置token
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response:AxiosResponse) {
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

const request = function (params:RequestConfig):Promise<Result>{
    return new Promise((reslove, reject) => {
        instance(params).then((res) => {
            reslove(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

export default request