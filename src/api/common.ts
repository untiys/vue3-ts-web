import request from '@/utils/request'
import {Data} from '@/types/common' 

// get请求
function dict(url:string,params?:Data) {
   return request({url,method:'get',params})
}

// post请求
function dict2(url:string,data?:Data) {
   return request({url,method:'post',data})
}

// 统一导出
export {
   dict,
   dict2
}