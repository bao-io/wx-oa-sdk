import { MenuBody, QueryMenuResponse } from './types/menu'
import { BaseResponse } from './types/response'
import http from './request'

export class WxMenuApi {
  /**
   * 创建菜单接口
   * @param {MenuBody} body 请求体
   * @returns {BaseResponse}
   */
  createMenu(body: MenuBody) {
    return http.post<BaseResponse>(`/cgi-bin/menu/create?access_token`, body)
  }

  /**
   * 查询菜单接口
   * @returns {QueryMenuResponse}
   */
  getMenu() {
    return http.get<QueryMenuResponse>(
      `/cgi-bin/get_current_selfmenu_info?access_token`
    )
  }

  /**
   * 删除菜单接口
   * @returns {BaseResponse}
   */
  deleteMenu() {
    return http.get<BaseResponse>(`/cgi-bin/menu/delete?access_token`)
  }
}
