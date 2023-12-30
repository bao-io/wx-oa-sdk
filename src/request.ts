import axios, { Axios, AxiosRequestConfig } from 'axios'
import { WxConfig } from './types'

export class WxRequest extends Axios {
  constructor(config: WxConfig) {
    super({
      baseURL: 'https://api.weixin.qq.com',
      ...Object.assign(axios.defaults, config.axiosConfig)
    })
    this.initConfig(config)
  }

  initConfig(config: WxConfig) {
    this.interceptors.request.use(async req => {
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
    this.interceptors.response.use(res => res.data)
  }

  AxiosGet<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>) {
    return this.get<T, T, D>(url, config)
  }

  AxiosPost<T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ) {
    return this.post<T, T, D>(url, data, config)
  }

  AxiosPut<T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ) {
    return this.put<T, T, D>(url, data, config)
  }

  AxiosDelete<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>) {
    return this.delete<T, T, D>(url, config)
  }
}
