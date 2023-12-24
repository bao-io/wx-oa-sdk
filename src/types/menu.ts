export interface MenuBody {
  /**
   * 一级菜单数组，个数应为1~3个
   */
  button: Item[]
}

export interface QueryMenuResponse {
  /**
   * 菜单是否开启，0代表未开启，1代表开启
   */
  is_menu_open: 1 | 0
  /**
   * 菜单信息
   */
  selfmenu_info: MenuBody
}

export type Item =
  | ViewMenuItem
  | ClickMenuItem
  | MiniprogramMenuItem
  | SubMenuItem
  | MediaMenuItem
  | ViewLimitedMenuItem
  | ArticleMenuItem
  | ArticleLimitedMenuItem

export interface SubMenuItem {
  /**
   * 菜单标题，不超过16个字节，子菜单不超过60个字节
   */
  name: string
  /**
   * 二级菜单数组，个数应为1~5个
   */
  sub_button: Item[]
}

export interface ViewMenuItem {
  /**
   * 菜单标题，不超过16个字节，子菜单不超过60个字节
   */
  name: string
  type: 'view'
  /**
   * 网页 链接，用户点击菜单可打开链接，不超过1024字节。 type为miniprogram时，不支持小程序的老版本客户端将打开本url。
   */
  url: string
}

export interface ClickMenuItem {
  /**
   * 菜单标题，不超过16个字节，子菜单不超过60个字节
   */
  name: string
  type: 'click'
  /**
   * 菜单KEY值，用于消息接口推送，不超过128字节
   */
  key: string
}

export interface MiniprogramMenuItem {
  /**
   * 菜单标题，不超过16个字节，子菜单不超过60个字节
   */
  name: string
  type: 'miniprogram'
  /**
   * 网页 链接，用户点击菜单可打开链接，不超过1024字节。 type为miniprogram时，不支持小程序的老版本客户端将打开本url。
   */
  url: string
  /**
   * 小程序的appid（仅认证公众号可配置）
   */
  appid: string
  /**
   * 	小程序的页面路径
   */
  pagepath: string
}

export interface MediaMenuItem {
  /**
   * 菜单标题，不超过16个字节，子菜单不超过60个字节
   */
  name: string
  type: 'media_id'
  /**
   * 调用新增永久素材接口返回的合法media_id
   */
  media_id: string
}

export interface ViewLimitedMenuItem {
  /**
   * 菜单标题，不超过16个字节，子菜单不超过60个字节
   */
  name: string
  type: 'view_limited'
  /**
   * 调用新增永久素材接口返回的合法media_id
   */
  media_id: string
}

export interface ArticleMenuItem {
  /**
   * 菜单标题，不超过16个字节，子菜单不超过60个字节
   */
  name: string
  type: 'article_id'
  /**
   * 发布后获得的合法 article_id
   */
  article_id: string
}

export interface ArticleLimitedMenuItem {
  /**
   * 菜单标题，不超过16个字节，子菜单不超过60个字节
   */
  name: string
  type: 'article_view_limited'
  /**
   * 发布后获得的合法 article_id
   */
  article_id: string
}
