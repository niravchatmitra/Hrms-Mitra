'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const saveConsent = (consentData: any) => {
    localStorage.setItem('cookie-consent', JSON.stringify(consentData))
    setIsVisible(false)
    setShowPreferences(false)
  }

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true })
  }

  const rejectNonEssential = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false })
  }

  const savePreferences = () => {
    saveConsent(preferences)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6">
      <div className="container-custom">
        <div className="bg-white rounded-xl shadow-2xl border border-border p-6 max-w-4xl mx-auto">
          {!showPreferences ? (
            // Main Cookie Banner
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-text-heading mb-2">
                  We value your privacy
                </h3>
                <p className="text-sm text-text-body mb-3">
                  We use cookies to enhance your browsing experience, analyze site traffic, and
                  personalize content. By clicking &quot;Accept All&quot;, you consent to our use
                  of cookies.
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <Link
                    href="/cookie-policy"
                    className="text-primary hover:underline font-medium"
                  >
                    Cookie Policy
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="text-primary hover:underline font-medium"
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={rejectNonEssential}
                  className="btn btn-secondary btn-sm whitespace-nowrap"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={() => setShowPreferences(true)}
                  className="btn btn-secondary btn-sm whitespace-nowrap"
                >
                  Manage Preferences
                </button>
                <button onClick={acceptAll} className="btn btn-primary btn-sm whitespace-nowrap">
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            // Preferences Modal
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-text-heading">Cookie Preferences</h3>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="p-2 hover:bg-background-alt rounded-lg transition-colors"
                  aria-label="Close preferences"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="flex items-start justify-between p-4 bg-background-alt rounded-lg">
                  <div className="flex-1 pr-4">
                    <div className="font-medium text-text-heading mb-1">
                      Necessary Cookies
                    </div>
                    <p className="text-sm text-text-body">
                      Essential for the website to function properly. Cannot be disabled.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="w-5 h-5 rounded border-border"
                    />
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-4 bg-background-alt rounded-lg">
                  <div className="flex-1 pr-4">
                    <div className="font-medium text-text-heading mb-1">Analytics Cookies</div>
                    <p className="text-sm text-text-body">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className="w-5 h-5 rounded border-border"
                    />
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-4 bg-background-alt rounded-lg">
                  <div className="flex-1 pr-4">
                    <div className="font-medium text-text-heading mb-1">Marketing Cookies</div>
                    <p className="text-sm text-text-body">
                      Used to deliver personalized advertisements relevant to you.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({ ...preferences, marketing: e.target.checked })
                      }
                      className="w-5 h-5 rounded border-border"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="btn btn-secondary flex-1"
                >
                  Cancel
                </button>
                <button onClick={savePreferences} className="btn btn-primary flex-1">
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
