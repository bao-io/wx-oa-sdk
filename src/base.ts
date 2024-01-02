import {
  CallbackCheckBody,
  CallbackCheckResponse,
  GetApiDomainIPResponse,
  GetTokenResponse
} from './types/base'
import config from './config'
import http from './request'

export class WxBaseApi {
  /**
   * 获取 Access token
   * @returns {GetTokenResponse}
   */
  getAccessToken() {
    return http.get<GetTokenResponse>(
      `/cgi-bin/token?grant_type=client_credential&appid=${config.appid}&secret=${config.secret}`
    )
  }

  /**
   * 获取稳定版接口调用凭据
   * @param {boolean} force_refresh 是否强制刷新
   * @returns {GetTokenResponse}
   */
  getStableAccessToken(force_refresh = false) {
    return http.post<GetTokenResponse>('/cgi-bin/stable_token', {
      grant_type: 'client_credential',
      appid: config.appid,
      secret: config.secret,
      force_refresh
    })
  }

  /**
   * 获取微信服务器IP地址
   * @returns {GetApiDomainIPResponse}
   */
  getApiDomainIP() {
    return http.get<GetApiDomainIPResponse>(
      '/cgi-bin/get_api_domain_ip?access_token'
    )
  }

  /**
   * 网络检测
   * @param {CallbackCheckBody} body 请求体
   * @returns {CallbackCheckResponse}
   */
  callbackCheck(body: CallbackCheckBody) {
    return http.post<CallbackCheckResponse>(
      '/cgi-bin/callback/check?access_token',
      body
    )
  }
}
