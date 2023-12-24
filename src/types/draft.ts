import { BaseResponse } from './response'

export interface DraftBody {
  articles: Draft[]
}

export interface UpdateDraftBody {
  /**
   * 要修改的图文消息的id
   */
  media_id: string
  /**
   * 要更新的文章在图文消息中的位置（多图文消息时，此字段才有意义），第一篇为0
   */
  index: number
  articles: Draft
}

export interface BatchGetDraftBody {
  /**
   * 从全部素材的该偏移位置开始返回，0表示从第一个素材返回
   */
  offset: number
  /**
   * 返回素材的数量，取值在1到20之间
   */
  count: number
  /**
   * 1 表示不返回 content 字段，0 表示正常返回，默认为 0
   */
  no_content: string
}

export interface Draft {
  /**
   * 图文消息的标题
   */
  title: string
  /**
   * 作者
   */
  author?: string
  /**
   * 图文消息的摘要，仅有单图文消息才有摘要，多图文此处为空。
   */
  digest?: string
  /**
   * 	图文消息的具体内容，支持HTML标签，必须少于2万字符，小于1M，且此处会去除JS。
   */
  content: string
  /**
   * 图文消息的原文地址，即点击“阅读原文”后的URL
   */
  content_source_url?: string
  /**
   * 图文消息的封面图片素材id（一定是永久MediaID）
   */
  thumb_media_id: string
  /**
   * Uint32 是否打开评论，0不打开(默认)，1打开
   */
  need_open_comment?: number
  /**
   * Uint32 是否粉丝才可评论，0所有人可评论(默认)，1粉丝才可评论
   */
  only_fans_can_comment?: number
}

export interface DraftBodyOrResponse {
  /**
   * 	草稿的media_id
   */
  media_id: string
}

export interface GetDraftCountResponse {
  /**
   * 草稿的总数
   */
  total_count: number
}

export interface GetDraftResponse extends Partial<BaseResponse> {
  news_item: (Draft & {
    /**
     * 草稿的临时链接
     */
    url: string
  })[]
}

export interface BatchGetDraftResponse {
  /**
   * 草稿素材的总数
   */
  total_count: number
  /**
   * 本次调用获取的素材的数量
   */
  item_count: number
  item: {
    /**
     * 图文消息的id
     */
    media_id: string
    content: {
      news_item: (Draft & {
        /**
         * 草稿的临时链接
         */
        url: string
      })[]
    }
    /**
     * 这篇图文消息素材的最后更新时间
     */
    update_time: string
  }[]
}
