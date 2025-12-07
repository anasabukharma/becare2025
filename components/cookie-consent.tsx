"use client"

import { useState, useEffect } from "react"
import { Cookie, X, Settings } from "lucide-react"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    performance: true,
    functional: true,
    advertising: true,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie_consent")
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000)
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(consent)
        setPreferences(saved)
      } catch (error) {
        console.error("Error loading cookie preferences:", error)
      }
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      performance: true,
      functional: true,
      advertising: true,
    }
    savePreferences(allAccepted)
  }

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      performance: false,
      functional: false,
      advertising: false,
    }
    savePreferences(onlyNecessary)
  }

  const savePreferences = (prefs: typeof preferences) => {
    localStorage.setItem("cookie_consent", JSON.stringify(prefs))
    setPreferences(prefs)
    setShowBanner(false)
    setShowSettings(false)
    
    // Apply preferences (e.g., load/unload analytics scripts)
    applyPreferences(prefs)
  }

  const applyPreferences = (prefs: typeof preferences) => {
    // Here you would load/unload tracking scripts based on preferences
    if (prefs.performance) {
      // Load Google Analytics
      console.log("Loading performance cookies...")
    }
    if (prefs.advertising) {
      // Load advertising pixels
      console.log("Loading advertising cookies...")
    }
  }

  if (!showBanner) return null

  return (
    <>
      {/* Main Banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up" dir="rtl">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border-2 border-blue-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 md:p-6">
              <div className="flex items-center gap-3 text-white">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-1">🍪 نستخدم ملفات تعريف الارتباط</h3>
                  <p className="text-sm md:text-base text-blue-50">
                    لتحسين تجربتك وتقديم خدمات أفضل
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6">
              <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
                نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربتك على موقعنا، وتحليل حركة المرور، وعرض محتوى مخصص. 
                باستمرارك في استخدام الموقع، فإنك توافق على استخدامنا للكوكيز وفقاً لـ{" "}
                <a href="/cookies" className="text-blue-600 hover:underline font-semibold">
                  سياسة الكوكيز
                </a>
                {" "}و{" "}
                <a href="/privacy" className="text-blue-600 hover:underline font-semibold">
                  سياسة الخصوصية
                </a>
                .
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptAll}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                >
                  ✓ قبول الكل
                </button>
                <button
                  onClick={rejectAll}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  ✗ رفض الكل
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex-1 bg-white hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-lg font-semibold border-2 border-gray-300 transition-colors flex items-center justify-center gap-2"
                >
                  <Settings className="w-5 h-5" />
                  <span>إعدادات</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" dir="rtl">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Settings className="w-6 h-6" />
                  <h2 className="text-2xl font-bold">إعدادات الكوكيز</h2>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <p className="text-gray-700 mb-6 leading-relaxed">
                يمكنك التحكم في أنواع الكوكيز التي تريد السماح بها. الكوكيز الضرورية مطلوبة دائماً لعمل الموقع بشكل صحيح.
              </p>

              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">الكوكيز الضرورية</h3>
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      مطلوبة
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    ضرورية لتشغيل الموقع الأساسي مثل تسجيل الدخول والأمان. لا يمكن تعطيلها.
                  </p>
                </div>

                {/* Performance Cookies */}
                <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">كوكيز الأداء</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.performance}
                        onChange={(e) =>
                          setPreferences({ ...preferences, performance: e.target.checked })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-gray-700 text-sm">
                    تساعدنا في فهم كيفية استخدامك للموقع من خلال Google Analytics. البيانات مجهولة الهوية.
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">الكوكيز الوظيفية</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={(e) =>
                          setPreferences({ ...preferences, functional: e.target.checked })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-gray-700 text-sm">
                    تتذكر تفضيلاتك مثل اللغة والإعدادات لتحسين تجربتك.
                  </p>
                </div>

                {/* Advertising Cookies */}
                <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">كوكيز الإعلانات</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.advertising}
                        onChange={(e) =>
                          setPreferences({ ...preferences, advertising: e.target.checked })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-gray-700 text-sm">
                    تستخدم لعرض إعلانات ذات صلة باهتماماتك عبر Google Ads وFacebook.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  💡 <strong>نصيحة:</strong> نوصي بقبول جميع الكوكيز للحصول على أفضل تجربة. 
                  يمكنك تغيير إعداداتك في أي وقت.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-4 bg-gray-50 flex gap-3">
              <button
                onClick={() => savePreferences(preferences)}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all"
              >
                حفظ الإعدادات
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold transition-colors"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
