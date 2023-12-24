import { BaseResponse } from './response'

export interface GetTokenResponse extends Partial<BaseResponse> {
  /**
   * 调用接口凭证
   */
  access_token?: string
  /**
   * 凭证有效时间，单位：秒
   */
  expires_in?: number
}

export interface GetApiDomainIPResponse extends Partial<BaseResponse> {
  /**
   * 微信服务器IP地址列表
   */
  ip_list?: string[]
}

export interface CallbackCheckResponse
  extends Partial<BaseResponse>,
    DNSResponse,
    PINGResponse {}

export interface DNSResponse {
  /**
   * dns结果列表
   */
  dns?: {
    /**
     * 解析出来的ip
     */
    ip: string
    /**
     * ip对应的运营商
     */
    real_operator: string
  }[]
}

export interface PINGResponse {
  /**
   * ping结果列表
   */
  ping?: {
    /**
     * 	ping的ip，执行命令为ping ip –c 1-w 1 -q
     */
    ip: string
    /**
     * ping的源头的运营商，由请求中的check_operator控制
     */
    from_operator: string
    /**
     * ping的丢包率，0%表示无丢包，100%表示全部丢包。因为目前仅发送一个ping包，因此取值仅有0%或者100%两种可能。
     */
    package_loss: string
    /**
     * ping的耗时，取ping结果的avg耗时。
     */
    time: string
  }[]
}

export interface CallbackCheckBody {
  /**
   * 执行的检测动作，允许的值：dns（做域名解析）、ping（做ping检测）、all（dns和ping都做）
   */
  action: 'all' | 'ping' | 'dns'
  /**
   * 指定平台从某个运营商进行检测，允许的值：CHINANET（电信出口）、UNICOM（联通出口）、CAP（腾讯自建出口）、DEFAULT（根据ip来选择运营商）
   */
  check_operator: 'DEFAULT' | 'CHINANET' | 'UNICOM' | 'CAP'
}
