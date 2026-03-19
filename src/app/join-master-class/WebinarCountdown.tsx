'use client'

import React, { useState, useEffect } from 'react'

const WEBINAR_DATE = new Date('2026-03-29T13:00:00+05:30')

function getTimeLeft(target: Date) {
  const now = new Date()
  const diff = target.getTime() - now.getTime()
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true }
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { days, hours, minutes, seconds, isPast: false }
}

function pad(n: number) {
  return n.toString().padStart(2, '0')
}

export function WebinarCountdown() {
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(WEBINAR_DATE))

  useEffect(() => {
    setMounted(true)
    const tick = () => setTimeLeft(getTimeLeft(WEBINAR_DATE))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: mounted ? timeLeft.days : 0, label: 'Days' },
    { value: mounted ? timeLeft.hours : 0, label: 'Hours' },
    { value: mounted ? timeLeft.minutes : 0, label: 'Minutes' },
    { value: mounted ? timeLeft.seconds : 0, label: 'Seconds' },
  ]

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#0c1222]">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(52,211,153,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(52,211,153,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          <div className="lg:col-span-5 flex flex-col justify-center p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] text-emerald-400/90 uppercase mb-2">
              Hosted by
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-4">
              Mind&apos;s <span className="text-emerald-400">AI</span> Team
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              To explore the future of{' '}
              <span className="text-emerald-300/90 font-medium">psychology and technology</span>
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center p-6 sm:p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-400 uppercase mb-3">
              Save the date
            </p>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2">
              29 March 2026
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-300">
              1:00 PM – 1:45 PM IST
            </p>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-4 sm:gap-6">
          {units.map(({ value, label }) => (
            <div key={label} className="group relative flex flex-col items-center">
              <div
                className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_40px_-8px_rgba(52,211,153,0.4)] transition-all duration-300 group-hover:border-emerald-400/50 group-hover:shadow-[0_0_50px_-8px_rgba(52,211,153,0.5)]"
                style={
                  label === 'Seconds'
                    ? {
                        boxShadow:
                          '0 0 40px -8px rgba(52,211,153,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
                      }
                    : undefined
                }
              >
                <span className="text-3xl sm:text-4xl font-bold tabular-nums text-emerald-300 font-mono">
                  {pad(value)}
                </span>
              </div>
              <span className="mt-2 text-[11px] sm:text-xs font-medium text-slate-500 uppercase tracking-widest">
                {label}
              </span>
            </div>
          ))}
        </div>

        {timeLeft.isPast && mounted && (
          <p className="mt-10 text-center text-slate-400 text-sm sm:text-base">
            This webinar has ended. Thank you for your interest.
          </p>
        )}
      </div>
    </section>
  )
}
