import { BaseResponse } from './types/response'
import { GetQuotaResponse, GetRidResponse } from './types/open'
import http from './request'
import config from './config'

export class WxOpenApi {
  /**
   * 清空api的调用quota
   * @returns {BaseResponse}
   */
  clear_quota() {
    return http.post<BaseResponse>(`/cgi-bin/clear_quota?access_token`, {
      appid: config.appid
    })
  }

  /**
   * 查询openAPI调用quota
   * @param {string} cgi_path api的请求地址
   * @returns {GetQuotaResponse}
   */
  get_quota(cgi_path: string) {
    return http.post<GetQuotaResponse>(
      `/cgi-bin/openapi/quota/get?access_token`,
      {
        cgi_path
      }
    )
  }

  /**
   * 查询rid信息
   * @param {string} rid 调用接口报错返回的rid
   * @returns {GetRidResponse}
   */
  get_rid(rid: string) {
    return http.post<GetRidResponse>(`/cgi-bin/openapi/rid/get?access_token`, {
      rid
    })
  }

  /**
   * 使用AppSecret重置 API 调用次数
   * @returns {BaseResponse}
   */
  clearQuotaByAppSecret() {
    return http.post<BaseResponse>(`/cgi-bin/clear_quota/v2`, {
      appid: config.appid,
      appsecret: config.secret
    })
  }
}
