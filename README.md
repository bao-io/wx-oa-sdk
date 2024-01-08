# wx-oa-sdk

微信公众号 SDK。<br/>
- `Ts`封装，所有接口均有正确的返回**高亮提示** 🚀🚀🚀
- 支持微信服务器的验证
- `access_token`支持异步获取以及更新，你只管通过`sdk`直接调用方法
- 内置XML消息体处理，帮你一键解析XML转为对象

## Install

```bash
npm i wx-oa-sdk
```

## Usage

```typescript
import WxSdk from 'wx-oa-sdk'; // or import { WxSdk } from 'wx-oa-sdk'; or const WxSdk = require('wx-oa-sdk')
const sdk = new WxSdk({
  appid: 'your-appid',
  secret: 'your-secret',
  access_token: 'your-access-token', // 支持异步函数获取 ()=> Promise.resolve('your-access-token')
  token: 'your-token', // 可选，用于调用sdk.checkServer来进行微信服务器的验证
})
// 提供基础 API 管理功能。
sdk.base.xxxx
// 管理微信开放平台的 API。
sdk.open.xxxx
// 管理微信公众号的自定义菜单。
sdk.menu.xxxx
// 管理微信公众号的草稿箱。
sdk.draft.xxxx
// 管理微信公众号的内容发布。
sdk.publish.xxxx
// 管理微信公众号的用户信息。
sdk.user.xxxx
// 处理微信公众号的基础消息。
sdk.msg.xxxx
```
