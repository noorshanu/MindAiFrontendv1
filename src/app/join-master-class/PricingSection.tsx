'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const API_ROOT = (process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.mindsai.live').replace(
  /\/api\/?$/,
  '',
)

function unwrap(raw: unknown): Record<string, unknown> {
  if (!raw || typeof raw !== 'object') return {}
  const o = raw as Record<string, unknown>
  const inner = o['data']
  if (inner && typeof inner === 'object' && !Array.isArray(inner)) {
    return { ...o, ...(inner as Record<string, unknown>) }
  }
  return o
}

type Pkg = { id: string; name: string; amountPaise: number; active: boolean }

function formatInr(paise: number) {
  const rupees = Math.round(paise / 100)
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(rupees)
}

export function PricingSection() {
  const includedItems = [
    '5-day live interactive sessions',
    'Industry-recognized certificate',
    'Daily assignments and capstone project',
    'Lifetime community access',
    'AI tools resource kit',
    'Internship opportunities',
    'Portfolio project for career advancement',
  ]

  const [priceLabel, setPriceLabel] = useState<string>('…')
  const [packageName, setPackageName] = useState('Workshop Access')
  const [packageId, setPackageId] = useState<'basic' | 'pro' | 'premium'>('premium')
  const [loadFailed, setLoadFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch(`${API_ROOT}/api/webinar/packages`)
        const data = unwrap(await res.json().catch(() => ({})))
        if (cancelled) return
        const packages = Array.isArray(data.packages) ? (data.packages as Pkg[]) : []
        const active = packages.filter((p) => p.active !== false)
        // Prefer premium (landing CTA), else highest priced active, else first
        const featured =
          active.find((p) => p.id === 'premium') ||
          [...active].sort((a, b) => b.amountPaise - a.amountPaise)[0] ||
          packages[0]
        if (!featured) {
          setLoadFailed(true)
          setPriceLabel('—')
          return
        }
        setPackageName(featured.name || 'Workshop Access')
        setPriceLabel(formatInr(featured.amountPaise))
        if (featured.id === 'basic' || featured.id === 'pro' || featured.id === 'premium') {
          setPackageId(featured.id)
        }
      } catch {
        if (!cancelled) {
          setLoadFailed(true)
          setPriceLabel('—')
        }
      }
    })()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className="relative bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-xl font-extrabold text-[#0f172a] sm:text-3xl">
          Investment in <span className="text-[#77b53d]">Your Future</span>
        </h2>
        <p className="text-center text-gray-600 text-sm sm:text-base mb-9">
          Select the perfect plan for your learning journey
        </p>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-[#e4eadc] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.10)]">
            <div className="bg-[#77b53d] px-6 py-6 text-center text-white sm:px-8 sm:py-7">
              <p className="text-lg font-bold sm:text-2xl">{packageName}</p>
              <p className="mt-1 text-3xl font-extrabold sm:text-4xl">{priceLabel}</p>
              <p className="mt-1 text-xs text-white/90 sm:text-sm">
                {loadFailed
                  ? 'Price unavailable — open registration to see live pricing'
                  : 'Live pricing from Mind\'s AI'}
              </p>
            </div>

            <div className="px-6 py-7 sm:px-8 sm:py-8">
              <h3 className="text-lg font-bold text-[#0f172a] sm:text-xl">What&apos;s Included:</h3>
              <ul className="mt-4 space-y-2 text-xs text-slate-600 sm:text-sm">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#77b53d] text-xs text-white sm:h-6 sm:w-6">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/registration?package=${packageId}`}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#77b53d] px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#6fa93a] transition sm:text-base"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
