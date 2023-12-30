# wx-oa-sdk

微信公众号 SDK

**构造函数:**

- `constructor(config: WxConfig)` - 使用给定的配置初始化微信 SDK。

**属性:**

- `base: WxBaseApi` - 提供基础 API 管理功能。
- `open: WxOpenApi` - 管理微信开放平台的 API。
- `menu: WxMenuApi` - 管理微信公众号的自定义菜单。
- `draft: WxDraftApi` - 管理微信公众号的草稿箱。
- `publish: WxPublishApi` - 管理微信公众号的内容发布。
- `user: WxUserApi` - 管理微信公众号的用户信息。
- `msg: WxMsgApi` - 处理微信公众号的基础消息。
- `version: string` - SDK 版本号。

**方法:**

- `checkServer(body: CheckServerBody): string` - 验证微信服务器，确保安全性。

### WxBaseApi 类

**方法:**

- `getAccessToken(): Promise<GetTokenResponse>` - 获取微信公众号的访问令牌。
- `getStableAccessToken(force_refresh?: boolean): Promise<GetTokenResponse>` - 获取稳定版本的访问令牌。
- `getApiDomainIP(): Promise<GetApiDomainIPResponse>` - 获取微信 API 服务器的 IP 地址。
- `callbackCheck(body: CallbackCheckBody): Promise<CallbackCheckResponse>` - 执行网络检测，例如 DNS 和 ping 测试。

### WxOpenApi 类

**方法:**

- `clear_quota(): Promise<BaseResponse>` - 清空 API 的调用配额。
- `get_quota(cgi_path: string): Promise<GetQuotaResponse>` - 查询 API 调用配额。
- `get_rid(rid: string): Promise<GetRidResponse>` - 查询 RID 信息。
- `clearQuotaByAppSecret(): Promise<BaseResponse>` - 使用 AppSecret 重置 API 调用次数。

### WxMenuApi 类

**方法:**

- `createMenu(body: MenuBody): Promise<BaseResponse>` - 创建自定义菜单。
- `getMenu(): Promise<QueryMenuResponse>` - 查询当前菜单配置。
- `deleteMenu(): Promise<BaseResponse>` - 删除当前菜单。

### WxDraftApi 类

**方法:**

- `addDraft(body: DraftBody): Promise<DraftBodyOrResponse>` - 新建草稿。
- `getDraft(body: DraftBodyOrResponse): Promise<GetDraftResponse>` - 获取草稿内容。
- `deleteDraft(body: DraftBodyOrResponse): Promise<BaseResponse>` - 删除草稿。
- `updateDraft(body: UpdateDraftBody): Promise<BaseResponse>` - 修改草稿。
- `count(): Promise<GetDraftCountResponse>` - 获取草稿总数。
- `batchGetDraft(body: BatchGetDraftBody): Promise<BatchGetDraftResponse>` - 获取草稿列表。

### WxPublishApi 类

**方法:**

- `submitPublish(body: PublishSubmitBody): Promise<PublishSubmitResponse>` - 提交发布任务。
- `getPublish(body: GetPublishBody): Promise<GetPublishResponse>` - 查询发布状态。
- `deletePublish(body: DeletePublishBody): Promise<BaseResponse>` - 删除已发布内容。
- `getArticleByArticleId(body: GetArticleBody): Promise<GetArticleByIdResponse>` - 通过 article_id 获取已发布文章。
- `batchGetPublish(body: BatchGetArticleBody): Promise<GetArticleByIdResponse>` - 批量获取已发布文章列表。

### WxUserApi 类

**方法:**

- `updateRemark(body: UpdateRemarkBody): Promise<BaseResponse>` - 设置用户备注名。
- `info(openid: string, lang?: "zh_CN" | "zh_TW" | "en"): Promise<GetUserInfoResponse>` - 获取用户基本信息。
- `batchInfo(body: BatchUserInfoBody): Promise<GetBatchUserInfoResponse>` - 批量获取用户基本信息。
- `getUserList(next_openid?: string): Promise<GetUserListResponse>` - 获取用户列表。
- `getUserBackList(body: GetUserBackListBody): Promise<GetUserListResponse>` - 获取公众号的黑名单列表。
- `batchBackUser(body: BackUserBody):Promise<BaseResponse>` - 拉黑用户。
- `batchUnBackUser(body: BackUserBody): Promise<BaseResponse>` - 取消拉黑用户。

### WxMsgApi 类

**方法:**

- `xmlBodyParser(stream: Stream): Promise<unknown>` - 解析请求体并返回 XML 字符串。
- `parseXmlStr2Obj<T = WxMsgSchema>(xmlStr: string): Promise<T>` - 将 XML 字符串转换为 JS 对象。
- `parseObj2XmlStr(obj: WxMsgSchema): string` - 将 JS 对象转换为 XML 字符串，用于回复微信服务器。

## License

[MIT](./LICENSE) License © 2023-PRESENT [BaoBao](https://github.com/bao-io)
