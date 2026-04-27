'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Tooltip } from 'react-tooltip'

/**
 * Public API base (no trailing /api). Same DB as admin webinar settings.
 * Set NEXT_PUBLIC_API_BASE_URL in .env.local for local backend, e.g. http://localhost:4000
 */
const API_ROOT = (process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.mindsai.live').replace(
  /\/api\/?$/,
  '',
)

/**
 * MindAiBackend middleware wraps most 2xx bodies as:
 * { success, statuscode, message, data: { ...payload fields } }
 * so `packages` / `orderId` live under `data`, not the root. Merge up for the form.
 */
function unwrapWebinarResponse(raw: unknown): Record<string, unknown> {
  if (!raw || typeof raw !== 'object') return {}
  const o = raw as Record<string, unknown>
  const inner = o['data']
  if (inner !== null && inner !== undefined && typeof inner === 'object' && !Array.isArray(inner)) {
    return { ...o, ...(inner as Record<string, unknown>) }
  }
  return o
}

function webinarErrorMessage(flat: Record<string, unknown>): string {
  const err = flat['error']
  return typeof err === 'string' && err.trim() ? err : 'Request failed'
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => RazorpayInstance
  }
}

interface RazorpayOptions {
  key: string
  amount: number
  currency: string
  name: string
  description: string
  order_id: string
  prefill?: { name?: string; email?: string; contact?: string }
  theme?: { color: string }
  handler: (response: {
    razorpay_payment_id: string
    razorpay_order_id: string
    razorpay_signature: string
  }) => void
  modal?: { ondismiss?: () => void }
}

interface RazorpayInstance {
  open: () => void
}

type WebinarPackageId = 'basic' | 'pro' | 'premium'
type WebinarPackage = { id: WebinarPackageId; name: string; amountPaise: number; active: boolean }

function loadRazorpayScript(): Promise<typeof window.Razorpay> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Window not available'))
      return
    }
    if (window.Razorpay) {
      resolve(window.Razorpay)
      return
    }
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    script.onload = () => resolve(window.Razorpay)
    script.onerror = () => reject(new Error('Failed to load Razorpay'))
    document.body.appendChild(script)
  })
}

export function WebinarRegisterForm() {
  const [packages, setPackages] = useState<WebinarPackage[]>([])
  const [packagesLoaded, setPackagesLoaded] = useState(false)
  const [packagesFetchFailed, setPackagesFetchFailed] = useState(false)
  const [selectedPackageId, setSelectedPackageId] = useState<WebinarPackageId>('basic')

  const [step, setStep] = useState<1 | 2 | 3>(1)

  // Coupon
  const [couponCodeInput, setCouponCodeInput] = useState<string>('')
  const [appliedCouponCode, setAppliedCouponCode] = useState<string | null>(null)
  const [couponAmountPaise, setCouponAmountPaise] = useState<number | null>(null)
  const [couponError, setCouponError] = useState<string | null>(null)
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false)

  // Step 1: Basic information
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')

  // Step 2: Professional background
  const [backgroundType, setBackgroundType] = useState<'working_professional' | 'student' | ''>('')
  const [organizationName, setOrganizationName] = useState('')
  const [field, setField] = useState('')

  // Step 3: Interests + consent
  const [familiarity, setFamiliarity] = useState<
    | 'very_familiar'
    | 'somewhat_familiar'
    | 'heard_about_it'
    | 'completely_new'
    | ''
  >('')
  const [topics, setTopics] = useState<string[]>([])
  const [wantsToTestMindsAi, setWantsToTestMindsAi] = useState<'yes' | 'maybe' | 'not_now' | ''>('')
  const [joinEarlyCommunity, setJoinEarlyCommunity] = useState<'yes' | 'no' | ''>('')
  const [consentUpdates, setConsentUpdates] = useState(false)

  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessPage, setShowSuccessPage] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Preselect package from URL (?package=basic|pro|premium) if present
    try {
      const sp = new URLSearchParams(window.location.search)
      const pkg = sp.get('package')
      if (pkg === 'basic' || pkg === 'pro' || pkg === 'premium') {
        setSelectedPackageId(pkg)
      }
    } catch {
      // ignore
    }
  }, [])

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const res = await fetch(`${API_ROOT}/api/webinar/packages`)
        const raw = await res.json().catch(() => ({}))
        const data = unwrapWebinarResponse(raw)
        if (!mounted) return
        if (res.ok && data.success !== false && Array.isArray(data.packages)) {
          const fetched = data.packages as WebinarPackage[]
          setPackages(fetched)
          setPackagesFetchFailed(false)
          setSelectedPackageId((current) => {
            const exists = fetched.some((p) => p.id === current && p.active)
            if (exists) return current
            const firstActive = fetched.find((p) => p.active)
            return firstActive?.id ?? current
          })
        } else {
          setPackagesFetchFailed(true)
        }
      } catch {
        setPackagesFetchFailed(true)
      } finally {
        if (mounted) setPackagesLoaded(true)
      }
    })()
    return () => {
      mounted = false
    }
  }, [])

  // Reset applied coupon when user changes the input or changes package.
  useEffect(() => {
    setAppliedCouponCode(null)
    setCouponAmountPaise(null)
    setCouponError(null)
  }, [couponCodeInput, selectedPackageId])

  const visiblePackages = useMemo(() => {
    // Show only active packages configured from admin.
    return packages.filter((p) => p.active)
  }, [packages])
  const selectedPackage = useMemo(() => {
    return visiblePackages.find((p) => p.id === selectedPackageId) || null
  }, [visiblePackages, selectedPackageId])

  const payAmountPaise = couponAmountPaise ?? selectedPackage?.amountPaise ?? 0

  const payRupees = Math.max(0, Math.round(payAmountPaise / 100))

  const packageDetails = useMemo(() => {
    const map: Record<WebinarPackageId, { title: string; points: string[] }> = {
      basic: {
        title: 'Basic Pass',
        points: ['Webinar access', 'Live Q&A'],
      },
      pro: {
        title: 'Pro Pass',
        points: ['Webinar access', 'Certificate', 'Recording', "Early access to Mind's AI", 'Live Q&A'],
      },
      premium: {
        title: 'Premium Pass',
        points: ['Everything in Pro', 'Private community', 'Internship opportunities'],
      },
    }
    return map
  }, [])

  const confirmRegistration = useCallback(
    async (paymentId: string, orderId: string, signature: string) => {
      const res = await fetch(`${API_ROOT}/api/webinar/confirm`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          city: city.trim(),
          backgroundType,
          organizationName: organizationName.trim() || undefined,
          field: field.trim() || undefined,
          familiarity,
          topics,
          wantsToTestMindsAi,
          joinEarlyCommunity,
          consentUpdates,
          packageId: selectedPackageId,
          couponCode: appliedCouponCode || undefined,
          message: message.trim() || undefined,
          razorpay_payment_id: paymentId,
          razorpay_order_id: orderId,
          razorpay_signature: signature,
        }),
      })
      const raw = await res.json().catch(() => ({}))
      const data = unwrapWebinarResponse(raw)
      if (!res.ok || data.success === false) {
        throw new Error(webinarErrorMessage(data) || 'Registration failed')
      }
      setStep(1)
      setName('')
      setEmail('')
      setPhone('')
      setCity('')
      setBackgroundType('')
      setOrganizationName('')
      setField('')
      setFamiliarity('')
      setTopics([])
      setWantsToTestMindsAi('')
      setJoinEarlyCommunity('')
      setConsentUpdates(false)
      setMessage('')
      setShowSuccessPage(true)
    },
    [
      name,
      email,
      phone,
      city,
      backgroundType,
      organizationName,
      field,
      familiarity,
      topics,
      wantsToTestMindsAi,
      joinEarlyCommunity,
      consentUpdates,
      message,
      selectedPackageId,
      appliedCouponCode,
    ],
  )

  const toggleTopic = (t: string) => {
    setTopics((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))
  }

  const validateStep1 = () => {
    if (!name.trim() || !email.trim() || !phone.trim() || !city.trim()) {
      setError('Please fill in full name, email, phone, and city.')
      return false
    }
    return true
  }

  const validateStep2 = () => {
    if (!backgroundType) {
      setError('Please select whether you are a working professional or student.')
      return false
    }
    if (!organizationName.trim()) {
      setError('Please enter your organization/college name.')
      return false
    }
    if (!field.trim()) {
      setError('Please enter your field of study/profession.')
      return false
    }
    return true
  }

  const validateStep3 = () => {
    if (!selectedPackage || visiblePackages.length === 0) {
      setError('No active package is available right now. Please try again later.')
      return false
    }
    if (!familiarity) {
      setError('Please select how familiar you are with AI in Psychology.')
      return false
    }
    if (topics.length === 0) {
      setError('Please select at least one topic that interests you the most.')
      return false
    }
    if (!wantsToTestMindsAi) {
      setError('Please choose whether you would like to test Mind’s AI.')
      return false
    }
    if (!joinEarlyCommunity) {
      setError('Please choose whether you want to join our early community.')
      return false
    }
    if (!consentUpdates) {
      setError('Please accept consent to receive updates.')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccessPage(false)
    setError(null)

    // Only submit on step 3 (payment)
    if (!validateStep3()) return
    if (couponCodeInput.trim() && !appliedCouponCode) {
      setError('Please apply the coupon before payment.')
      return
    }

    try {
      setIsSubmitting(true)

      // 1. Create order on backend (sends email to check if already registered)
      const orderRes = await fetch(`${API_ROOT}/api/webinar/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          packageId: selectedPackageId,
          couponCode: appliedCouponCode || undefined,
        }),
      })
      const orderRaw = await orderRes.json().catch(() => ({}))
      const orderData = unwrapWebinarResponse(orderRaw)
      if (!orderRes.ok || orderData.success === false) {
        setError(webinarErrorMessage(orderData) || 'Could not start payment. Please try again.')
        return
      }

      const orderId = orderData.orderId as string
      const keyId = orderData.keyId as string
      const amount = orderData.amount as number
      const currency = orderData.currency as string
      if (!orderId || !keyId || typeof amount !== 'number' || !currency) {
        setError('Invalid payment session from server. Please try again.')
        return
      }

      // 2. Load Razorpay script and open checkout
      const Razorpay = await loadRazorpayScript()
      const rzp = new Razorpay({
        key: keyId,
        amount,
        currency,
        name: "Mind's AI",
        description: `Webinar Registration (${payRupees} INR)`,
        order_id: orderId,
        prefill: { name: name.trim(), email: email.trim(), contact: phone.trim() },
        theme: { color: '#6B9E5A' },
        handler: async (response) => {
          try {
            await confirmRegistration(
              response.razorpay_payment_id,
              response.razorpay_order_id,
              response.razorpay_signature,
            )
          } catch (err) {
            setError(err instanceof Error ? err.message : 'Registration failed. Please contact support.')
          } finally {
            setIsSubmitting(false)
          }
        },
        modal: {
          ondismiss: () => {
            setIsSubmitting(false)
          },
        },
      })
      rzp.open()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to start payment. Please try again.')
      setIsSubmitting(false)
    }
  }

  const applyCoupon = async () => {
    const raw = couponCodeInput.trim()
    if (!raw) {
      setAppliedCouponCode(null)
      setCouponAmountPaise(null)
      setCouponError(null)
      return
    }
    setIsApplyingCoupon(true)
    setCouponError(null)
    try {
      const res = await fetch(`${API_ROOT}/api/webinar/coupon/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ couponCode: raw, packageId: selectedPackageId }),
      })
      const couponRaw = await res.json().catch(() => ({}))
      const data = unwrapWebinarResponse(couponRaw)
      if (!res.ok || data.success === false) {
        setAppliedCouponCode(null)
        setCouponAmountPaise(null)
        setCouponError(webinarErrorMessage(data) || 'Invalid coupon code.')
        return
      }

      const code =
        typeof data.couponCode === 'string' && data.couponCode.trim()
          ? data.couponCode
          : raw.toUpperCase()
      setAppliedCouponCode(code)
      setCouponAmountPaise(typeof data.finalAmountPaise === 'number' ? data.finalAmountPaise : null)
    } catch {
      setAppliedCouponCode(null)
      setCouponAmountPaise(null)
      setCouponError('Could not apply coupon. Please try again.')
    } finally {
      setIsApplyingCoupon(false)
    }
  }

  if (showSuccessPage) {
    return (
      <section id="register" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">Thanks for registration</h2>
          <p className="text-center text-gray-600 mb-6">
            Masterclass: <span className="font-semibold">17 May 2026 • 7:30 PM</span>
          </p>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-700 font-medium mb-3 text-center">
              please use this link to join our group its mandatory to join
            </p>
            <a
              href="https://chat.whatsapp.com/GzbJ662UZzm8lRQMBlCdy0?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center rounded-lg bg-[#6B9E5A] hover:bg-[#5d8b4e] transition-colors text-white px-4 py-3 font-medium"
            >
              Join WhatsApp Group
            </a>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold text-gray-800 mb-3 text-center">Social media</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.instagram.com/_minds_ai?igsh=NGd3emszeDBqY3Fq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-600 hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61571434214906"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-600 hover:underline"
              >
                Facebook
              </a>
              <a
                href="https://www.linkedin.com/company/iskrti-psychology-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-600 hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/Minds_Ai_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-brand-600 hover:underline"
              >
                X
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="register" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 uppercase tracking-wide text-center mb-8">
          Register Here
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Stepper */}
          <div className="flex items-center justify-between text-xs font-medium text-gray-500">
            <span className={step === 1 ? 'text-emerald-700' : ''}>1. Basic</span>
            <span className={step === 2 ? 'text-emerald-700' : ''}>2. Background</span>
            <span className={step === 3 ? 'text-emerald-700' : ''}>3. Interests</span>
          </div>

          {step === 1 && (
            <>
              <div>
                <label htmlFor="webinar-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Full Name
                </label>
                <input
                  id="webinar-name"
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="webinar-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  id="webinar-email"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="webinar-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Phone Number (WhatsApp preferred)
                </label>
                <input
                  id="webinar-phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="webinar-city" className="block text-sm font-medium text-gray-700 mb-1.5">
                  City
                </label>
                <input
                  id="webinar-city"
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  setError(null)
                  if (validateStep1()) setStep(2)
                }}
                className="w-full py-3.5 rounded-lg font-medium text-white bg-[#6B9E5A] hover:bg-[#5d8b4e] transition-colors"
              >
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <p className="block text-sm font-medium text-gray-700 mb-2">What best describes you?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: 'working_professional', label: 'Working professional' },
                    { id: 'student', label: 'Student' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setBackgroundType(opt.id as 'working_professional' | 'student')}
                      className={`rounded-lg border px-4 py-3 text-sm font-medium text-left transition ${
                        backgroundType === opt.id
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                          : 'border-gray-300 bg-white text-gray-800 hover:bg-gray-50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="webinar-org" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Organization / College name
                </label>
                <input
                  id="webinar-org"
                  type="text"
                  placeholder="Organization / College name"
                  value={organizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                />
              </div>

              <div>
                <label htmlFor="webinar-field" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Field of study / profession
                </label>
                <input
                  id="webinar-field"
                  type="text"
                  placeholder="Field of study / profession"
                  value={field}
                  onChange={(e) => setField(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                />
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 py-3.5 rounded-lg font-medium border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setError(null)
                    if (validateStep2()) setStep(3)
                  }}
                  className="flex-1 py-3.5 rounded-lg font-medium text-white bg-[#6B9E5A] hover:bg-[#5d8b4e] transition-colors"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div>
                <p className="block text-sm font-medium text-gray-700 mb-2">
                  How familiar are you with AI in Psychology?
                </p>
                <div className="space-y-2">
                  {[
                    { id: 'very_familiar', label: 'Very familiar' },
                    { id: 'somewhat_familiar', label: 'Somewhat familiar' },
                    { id: 'heard_about_it', label: 'Heard about it but not sure' },
                    { id: 'completely_new', label: 'Completely new to this' },
                  ].map((opt) => (
                    <label key={opt.id} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3">
                      <input
                        type="radio"
                        name="familiarity"
                        value={opt.id}
                        checked={familiarity === opt.id}
                        onChange={() =>
                          setFamiliarity(
                            opt.id as
                              | 'very_familiar'
                              | 'somewhat_familiar'
                              | 'heard_about_it'
                              | 'completely_new',
                          )
                        }
                      />
                      <span className="text-sm text-gray-800">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="block text-sm font-medium text-gray-700 mb-2">
                  Which topics interest you the most?
                </p>
                <div className="space-y-2">
                  {[
                    { id: 'ai_in_mental_health', label: 'AI in Mental Health' },
                    { id: 'gamification_in_therapy', label: 'Gamification in Therapy' },
                    { id: 'ai_companions_for_emotional_support', label: 'AI Companions for Emotional Support' },
                    { id: 'future_of_psychology_careers', label: 'Future of Psychology Careers' },
                    { id: 'psychology_technology_startups', label: 'Psychology + Technology Startups' },
                    { id: 'research_opportunities', label: 'Research Opportunities' },
                  ].map((opt) => (
                    <label key={opt.id} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3">
                      <input
                        type="checkbox"
                        checked={topics.includes(opt.id)}
                        onChange={() => toggleTopic(opt.id)}
                      />
                      <span className="text-sm text-gray-800">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="block text-sm font-medium text-gray-700 mb-2">
                  Would you like to test Mind’s AI (our AI psychology companion)?
                </p>
                <div className="space-y-2">
                  {[
                    { id: 'yes', label: 'Yes, I would love to test it' },
                    { id: 'maybe', label: 'Maybe' },
                    { id: 'not_now', label: 'Not now' },
                  ].map((opt) => (
                    <label key={opt.id} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3">
                      <input
                        type="radio"
                        name="testMindAi"
                        value={opt.id}
                        checked={wantsToTestMindsAi === opt.id}
                        onChange={() => setWantsToTestMindsAi(opt.id as 'yes' | 'maybe' | 'not_now')}
                      />
                      <span className="text-sm text-gray-800">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="block text-sm font-medium text-gray-700 mb-2">
                  Would you like to join our early community for updates and opportunities?
                </p>
                <div className="space-y-2">
                  {[
                    { id: 'yes', label: 'Yes' },
                    { id: 'no', label: 'No' },
                  ].map((opt) => (
                    <label key={opt.id} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3">
                      <input
                        type="radio"
                        name="earlyCommunity"
                        value={opt.id}
                        checked={joinEarlyCommunity === opt.id}
                        onChange={() => setJoinEarlyCommunity(opt.id as 'yes' | 'no')}
                      />
                      <span className="text-sm text-gray-800">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white px-4 py-3">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={consentUpdates}
                    onChange={(e) => setConsentUpdates(e.target.checked)}
                  />
                  <span className="text-sm text-gray-700">
                    I agree to receive updates about Mind’s AI, psychology programs, internships, and events.
                  </span>
                </label>
              </div>



              {/* Package selection (moved to end) */}
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-semibold text-gray-800 mb-3">Choose your package</p>
                {!packagesLoaded ? (
                  <p className="text-sm text-gray-500">Loading packages...</p>
                ) : visiblePackages.length === 0 ? (
                  <p className="text-sm text-red-600">
                    {packagesFetchFailed
                      ? 'Package load failed. Please refresh or try again shortly.'
                      : 'No active package is available right now.'}
                  </p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {visiblePackages.map((p) => {
                      const id = p.id
                      const label = p.name
                      const amount = `₹${Math.round(p.amountPaise / 100)}`
                      const active = selectedPackageId === id
                      const tooltipId = `pkg-${id}-tip`
                      const details = packageDetails[id]

                      return (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setSelectedPackageId(id)}
                          className={`rounded-lg border px-3 py-3 text-left transition ${
                            active
                              ? 'border-emerald-500 bg-emerald-50'
                              : 'border-gray-200 bg-white hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <div className="text-xs font-semibold text-gray-800">{label}</div>
                              <div
                                className={`mt-1 text-sm font-bold ${
                                  active ? 'text-emerald-700' : 'text-gray-900'
                                }`}
                              >
                                {amount}
                              </div>
                            </div>
                            <span
                              data-tooltip-id={tooltipId}
                              data-tooltip-html={`<div style="max-width:260px"><div style="font-weight:700;margin-bottom:6px">${details.title}</div><ul style="margin:0;padding-left:18px">${details.points.map((x) => `<li style=&quot;margin:2px 0&quot;>${x}</li>`).join('')}</ul></div>`}
                              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:text-gray-700"
                              aria-label={`${label} info`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              i
                            </span>
                            <Tooltip
                              id={tooltipId}
                              place="top"
                              style={{
                                backgroundColor: '#111827',
                                color: '#fff',
                                borderRadius: 10,
                                padding: '10px 12px',
                                fontSize: 12,
                                zIndex: 60,
                              }}
                            />
                          </div>
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
                            {/* Coupon */}
                            <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm font-semibold text-gray-800 mb-2">Have a coupon code?</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCodeInput}
                    onChange={(e) => setCouponCodeInput(e.target.value)}
                    placeholder="Enter coupon code"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                  />
                  <button
                    type="button"
                    onClick={applyCoupon}
                    disabled={isApplyingCoupon || !couponCodeInput.trim()}
                    className="px-4 rounded-lg font-medium text-white bg-[#6B9E5A] hover:bg-[#5d8b4e] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isApplyingCoupon ? 'Applying...' : 'Apply'}
                  </button>
                </div>
                {couponError && <p className="mt-2 text-sm text-red-600">{couponError}</p>}
                {appliedCouponCode && (
                  <p className="mt-2 text-sm text-emerald-700">
                    Coupon applied ({appliedCouponCode}). New price: ₹{payRupees}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="webinar-message" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message (optional)
                </label>
                <textarea
                  id="webinar-message"
                  placeholder="Anything you'd like to share (optional)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 resize-y min-h-[90px]"
                />
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 rounded-lg font-medium border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 transition-colors disabled:opacity-70"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    !!couponCodeInput.trim() && !appliedCouponCode ||
                    !selectedPackage ||
                    visiblePackages.length === 0
                  }
                  className="flex-1 py-3.5 rounded-lg font-medium text-white bg-[#6B9E5A] hover:bg-[#5d8b4e] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? 'Opening payment...'
                    : `Pay ₹${payRupees} & Register`}
                </button>
              </div>
            </>
          )}

          {error && (
            <p className="text-sm text-red-600">
              {error}
            </p>
          )}
        </form>
      </div>

    </section>
  )
}
