import { BatchGetDraftBody, Draft } from './draft'
import { BaseResponse } from './response'

export interface PublishSubmitBody {
  /**
   * 要发布的草稿的media_id
   */
  media_id: string
}

export interface GetPublishBody {
  /**
   * 发布任务id
   */
  publish_id: string
}

export interface DeletePublishBody {
  /**
   * 成功发布时返回的 article_id
   */
  article_id: string
  /**
   * 要删除的文章在图文消息中的位置，第一篇编号为1，该字段不填或填0会删除全部文章
   */
  index?: number
}

export interface GetArticleBody {
  /**
   * 要获取的草稿的article_id
   */
  article_id: string
}

export type BatchGetArticleBody = BatchGetDraftBody

export interface Article extends Draft {
  /**
   * 图文消息的URL
   */
  url: string
  /**
   * 该图文是否被删除
   */
  is_deleted: boolean
  /**
   * 是否显示封面，0为false，即不显示，1为true，即显示(默认)
   */
  show_cover_pic?: boolean
}

export interface PublishSubmitResponse extends BaseResponse {
  /**
   * 	发布任务的id
   */
  publish_id?: string
  /**
   * 	消息的数据ID
   */
  msg_data_id?: string
}

export interface GetArticleByIdResponse extends Partial<BaseResponse> {
  news_item?: Article[]
}

export interface BatchGetArticleResponse {
  /**
   * 成功发布素材的总数
   */
  total_count: number
  /**
   * 本次调用获取的素材的数量
   */
  item_count: number
  item: {
    /**
     * 成功发布的图文消息id
     */
    article_id: string
    /**
     * 	图文消息的具体内容，支持HTML标签，必须少于2万字符，小于1M，且此处会去除JS。
     */
    content: { news_item: (Article & { url: string })[] }
    /**
     * 这篇图文消息素材的最后更新时间
     */
    update_time: string
  }[]
}

export interface PublishSuccessResponse {
  /**
   * 发布任务id
   */
  publish_id: string
  /**
   * 发布状态，0:成功, 1:发布中，2:原创失败, 3: 常规失败, 4:平台审核不通过, 5:成功后用户删除所有文章, 6: 成功后系统封禁所有文章
   */
  publish_status: 0
  /**当发布状态为0时（即成功）时，返回图文的 article_id，可用于“客服消息”场景 */
  article_id: string
  article_detail: {
    /**
     * 当发布状态为0时（即成功）时，返回文章数量
     */
    count: number
    item: {
      /**
       * 当发布状态为0时（即成功）时，返回文章对应的编号
       */
      idx: number
      /**
       * 当发布状态为0时（即成功）时，返回图文的永久链接
       */
      article_url: string
    }[]
  }
  /**
   * 当发布状态为2或4时，返回不通过的文章编号，第一篇为 1；其他发布状态则为空
   */
  fail_idx: number[]
}

export interface PublishPenddingResponse {
  /**
   * 发布任务id
   */
  publish_id: string
  /**
   * 发布状态，0:成功, 1:发布中，2:原创失败, 3: 常规失败, 4:平台审核不通过, 5:成功后用户删除所有文章, 6: 成功后系统封禁所有文章
   */
  publish_status: 1
  /**
   * 当发布状态为2或4时，返回不通过的文章编号，第一篇为 1；其他发布状态则为空
   */
  fail_idx: number[]
}

export interface PublishFailResponse {
  /**
   * 发布任务id
   */
  publish_id: string
  /**
   * 发布状态，0:成功, 1:发布中，2:原创失败, 3: 常规失败, 4:平台审核不通过, 5:成功后用户删除所有文章, 6: 成功后系统封禁所有文章
   */
  publish_status: 2
  /**
   * 当发布状态为2或4时，返回不通过的文章编号，第一篇为 1；其他发布状态则为空
   */
  fail_idx: number[]
}

export type GetPublishResponse =
  | PublishSuccessResponse
  | PublishFailResponse
  | PublishPenddingResponse
