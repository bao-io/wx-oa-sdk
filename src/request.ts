import axios, { AxiosRequestConfig } from 'axios'
import config from './config'

const http = axios.create({
  baseURL: 'https://api.weixin.qq.com'
})

http.interceptors.request.use(async req => {
  const url = new URL(`${req.baseURL}${req.url}`)
  if (url.searchParams.has('access_token')) {
    if (config.access_token) {
      url.searchParams.set(
        'access_token',
        typeof config.access_token == 'string'
          ? config.access_token
          : await config.access_token()
      )
      req.url = url.toString()
    } else {
      return Promise.reject(new Error('config.access_token is required'))
    }
  }
  return req
})

http.interceptors.response.use(res => res.data)

export default {
  get: <T = any, D = any>(url: string, config?: AxiosRequestConfig<D>) => {
    return http.get<T, T>(url, config)
  },
  post: <T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ) => {
    return http.post<T, T, D>(url, data, config)
  },
  put: <T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ) => {
    return http.put<T, T, D>(url, data, config)
  },
  delete: <T = any, D = any>(url: string, config?: AxiosRequestConfig<D>) => {
    return http.delete<T, T>(url, config)
  }
}
