import { WxConfig } from './types'
import http from './request'
import { BaseResponse } from './types/response'
import {
  DraftBodyOrResponse,
  DraftBody,
  GetDraftCountResponse,
  GetDraftResponse,
  UpdateDraftBody,
  BatchGetDraftBody,
  BatchGetDraftResponse
} from './types/draft'

export class WxDraftApi {
  constructor(private config: WxConfig) {}

  /**
   * 新建草稿
   * @param {DraftBody} body 请求体
   * @returns {DraftBodyOrResponse}
   */
  add(body: DraftBody) {
    return http.post<DraftBodyOrResponse>(
      `/cgi-bin/draft/add?access_token=${this.config.access_token}`,
      body
    )
  }

  /**
   * 获取草稿
   * @param {DraftBodyOrResponse} body
   * @returns {GetDraftResponse}
   */
  get(body: DraftBodyOrResponse) {
    return http.post<GetDraftResponse>(
      `/cgi-bin/draft/get?access_token=${this.config.access_token}`,
      body
    )
  }

  /**
   * 删除草稿
   * @param {DraftBodyOrResponse} body 请求体
   * @returns {BaseResponse}
   */
  delete(body: DraftBodyOrResponse) {
    return http.post<BaseResponse>(
      `/cgi-bin/draft/delete?access_token=${this.config.access_token}`,
      body
    )
  }

  /**
   * 修改草稿
   * @param {UpdateDraftBody} body 请求体
   * @returns {BaseResponse}
   */
  update(body: UpdateDraftBody) {
    return http.post<BaseResponse>(
      `/cgi-bin/draft/update?access_token=${this.config.access_token}`,
      body
    )
  }

  /**
   * 获取草稿总数
   * @returns {GetDraftCountResponse}
   */
  count() {
    return http.get<GetDraftCountResponse>(
      `/cgi-bin/draft/count?access_token=${this.config.access_token}`
    )
  }

  /**
   * 获取草稿列表
   * @param {BatchGetDraftBody} body 请求体
   * @returns {BatchGetDraftResponse}
   */
  batchget(body: BatchGetDraftBody) {
    return http.post<BatchGetDraftResponse>(
      `/cgi-bin/draft/batchget?access_token=${this.config.access_token}`,
      body
    )
  }
}
