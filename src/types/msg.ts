export interface WxMsgSchema {
  /**
   * 接收方帐号（收到的OpenID）
   */
  ToUserName: string
  /**
   * 开发者微信号
   */
  FromUserName: string
  /**
   * 消息发送时间戳
   */
  CreateTime: number
  /**
   * 消息类型
   */
  MsgType: WxMsgType
  /**
   * MsgType为event时,Event事件的类型
   */
  Event?: WxEventType
  /**
   * 事件 KEY 值
   */
  EventKey?: any
  /**
   * 回复的消息内容
   */
  Content?: string
  /**
   * 通过素材管理中的接口上传多媒体文件，得到的id
   */
  MediaId?: string
  /**
   * 音乐标题
   */
  Title?: string
  /**
   * 音乐描述
   */
  Description?: string
  /**
   * 音乐链接
   */
  MusicURL?: string
  /**
   * 高质量音乐链接，WIFI环境优先使用该链接播放音乐
   */
  HQMusicUrl?: string
  /**
   * 缩略图的媒体id，通过素材管理中的接口上传多媒体文件，得到的id
   */
  ThumbMediaId?: string
  /**
   * 图文消息个数；当用户发送文本、图片、语音、视频、图文、地理位置这六种消息时，开发者只能回复1条图文消息；其余场景最多可回复8条图文消息
   */
  ArticleCount?: number
  /**
   * 图文消息信息，注意，如果图文数超过限制，则将只发限制内的条数
   */
  Articles?: string
  /**
   * 图片链接，支持JPG、PNG格式，较好的效果为大图360*200，小图200*200
   */
  PicUrl?: string
  /**
   * 点击图文消息跳转链接
   */
  Url?: string
}

export enum WxMsgType {
  TEXT = 'text',
  IMAGE = 'image',
  VOICE = 'voice',
  VIDEO = 'video',
  MUSIC = 'music',
  NEWS = 'news',
  EVENT = 'event'
}

export enum WxEventType {
  CLICK = 'CLICK',
  LOCATION = 'LOCATION',
  SCAN = 'SCAN',
  VIEW = 'VIEW',
  SUBSCRIBE = 'subscribe',
  UNSUBSCRIBE = 'unsubscribe'
}
