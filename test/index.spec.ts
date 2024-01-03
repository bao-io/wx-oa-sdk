import { describe, expect, it, beforeEach } from 'vitest'
import { WxSdk } from '../src'
import 'dotenv/config'
import { Readable } from 'stream'

describe('sdk test', async () => {
  beforeEach(ctx => {
    ctx.sdk = new WxSdk({
      appid: <string>process.env.WX_APPID,
      secret: <string>process.env.WX_SECRET,
      access_token: () =>
        ctx.sdk!.base.getAccessToken().then(res => res.access_token!)
    })
  })

  it('update sdk config', ctx => {
    ctx.sdk?.updateConfig({
      appid: 'xxxx',
      secret: 'xxxx'
    })
    expect(ctx.sdk?.config.appid).toEqual('xxxx')
    expect(ctx.sdk?.config.secret).toEqual('xxxx')
  })

  it('get access_token', async ctx => {
    const res = await ctx.sdk?.base.getAccessToken()
    expect(res?.access_token).toBeDefined()
    expect(res?.expires_in).toBeGreaterThanOrEqual(7200)
  })

  it('get user list', async ctx => {
    const res = await ctx.sdk?.user.getUserList()
    expect(res?.next_openid).toBeDefined()
    expect(res?.data?.openid).toBeDefined()
  })

  describe('test msg xml', () => {
    beforeEach(ctx => {
      ctx.xml = `<xml>
      <ToUserName>toUser</ToUserName>
      <FromUserName>fromUser</FromUserName>
      <CreateTime>1348831860</CreateTime>
      <MsgType>image</MsgType>
      <PicUrl>this is a url</PicUrl>
      <MediaId>media_id</MediaId>
      <MsgId>1234567890123456</MsgId>
       <MsgDataId>xxxx</MsgDataId>
      <Idx>xxxx</Idx>
    </xml>`
    })
    it('test xmlBodyParser', async ({ expect, sdk, xml }) => {
      const stream = Readable.from([xml])
      const resultData = await sdk?.msg.xmlBodyParser(stream)
      expect(resultData).toBe(xml)
    })

    it('test parseXmlStr2Obj', async ({ expect, sdk, xml }) => {
      const obj = await sdk?.msg.parseXmlStr2Obj(xml!)
      expect(obj).toBeDefined()
    })

    it('test parseObj2XmlStr', async ({ expect, sdk, xml }) => {
      const obj = await sdk?.msg.parseXmlStr2Obj(xml!)
      const res = await sdk?.msg.parseObj2XmlStr(obj!)
      const REPLACE_RE = /\n|\s/g
      expect(
        res?.replace(REPLACE_RE, '').includes(xml!.replace(REPLACE_RE, ''))
      ).toBeTruthy()
    })
  })
})
