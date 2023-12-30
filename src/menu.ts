import { WxRequest } from './request'
import { WxConfig } from './types'
import { MenuBody, QueryMenuResponse } from './types/menu'
import { BaseResponse } from './types/response'

export class WxMenuApi extends WxRequest {
  constructor(config: WxConfig) {
    super(config)
  }

  /**
   * 创建菜单接口
   * @param {MenuBody} body 请求体
   * @returns {BaseResponse}
   */
  createMenu(body: MenuBody) {
    return this.AxiosPost<BaseResponse>(
      `/cgi-bin/menu/create?access_token`,
      body
    )
  }

  /**
   * 查询菜单接口
   * @returns {QueryMenuResponse}
   */
  getMenu() {
    return this.AxiosGet<QueryMenuResponse>(
      `/cgi-bin/get_current_selfmenu_info?access_token`
    )
  }

  /**
   * 删除菜单接口
   * @returns {BaseResponse}
   */
  deleteMenu() {
    return this.AxiosDelete<BaseResponse>(`/cgi-bin/menu/delete?access_token`)
  }
}
