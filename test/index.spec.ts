import { describe, expect, it } from 'vitest'
import { WxSdk } from '../src'
import 'dotenv/config'

describe('sdk test', async () => {
  it('should throw an error if appid is missing', () => {
    expect(() => {
      //@ts-expect-error
      new WxSdk({})
    }).toThrow('config.appid is required')
  })

  it('should throw an error if secret is missing', () => {
    expect(() => {
      //@ts-expect-error
      new WxSdk({ appid: 'xxxx' })
    }).toThrow('config.secret is required')
  })

  it('update sdk config', () => {
    const sdk = new WxSdk({ appid: 'xxxx', secret: 'xxxx' })
    sdk.updateConfig({
      appid: process.env.WX_APPID,
      secret: process.env.WX_SECRET,
      access_token: () => Promise.resolve('12345678')
    })
    expect(sdk.config.appid).toEqual(process.env.WX_APPID)
    expect(sdk.config.secret).toEqual(process.env.WX_SECRET)
  })

  // it('get access_token', async () => {
  //   const sdk = new WxSdk({
  //     appid: <string>process.env.WX_APPID,
  //     secret: <string>process.env.WX_SECRET
  //   })
  // })
})
