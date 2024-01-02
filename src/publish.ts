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
import http from './request'

export class WxPublishApi {
  /**
   * 发布接口
   * @param {PublishSubmitBody} body 请求体
   * @returns {PublishSubmitResponse}
   */
  submitPublish(body: PublishSubmitBody) {
    return http.post<PublishSubmitResponse>(
      `/cgi-bin/freepublish/submit?access_token`,
      body
    )
  }

  /**
   * 发布状态轮询接口
   * @param {GetPublishBody} body 请求体
   * @returns {GetPublishResponse}
   */
  getPublish(body: GetPublishBody) {
    return http.post<GetPublishResponse>(
      `/cgi-bin/freepublish/get?access_token`,
      body
    )
  }

  /**
   * 删除发布
   * @param {DeletePublishBody} body 请求体
   * @returns {BaseResponse}
   */
  deletePublish(body: DeletePublishBody) {
    return http.post<BaseResponse>(
      `/cgi-bin/freepublish/delete?access_token`,
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
      `/cgi-bin/freepublish/getarticle?access_token`,
      body
    )
  }

  /**
   * 获取成功发布列表
   * @param {BatchGetArticleBody} body 请求体
   * @returns {GetArticleByIdResponse}
   */
  batchGetPublish(body: BatchGetArticleBody) {
    return http.post<GetArticleByIdResponse>(
      `/cgi-bin/freepublish/batchget?access_token`,
      body
    )
  }
}
