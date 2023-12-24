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
  constructor(private readonly _config: WxConfig) {
    if (!_config.appid) throw Error('config.appid is required')
    if (!_config.secret) throw Error('config.secret is required')
    this._config = Object.assign({}, _config)
    this.version = version
    this.base = new WxBaseApi(this._config)
    this.open = new WxOpenApi(this._config)
    this.menu = new WxMenuApi(this._config)
    this.draft = new WxDraftApi(this._config)
    this.publish = new WxPublishApi(this._config)
    this.user = new WxUserApi(this._config)
    this.msg = new WxMsgApi()
  }

  get config() {
    return this._config
  }

  /**
   * 更新SDK配置
   * @param config SDK配置
   */
  updateConfig(config: Partial<WxConfig>) {
    Object.assign(this._config, config)
  }

  /**
   * 帮助你验证微信服务器
   * @param body
   * @returns {string} 返回
   */
  checkServer(body: CheckServerBody) {
    if (!this._config.token) throw Error('config.token is required')
    const { signature, echostr, timestamp, nonce } = body
    const arr = [timestamp, nonce, this._config.token]
    arr.sort()
    const shaStr = sha1(arr.join(''))
    if (shaStr === signature) {
      return echostr
    } else {
      throw Error('check server failed')
    }
  }
}
