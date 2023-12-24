export interface WxConfig {
  /**
   * 微信公众号appid
   */
  appid: string
  /**
   * 微信公众号appsecret
   */
  secret: string
  /**
   * 微信公众号的接口调用凭证
   */
  access_token?: string
  /**
   * 微信公众号后台配置的token，用作生成签名
   */
  token?: string
}

export interface CheckServerBody {
  /**
   * 微信服务器返回的微信加密签名，signature结合了开发者填写的token参数和请求中的timestamp参数、nonce参数。
   */
  signature: string
  /**
   * 微信服务器返回的随机字符串
   */
  echostr: string
  /**
   * 微信服务器返回的时间戳
   */
  timestamp: string
  /**
   * 微信服务器返回的随机数
   */
  nonce: string
}
