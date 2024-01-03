import WxSdk from './src'

declare module 'vitest' {
  export interface TestContext {
    sdk?: WxSdk
    xml?: string
  }
}

export {}
