import { WxConfig } from './types'
import http from './request'
import { BaseResponse } from './types/response'
import {
  BackUserBody,
  BatchTagBody,
  BatchUserInfoBody,
  CreateTagBody,
  CreateTagResponse,
  DeleteTagBody,
  GetBatchUserInfoResponse,
  GetTagByOpenIdBody,
  GetTagByOpenIdResponse,
  GetTagsResponse,
  GetUserBackListBody,
  GetUserByTagBody,
  GetUserByTagResponse,
  GetUserInfoResponse,
  GetUserListResponse,
  UpdateRemarkBody,
  UpdateTagBody
} from './types/user'

export class WxUserApi {
  tag: WxUserTagApi
  constructor(private config: WxConfig) {
    this.tag = new WxUserTagApi(config)
  }

  /**
   * 设置用户备注名
   * @param {UpdateRemarkBody} body 请求体
   * @returns {BaseResponse}
   */
  updateRemark(body: UpdateRemarkBody) {
    return http.post<BaseResponse>(
      `/cgi-bin/user/info/updateremark?access_token=${this.config.access_token}`,
      body
    )
  }

  /**
   * 获取用户基本信息(UnionID机制)
   * @param {string} openid 普通用户的标识，对当前公众号唯一
   * @param {string} lang 返回国家地区语言版本，zh_CN 简体，zh_TW 繁体，en 英语
   * @returns {GetUserInfoResponse}
   */
  info(openid: string, lang: 'zh_CN' | 'zh_TW' | 'en' = 'zh_CN') {
    return http.get<GetUserInfoResponse>(
      `/cgi-bin/user/info?access_token=${this.config.access_token}&openid=${openid}&lang=${lang}`
    )
  }

  /**
   * 批量获取用户基本信息
   * @param {BatchUserInfoBody} body 请求体
   * @returns {GetBatchUserInfoResponse}
   */
  batchInfo(body: BatchUserInfoBody) {
    return http.post<GetBatchUserInfoResponse>(
      `/cgi-bin/user/info/batchget?access_token=${this.config.access_token}`,
      body
    )
  }

  /**
   * 获取用户列表
   * @param {string} next_openid 第一个拉取的OPENID，不填默认从头开始拉取
   * @returns {GetUserListResponse}
   */
  getUserList(next_openid = '') {
    return http.get<GetUserListResponse>(
      `/cgi-bin/user/get?access_token=${this.config.access_token}&next_openid=${next_openid}`
    )
  }

  /**
   * 获取公众号的黑名单列表
   * @param {GetUserBackListBody} body 请求体
   * @returns {GetUserListResponse}
   */
  getUserBackList(body: GetUserBackListBody) {
    return http.post<GetUserListResponse>(
      `/cgi-bin/tags/members/getblacklist?access_token=${this.config.access_token}`,
      body
    )
  }

  /**
   * 拉黑用户
   * @param {BackUserBody} body 请求体
   * @returns {BaseResponse}
   */
  batchBackUser(body: BackUserBody) {
    return http.post<BaseResponse>(
      `/cgi-bin/tags/members/batchblacklist?access_token=${this.config.access_token}`,
      body
    )
  }

  /**
   * 取消拉黑用户
   * @param {BackUserBody} body 请求体
   * @returns {BaseResponse}
   */
  batchUnBackUser(body: BackUserBody) {
    return http.post<BaseResponse>(
      `/cgi-bin/tags/members/batchunblacklist?access_token=${this.config.access_token}`,
      body
    )
  }
}

class WxUserTagApi {
  constructor(private config: WxConfig) {}

  /**
   * 创建标签
   * @param {CreateTagBody} body 请求体
   * @returns {CreateTagResponse}
   */
  create_tag(body: CreateTagBody) {
    return http.post<CreateTagResponse>(
      `/cgi-bin/tags/create?access_token=${this.config.access_token}`,
      body
    )
  }

  /**
   * 获取公众号已创建的标签
   * @returns {GetTagsResponse}
   */
  get_tags() {
    return http.get<GetTagsResponse>(
      `/cgi-bin/tags/get?access_token=${this.config.access_token}`
    )
  }

  /**
   * 编辑标签
   * @param {UpdateTagBody} body 请求体
   * @returns {BaseResponse}
   */
  update_tag(body: UpdateTagBody) {
    return http.post<BaseResponse>(
      `/cgi-bin/tags/update?access_token=${this.config.access_token}`,
      body
    )
  }

  /**
   * 删除标签
   * @param {DeleteTagBody} body 请求体
   * @returns {BaseResponse}
   */
  delete_tag(body: DeleteTagBody) {
    return http.post<BaseResponse>(
      `/cgi-bin/tags/delete?access_token=${this.config.access_token}`,
      body
    )
  }

  /**
   * 获取标签下粉丝列表
   * @param {GetUserByTagBody} body 请求体
   * @returns {GetUserByTagResponse}
   */
  getUserByTagId(body: GetUserByTagBody) {
    return http.post<GetUserByTagResponse>(
      `/cgi-bin/user/tag/get?access_token=${this.config.access_token}`,
      body
    )
  }

  /**
   * 批量为用户打标签
   * @param {BatchTagBody} body 请求体
   * @returns {BaseResponse}
   */
  batchTagging(body: BatchTagBody) {
    return http.post<BaseResponse>(
      `/cgi-bin/tags/members/batchtagging?access_token=${this.config.access_token}`,
      body
    )
  }

  /**
   * 批量为用户取消标签
   * @param {BatchTagBody} body 请求体
   * @returns {BaseResponse}
   */
  batchUnTagging(body: BatchTagBody) {
    return http.post<BaseResponse>(
      `/cgi-bin/tags/members/batchuntagging?access_token=${this.config.access_token}`,
      body
    )
  }

  /**
   * 获取用户身上的标签列表
   * @param {GetTagByOpenIdBody} body 请求体
   * @returns {GetTagByOpenIdResponse}
   */
  getTagByOpenId(body: GetTagByOpenIdBody) {
    return http.post<GetTagByOpenIdResponse>(
      `/cgi-bin/tags/getidlist?access_token=${this.config.access_token}`,
      body
    )
  }
}
