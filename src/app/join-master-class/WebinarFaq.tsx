'use client'

import React, { useMemo, useState } from 'react'

type FaqItem = { q: string; a: string }

export function WebinarFaq() {
  const items = useMemo<FaqItem[]>(
    () => [
      {
        q: 'Do I need technical knowledge?',
        a: 'Not at all. This masterclass is designed for beginners as well as non-technical participants. Everything will be explained in a simple, practical, and easy-to-understand way.',
      },
      {
        q: 'Will I receive a certificate?',
        a: 'Yes, participants who have registered for the Pro Pass and Premium Pass will receive an official certificate of participation.',
      },
      {
        q: 'Will the session be recorded?',
        a: 'Yes, the session will be recorded. Access to the recording will be provided exclusively to Pro Pass and Premium Pass participants.',
      },
      {
        q: 'Who should attend?',
        a: 'This masterclass is perfect for:\n- Students (Psychology, Marketing, AI, or any field)\n- Aspiring entrepreneurs & startup enthusiasts\n- Professionals curious about AI & psychology\n- Anyone interested in the future of human behavior and technology',
      },
    ],
    [],
  )

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={item.q}
                className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex((prev) => (prev === idx ? null : idx))}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-gray-900">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 -mt-1 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
