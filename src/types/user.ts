import { BaseResponse } from './response'

export interface Tag {
  /**
   * 标签id，由微信分配
   */
  id: number
  /**
   * 标签名（30个字符以内）
   */
  name: string
}

export type User = SubscribeUser | UnSubscribeUser

export interface SubscribeUser {
  /**
   * 用户是否订阅该公众号标识，值为0时，代表此用户没有关注该公众号，拉取不到其余信息。
   */
  subscribe: 1
  /**
   * 用户的标识，对当前公众号唯一
   */
  openid: string
  /**
   * 用户的语言，简体中文为zh_CN
   */
  language: 'zh_CN' | 'zh_TW' | 'en'
  /**
   * 用户关注时间，为时间戳。如果用户曾多次关注，则取最后关注时间
   */
  subscribe_time: number
  /**
   * 只有在用户将公众号绑定到微信开放平台账号后，才会出现该字段。
   */
  unionid?: string
  /**
   * 公众号运营者对粉丝的备注，公众号运营者可在微信公众平台用户管理界面对粉丝添加备注
   */
  remark: string
  /**
   * 用户所在的分组ID（兼容旧的用户分组接口）
   */
  groupid: number
  /**
   * 用户被打上的标签ID列表
   */
  tagid_list: number[]
  /**
   * 返回用户关注的渠道来源，ADD_SCENE_SEARCH 公众号搜索，ADD_SCENE_ACCOUNT_MIGRATION 公众号迁移，ADD_SCENE_PROFILE_CARD 名片分享，ADD_SCENE_QR_CODE 扫描二维码，ADD_SCENE_PROFILE_LINK 图文页内名称点击，ADD_SCENE_PROFILE_ITEM 图文页右上角菜单，ADD_SCENE_PAID 支付后关注，ADD_SCENE_WECHAT_ADVERTISEMENT 微信广告，ADD_SCENE_REPRINT 他人转载 ,ADD_SCENE_LIVESTREAM 视频号直播，ADD_SCENE_CHANNELS 视频号 , ADD_SCENE_OTHERS 其他
   */
  subscribe_scene:
    | 'ADD_SCENE_SEARCH'
    | 'ADD_SCENE_ACCOUNT_MIGRATION'
    | 'ADD_SCENE_PROFILE_CARD'
    | 'ADD_SCENE_QR_CODE'
    | 'ADD_SCENE_PROFILE_LINK'
    | 'ADD_SCENE_PROFILE_ITEM'
    | 'ADD_SCENE_PAID'
    | 'ADD_SCENE_WECHAT_ADVERTISEMENT'
    | 'ADD_SCENE_REPRINT'
    | 'ADD_SCENE_LIVESTREAM'
    | 'ADD_SCENE_CHANNELS'
    | 'ADD_SCENE_OTHERS'
  /**
   * 二维码扫码场景（开发者自定义）
   */
  qr_scene: number
  /**
   * 二维码扫码场景描述（开发者自定义）
   */
  qr_scene_str: string
}

export interface UnSubscribeUser {
  /**
   * 用户是否订阅该公众号标识，值为0时，代表此用户没有关注该公众号，拉取不到其余信息。
   */
  subscribe: 0
  /**
   * 用户的标识，对当前公众号唯一
   */
  openid: string
}

export interface TagResult {
  tag: Tag
}

export interface CreateTagBody {
  tag: Omit<Tag, 'id'>
}

export type UpdateTagBody = TagResult

export interface DeleteTagBody {
  tag: Omit<Tag, 'name'>
}

export interface GetUserByTagBody {
  tagid: Tag['id']
  /**
   * 第一个拉取的OPENID，不填默认从头开始拉取
   */
  next_openid?: string
}

export interface BatchTagBody {
  tagid: Tag['id']
  /**
   * 粉丝列表
   */
  openid_list: string[]
}

export interface GetTagByOpenIdBody {
  /**
   * 用户标识
   */
  openid: User['openid']
}

export interface UpdateRemarkBody {
  /**
   * 用户标识
   */
  openid: User['openid']
  /**
   * 新的备注名，长度必须小于30字节
   */
  remark: SubscribeUser['remark']
}

export interface BatchUserInfoBody {
  user_list: { openid: User['openid']; lang: SubscribeUser['language'] }[]
}

export interface GetUserBackListBody {
  /**
   * 当 begin_openid 为空时，默认从开头拉取
   */
  begin_openid?: string
}

export interface BackUserBody {
  /**
   * 需要拉入黑名单的用户的openid，一次拉黑最多允许20个
   */
  openid_list: string[]
}

export interface CreateTagResponse
  extends Partial<BaseResponse>,
    Partial<TagResult> {}

export interface GetTagsResponse {
  tags: (Tag & {
    count: number
  })[]
}

export interface GetUserByTagResponse extends Partial<BaseResponse> {
  /**
   * 拉取的OPENID个数，最大值为10000
   */
  count?: number
  /**
   * 	列表数据，OPENID的列表
   */
  data?: { openid: string[] }[]
  /**
   * 拉取列表的最后一个用户的OPENID
   */
  next_openid?: string
}

export interface GetTagByOpenIdResponse extends Partial<BaseResponse> {
  tagid_list?: number[]
}

export interface GetUserInfoResponse
  extends Partial<BaseResponse>,
    Partial<SubscribeUser> {}

export interface GetBatchUserInfoResponse extends Partial<BaseResponse> {
  user_info_list?: User[]
}

export interface GetUserListResponse
  extends Partial<BaseResponse>,
    Partial<{
      /**
       * 关注该公众账号的总用户数
       */
      total: number
      /**
       * 拉取的OPENID个数，最大值为10000
       */
      count: number
      /**
       * 	列表数据，OPENID的列表
       */
      data: {
        openid: string[]
      }
      /**
       * 拉取列表的最后一个用户的OPENID
       */
      next_openid: string
    }> {}
