import { parseString, Builder } from 'xml2js'
import { Stream } from 'stream'
import { WxMsgSchema } from './types/msg'

export class WxMsgApi {
  /**
   * 用于解析请求体返回的stream流，并转成xml格式返回xml字符串
   * @param stream
   * @returns
   */
  xmlBodyParser(stream: Stream) {
    return new Promise((s, j) => {
      let xmlData = ''
      stream.on('data', data => {
        xmlData += data.toString()
      })
      stream.on('end', () => {
        s(xmlData)
      })
      stream.on('error', error => {
        j(error)
      })
    })
  }

  /**
   * 把xml转成js对象
   * @param {string} xmlStr xml字符串
   * @returns
   */
  parseXmlStr2Obj<T = WxMsgSchema>(xmlStr: string) {
    return new Promise<T>((s, j) => {
      parseString(
        xmlStr,
        { trim: true, explicitArray: false },
        (err, { xml }) => {
          if (!err) {
            s(xml)
          } else {
            j(err)
          }
        }
      )
    })
  }

  /**
   * 把js对象转成xml字符串，用于回复微信服务器
   * @param {WxMsgSchema} obj
   * @returns {string}
   */
  parseObj2XmlStr(obj: WxMsgSchema) {
    return new Builder({ rootName: 'xml', cdata: true }).buildObject(obj)
  }
}
