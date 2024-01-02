import { CheckServerBody, WxConfig } from './types'
import sha1 from 'sha1'
import { WxBaseApi } from './base'
import { WxMenuApi } from './menu'
import { WxOpenApi } from './open'
import { WxDraftApi } from './draft'
import { WxPublishApi } from './publish'
import { WxUserApi } from './user'
import { version } from '../package.json'
import { WxMsgApi } from './msg'
import config from './config'

export class WxSdk {
  /**
   * 基础接口
   */
  base: WxBaseApi
  /**
   * openApi管理
   */
  open: WxOpenApi
  /**
   * 自定义菜单管理
   */
  menu: WxMenuApi
  /**
   * 草稿箱管理
   */
  draft: WxDraftApi
  /**
   * 发布能力管理
   */
  publish: WxPublishApi
  /**
   * 用户管理
   */
  user: WxUserApi
  /**
   * 基础消息能力
   */
  msg: WxMsgApi
  /**
   * 版本号
   */
  readonly version: string
  constructor(_config: WxConfig) {
    if (!_config.appid) throw Error('config.appid is required')
    if (!_config.secret) throw Error('config.secret is required')
    this.version = version
    Object.assign(config, _config)
    this.base = new WxBaseApi()
    this.open = new WxOpenApi()
    this.menu = new WxMenuApi()
    this.draft = new WxDraftApi()
    this.publish = new WxPublishApi()
    this.user = new WxUserApi()
    this.msg = new WxMsgApi()
  }

  get config() {
    return config
  }

  /**
   * 更新配置
   * @param _config 配置
   */
  updateConfig(_config: Partial<WxConfig>) {
    Object.assign(config, _config)
  }

  /**
   * 帮助你验证微信服务器
   * @param body
   * @returns {string} 返回
   */
  checkServer(body: CheckServerBody) {
    if (!config.token) throw Error('config.token is required')
    const { signature, echostr, timestamp, nonce } = body
    const arr = [timestamp, nonce, config.token]
    arr.sort()
    const shaStr = sha1(arr.join(''))
    if (shaStr === signature) {
      return echostr
    } else {
      throw Error('check server failed')
    }
  }
}
