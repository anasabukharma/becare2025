/**
 * Map ISO 3166-1 alpha-2 codes to alpha-3 codes
 * Common GCC countries
 */
export const countryCodeMap: Record<string, string> = {
  'SA': 'SAU', // Saudi Arabia
  'AE': 'ARE', // United Arab Emirates
  'KW': 'KWT', // Kuwait
  'QA': 'QAT', // Qatar
  'BH': 'BHR', // Bahrain
  'OM': 'OMN', // Oman
  'JO': 'JOR', // Jordan
  'EG': 'EGY', // Egypt
  'LB': 'LBN', // Lebanon
  'IQ': 'IRQ', // Iraq
  'YE': 'YEM', // Yemen
  'SY': 'SYR', // Syria
  'PS': 'PSE', // Palestine
  'MA': 'MAR', // Morocco
  'DZ': 'DZA', // Algeria
  'TN': 'TUN', // Tunisia
  'LY': 'LBY', // Libya
  'SD': 'SDN', // Sudan
  'SO': 'SOM', // Somalia
  'DJ': 'DJI', // Djibouti
  'KM': 'COM', // Comoros
  'MR': 'MRT', // Mauritania
}

/**
 * Convert ISO 3166-1 alpha-2 to alpha-3
 */
export function convertToAlpha3(alpha2: string): string {
  const upper = alpha2.toUpperCase()
  return countryCodeMap[upper] || upper
}
