import { WxConfig } from './types'
import http from './request'
import { BaseResponse } from './types/response'
import {
  BatchGetArticleBody,
  DeletePublishBody,
  GetArticleBody,
  GetArticleByIdResponse,
  GetPublishBody,
  PublishSubmitBody,
  PublishSubmitResponse,
  GetPublishResponse
} from './types/publish'

export class WxPublishApi {
  constructor(private config: WxConfig) {}

  /**
   * 发布接口
   * @param {PublishSubmitBody} body 请求体
   * @returns {PublishSubmitResponse}
   */
  submit(body: PublishSubmitBody) {
    return http.post<PublishSubmitResponse>(
      `/cgi-bin/freepublish/submit?access_token=${this.config.access_token}`,
      body
    )
  }

  /**
   * 发布状态轮询接口
   * @param {GetPublishBody} body 请求体
   * @returns {GetPublishResponse}
   */
  get(body: GetPublishBody) {
    return http.post<GetPublishResponse>(
      `/cgi-bin/freepublish/get?access_token=${this.config.access_token}`,
      body
    )
  }

  /**
   * 删除发布
   * @param {DeletePublishBody} body 请求体
   * @returns {BaseResponse}
   */
  delete(body: DeletePublishBody) {
    return http.post<BaseResponse>(
      `/cgi-bin/freepublish/delete?access_token=${this.config.access_token}`,
      body
    )
  }

  /**
   * 通过 article_id 获取已发布文章
   * @param {GetArticleBody} body 请求体
   * @returns {GetArticleByIdResponse}
   */
  getArticleByArticleId(body: GetArticleBody) {
    return http.post<GetArticleByIdResponse>(
      `/cgi-bin/freepublish/getarticle?access_token=${this.config.access_token}`,
      body
    )
  }

  /**
   * 获取成功发布列表
   * @param {BatchGetArticleBody} body 请求体
   * @returns {GetArticleByIdResponse}
   */
  batchget(body: BatchGetArticleBody) {
    return http.post<GetArticleByIdResponse>(
      `/cgi-bin/freepublish/batchget?access_token=${this.config.access_token}`,
      body
    )
  }
}
