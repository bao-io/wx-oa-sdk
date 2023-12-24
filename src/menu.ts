import { WxConfig } from './types'
import http from './request'
import { MenuBody, QueryMenuResponse } from './types/menu'
import { BaseResponse } from './types/response'

export class WxMenuApi {
  constructor(private config: WxConfig) {}

  /**
   * 创建菜单接口
   * @param {MenuBody} body 请求体
   * @returns {BaseResponse}
   */
  create(body: MenuBody) {
    return http.post<BaseResponse>(
      `/cgi-bin/menu/create?access_token=${this.config.access_token}`,
      body
    )
  }

  /**
   * 查询菜单接口
   * @returns {QueryMenuResponse}
   */
  query() {
    return http.get<QueryMenuResponse>(
      `/cgi-bin/get_current_selfmenu_info?access_token=${this.config.access_token}`
    )
  }

  /**
   * 删除菜单接口
   * @returns {BaseResponse}
   */
  delete() {
    return http.delete<BaseResponse>(
      `/cgi-bin/menu/delete?access_token=${this.config.access_token}`
    )
  }
}
