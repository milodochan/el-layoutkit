import CryptoJS from 'crypto-js'

let dataCache = null

const STORAGE_KEY = '__store__'
const SECRET_KEY = '__store_secret__'

// 初始结构
// {
//   permissions: [],
//   perEnabled: true
// }

function encryptData(data) {
  const SECRET = CryptoJS.lib.WordArray.random(32).toString()
  localStorage.setItem(SECRET_KEY, SECRET)

  const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET).toString()
  localStorage.setItem(STORAGE_KEY, encrypted)

  dataCache = data
}

function decryptData() {
  const encrypted = localStorage.getItem(STORAGE_KEY)
  const SECRET = localStorage.getItem(SECRET_KEY)

  if (!encrypted || !SECRET) return null

  try {
    const bytes = CryptoJS.AES.decrypt(encrypted, SECRET)
    const json = bytes.toString(CryptoJS.enc.Utf8)
    return JSON.parse(json)
  } catch (e) {
    console.error('解密失败', e)
    return null
  }
}


const store = {

  /**
   * ⚡ set 只设置权限数组 !!!
   */
  set(permissionList) {
    const oldData = this.get() || {
      permissions: [],
      perEnabled: true
    }

    const newData = {
      ...oldData,
      permissions: permissionList   // ✔ 只修改 permissions
    }

    encryptData(newData)
  },

  /**
   * ⚡ get 返回完整结构
   */
  get() {
    if (dataCache !== null) return dataCache

    const data = decryptData()
    if (!data) return null

    dataCache = data
    return dataCache
  },

  /**
   * 判断权限
   */
  hasPer(key) {
    const data = this.get()
    if (!data) return false

    const { permissions, perEnabled } = data
    if (!perEnabled) return true    // 🔥 权限校验关闭 → 全放行

    return Array.isArray(permissions) && permissions.includes(key)
  },

  /**
   * 🔥 只修改权限开关 → 启用权限
   */
  enabledPer() {
    const data = this.get() || {
      permissions: [],
      perEnabled: true
    }

    data.perEnabled = true
    encryptData(data)
  },

  /**
   * 🔥 只修改权限开关 → 禁用权限（超级管理员模式）
   */
  disabledPer() {
    const data = this.get() || {
      permissions: [],
      perEnabled: false
    }

    data.perEnabled = false
    encryptData(data)
  }
}

export default store
