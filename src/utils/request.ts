import axios from 'axios'

interface responseStatus {
  readonly status: number
  data: any
  statusText: string
}
interface responseCode {
  readonly code: number
  data: any
  msg: string
}

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VITE_BASE_URL,
  timeout: 6000, // 请求超时时间
})

// 异常拦截处理器
const errorHandler = (error: any) => {
  if (error.response) {
    const data = error.response.data
    console.log('请求错误！', data)
  }
  return Promise.reject(error)
}

request.defaults.withCredentials = true

// 发送时
request.interceptors.request.use((config: any) => {
  return config
}, errorHandler)

// 响应时
request.interceptors.response.use((response: any) => response, errorHandler)

export default request
