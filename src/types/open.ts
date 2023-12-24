import { BaseResponse } from './response'

export interface GetQuotaResponse extends BaseResponse {
  /**
   * 	quota详情
   */
  quota: {
    /**
     * 当天该账号可调用该接口的次数
     */
    daily_limit: number
    /**
     * 当天已经调用的次数
     */
    used: number
    /**
     * 当天剩余调用次数
     */
    remain: number
  }
}

export interface GetRidResponse extends BaseResponse {
  /**
   * 该rid对应的请求详情
   */
  request: {
    /**
     * 发起请求的时间戳
     */
    invoke_time: number
    /**
     * 请求毫秒级耗时
     */
    cost_in_ms: number
    /**
     * 请求的URL参数
     */
    request_url: string
    /**
     * post请求的请求参数
     */
    request_body: string
    /**
     * 接口请求返回参数
     */
    response_body: string
    /**
     * 接口请求的客户端ip
     */
    client_ip: string
  }
}
