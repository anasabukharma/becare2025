"use client"

import Link from "next/link"
import { Shield, FileText, Cookie, Mail, Phone, MapPin } from "lucide-react"

export function LegalFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              BCare
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              منصة رائدة في مجال التأمين الإلكتروني، نقدم أفضل عروض التأمين على المركبات بأسعار تنافسية وخدمة متميزة.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              السياسات القانونية
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <Shield className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>سياسة الخصوصية</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                >
                  <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>الشروط والأحكام</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <Cookie className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>سياسة الكوكيز</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" />
              تواصل معنا
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">البريد الإلكتروني</div>
                  <a href="mailto:info@becare.com" className="hover:text-blue-400 transition-colors">
                    info@becare.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">الهاتف</div>
                  <a href="tel:+966112345678" className="hover:text-green-400 transition-colors" dir="ltr">
                    +966 11 234 5678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">العنوان</div>
                  <span>الرياض، المملكة العربية السعودية</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p>© {currentYear} BCare. جميع الحقوق محفوظة.</p>
            <p className="mt-1">
              مرخص من قبل البنك المركزي السعودي (ساما) | ترخيص رقم: 123456
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              الخصوصية
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              الشروط
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-orange-400 transition-colors"
            >
              الكوكيز
            </Link>
            <span className="text-gray-600">•</span>
            <button
              onClick={() => {
                localStorage.removeItem("cookie_consent")
                window.location.reload()
              }}
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              إعدادات الكوكيز
            </button>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
              <span className="text-xs text-gray-400">متوافق مع</span>
              <div className="text-sm font-semibold text-white mt-1">GDPR</div>
            </div>
            <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
              <span className="text-xs text-gray-400">معتمد من</span>
              <div className="text-sm font-semibold text-white mt-1">ساما</div>
            </div>
            <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
              <span className="text-xs text-gray-400">آمن</span>
              <div className="text-sm font-semibold text-white mt-1">SSL/TLS</div>
            </div>
            <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
              <span className="text-xs text-gray-400">متوافق مع</span>
              <div className="text-sm font-semibold text-white mt-1">PCI DSS</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
