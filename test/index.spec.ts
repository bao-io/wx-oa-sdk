import { describe, expect, it } from 'vitest'
import { WxSdk } from '../src'

describe('simple test', async () => {
  const wx = new WxSdk({
    appid: 'xxxxxx',
    secret: 'xxxxxx',
    access_token: 'xxxxxx'
  })
  it('update config', () => {
    wx.updateConfig({ appid: '123' })
    expect(wx.config.appid).toEqual('123')
  })
})
