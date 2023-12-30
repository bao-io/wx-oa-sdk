import { WxConfig } from './types'
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
import { WxRequest } from './request'

export class WxDraftApi extends WxRequest {
  constructor(config: WxConfig) {
    super(config)
  }

  /**
   * 新建草稿
   * @param {DraftBody} body 请求体
   * @returns {DraftBodyOrResponse}
   */
  addDraft(body: DraftBody) {
    return this.AxiosPost<DraftBodyOrResponse>(
      `/cgi-bin/draft/add?access_token`,
      body
    )
  }

  /**
   * 获取草稿
   * @param {DraftBodyOrResponse} body
   * @returns {GetDraftResponse}
   */
  getDraft(body: DraftBodyOrResponse) {
    return this.AxiosPost<GetDraftResponse>(
      `/cgi-bin/draft/get?access_token`,
      body
    )
  }

  /**
   * 删除草稿
   * @param {DraftBodyOrResponse} body 请求体
   * @returns {BaseResponse}
   */
  deleteDraft(body: DraftBodyOrResponse) {
    return this.AxiosPost<BaseResponse>(
      `/cgi-bin/draft/delete?access_token`,
      body
    )
  }

  /**
   * 修改草稿
   * @param {UpdateDraftBody} body 请求体
   * @returns {BaseResponse}
   */
  updateDraft(body: UpdateDraftBody) {
    return this.AxiosPost<BaseResponse>(
      `/cgi-bin/draft/update?access_token`,
      body
    )
  }

  /**
   * 获取草稿总数
   * @returns {GetDraftCountResponse}
   */
  count() {
    return this.AxiosGet<GetDraftCountResponse>(
      `/cgi-bin/draft/count?access_token`
    )
  }

  /**
   * 获取草稿列表
   * @param {BatchGetDraftBody} body 请求体
   * @returns {BatchGetDraftResponse}
   */
  batchGetDraft(body: BatchGetDraftBody) {
    return this.AxiosPost<BatchGetDraftResponse>(
      `/cgi-bin/draft/batchget?access_token`,
      body
    )
  }
}
