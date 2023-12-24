import axios, { AxiosRequestConfig } from 'axios'

const http = axios.create({
  baseURL: 'https://api.weixin.qq.com'
})

http.interceptors.request.use(res => {
  const url = new URL(`${res.baseURL}${res.url}`)
  if (
    url.searchParams.has('access_token') &&
    url.searchParams.get('access_token') === 'undefined'
  ) {
    return Promise.reject('access_token is required')
  }
  return res
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
