import { WxConfig } from './types'
import {
  CallbackCheckBody,
  CallbackCheckResponse,
  GetApiDomainIPResponse,
  GetTokenResponse
} from './types/base'
import { WxRequest } from './request'

export class WxBaseApi extends WxRequest {
  constructor(private config: WxConfig) {
    super(config)
  }

  /**
   * 获取 Access token
   * @returns {GetTokenResponse}
   */
  getAccessToken() {
    return this.AxiosGet<GetTokenResponse>(
      `/cgi-bin/token?grant_type=client_credential&appid=${this.config.appid}&secret=${this.config.secret}`
    )
  }

  /**
   * 获取稳定版接口调用凭据
   * @param {boolean} force_refresh 是否强制刷新
   * @returns {GetTokenResponse}
   */
  getStableAccessToken(force_refresh = false) {
    return this.AxiosPost<GetTokenResponse>('/cgi-bin/stable_token', {
      grant_type: 'client_credential',
      appid: this.config.appid,
      secret: this.config.secret,
      force_refresh
    })
  }

  /**
   * 获取微信服务器IP地址
   * @returns {GetApiDomainIPResponse}
   */
  getApiDomainIP() {
    return this.AxiosGet<GetApiDomainIPResponse>(
      '/cgi-bin/get_api_domain_ip?access_token'
    )
  }

  /**
   * 网络检测
   * @param {CallbackCheckBody} body 请求体
   * @returns {CallbackCheckResponse}
   */
  callbackCheck(body: CallbackCheckBody) {
    return this.AxiosPost<CallbackCheckResponse>(
      '/cgi-bin/callback/check?access_token',
      body
    )
  }
}
