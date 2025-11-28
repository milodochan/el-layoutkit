import CryptoJS from 'crypto-js'
import { getCurrentInstance } from 'vue'

let dataCache = null

const STORAGE_KEY = '__store__'
const SECRET_KEY = '__store_secret__'

const store = {
  /**
   * 设置数据，同时生成新的 SECRET
   */
  set(value) {
    try {
      // 生成新的 secret
      const SECRET = CryptoJS.lib.WordArray.random(32).toString()
      localStorage.setItem(SECRET_KEY, SECRET)

      const stringValue = JSON.stringify(value)
      const encrypted = CryptoJS.AES.encrypt(stringValue, SECRET).toString()
      localStorage.setItem(STORAGE_KEY, encrypted)

      dataCache = value  // 缓存 ✅
    } catch (e) {
      console.error('存储失败', e)
    }
  },

  /**
   * 读取最新数据
   */
  get() {
    if (dataCache !== null) return dataCache

    const encrypted = localStorage.getItem(STORAGE_KEY)
    const SECRET = localStorage.getItem(SECRET_KEY)

    if (!encrypted || !SECRET) return null

    try {
      const bytes = CryptoJS.AES.decrypt(encrypted, SECRET)
      const stringValue = bytes.toString(CryptoJS.enc.Utf8)
      dataCache = JSON.parse(stringValue)
      return dataCache
    } catch (e) {
      console.error('解密失败', e)
      return null
    }
  },

  /**
   * 判断权限
   */
  hasPer(key) {
    const instance = getCurrentInstance()
    const isPerEnabled = instance?.appContext.config.globalProperties.$layoutkitPerEnabled
    if (isPerEnabled) {
      try {
        if (dataCache === null) this.get()
        if (!Array.isArray(dataCache)) return false
        return dataCache.includes(key)
      } catch (e) {
        console.error('读取失败', e)
        return false
      }
    }
    return true
  }
}

export default store