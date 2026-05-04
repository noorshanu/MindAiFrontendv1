import React from 'react'

const Whatuhwill = () => {
  const topOutcomes = [
    {
      title: 'Clear Career Direction',
      desc: 'Strategic roadmap tailored to AI-psychology convergence with actionable next steps.',
      icon: 'compass',
    },
    {
      title: 'AI Tool Exposure',
      desc: 'Hands-on experience with industry-leading platforms and frameworks.',
      icon: 'tool',
    },
    {
      title: 'Certification',
      desc: 'Industry-recognized certificate validating your AI-psychology expertise.',
      icon: 'badge',
    },
  ] as const

  const capstoneItems = [
    {
      title: 'Daily Assignments',
      desc: 'Practical exercises to reinforce concepts',
      icon: 'list',
    },
    {
      title: 'Final Presentation',
      desc: 'Showcase your AI mental health solution',
      icon: 'presentation',
    },
    {
      title: 'Real-World Application',
      desc: 'Industry-relevant project experience',
      icon: 'globe',
    },
  ] as const

  const bonusItems = [
    {
      title: "Early access to Mind's AI app",
      desc: 'Experience the future of mental wellness before anyone else.',
    },
    {
      title: 'Community Access (Veda)',
      desc: 'Connect with peers and industry professionals',
    },
    {
      title: 'Internship Opportunities',
      desc: 'Direct pathways to hands-on experience',
    },
    {
      title: 'Top Performer Recognition',
      desc: 'Showcase your excellence with special awards',
    },
  ] as const

  const renderSmallIcon = (type: string) => {
    if (type === 'tool') {
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22 7.24l-3.54.35-1.5-1.5.35-3.54-2.12-2.12-3.54.35-1.5 1.5-3.54-.35L4 4.05l.35 3.54-1.5 1.5L-.69 8.74-2.81 10.86l.35 3.54 1.5 1.5-.35 3.54L.81 22.56l3.54-.35 1.5-1.5 3.54.35 2.12-2.12-.35-3.54 1.5-1.5 3.54.35L22 12.12l-.35-3.54 1.5-1.5L22 7.24z" />
        </svg>
      )
    }
    if (type === 'badge') {
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.2 2.1 3-.4.9 2.9 2.8 1.2-1.2 2.8 1.2 2.8-2.8 1.2-.9 2.9-3-.4L12 22l-2.2-2.1-3 .4-.9-2.9-2.8-1.2 1.2-2.8-1.2-2.8 2.8-1.2.9-2.9 3 .4L12 2z" />
        </svg>
      )
    }
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5v5l4 2-1 1.73L11 13V7h2z" />
      </svg>
    )
  }

  const renderCapIcon = (type: string) => {
    if (type === 'presentation') {
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M3 3h18v12H3V3zm8 14h2v4h-2v-4zm-4 2h10v2H7v-2z" />
        </svg>
      )
    }
    if (type === 'globe') {
      return (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm7.9 9h-3.1a15.3 15.3 0 00-1.4-5 8.02 8.02 0 014.5 5zM12 4c.8 1.1 1.7 3.1 2.2 7H9.8c.5-3.9 1.4-5.9 2.2-7zm-3.4 2A15.3 15.3 0 007.2 11H4.1a8.02 8.02 0 014.5-5zm-4.5 7h3.1a15.3 15.3 0 001.4 5 8.02 8.02 0 01-4.5-5zm5.7 0h4.4c-.5 3.9-1.4 5.9-2.2 7-.8-1.1-1.7-3.1-2.2-7zm5.6 5a15.3 15.3 0 001.4-5h3.1a8.02 8.02 0 01-4.5 5z" />
        </svg>
      )
    }
    return (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4 4h16v3H4V4zm0 5h16v3H4V9zm0 5h10v3H4v-3z" />
      </svg>
    )
  }

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-extrabold text-[#0f172a] sm:text-3xl">What You&apos;ll Walk Away With</h2>
        <p className="mt-2 text-center text-xs text-slate-500 sm:text-sm">Tangible outcomes that accelerate your career</p>

        <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-2">
          {topOutcomes.slice(0, 2).map((item) => (
            <article key={item.title} className="rounded-xl border border-[#e4f2dd] bg-[#f3fff1] p-4">
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#77b53d] text-white">
                  {renderSmallIcon(item.icon)}
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#0f172a]">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-3 max-w-xl">
          <article className="rounded-xl border border-[#e4f2dd] bg-[#f3fff1] p-4">
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#77b53d] text-white">
                {renderSmallIcon(topOutcomes[2].icon)}
              </span>
              <div>
                <h3 className="text-base font-bold text-[#0f172a]">{topOutcomes[2].title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600">{topOutcomes[2].desc}</p>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-10 rounded-2xl bg-[#67a93a] px-6 py-8 text-white shadow-[0_12px_25px_rgba(15,23,42,0.18)] sm:px-8">
          <h3 className="text-center text-2xl font-extrabold sm:text-3xl">Capstone Project</h3>
          <p className="mt-2 text-center text-xs text-white/85 sm:text-sm">Transform learning into real-world application</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {capstoneItems.map((item) => (
              <article key={item.title} className="text-center">
                <span className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-white">
                  {renderCapIcon(item.icon)}
                </span>
                <h4 className="mt-3 text-base font-bold">{item.title}</h4>
                <p className="mt-1 text-xs text-white/85">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-[#dff4d8] bg-[#eaffea] px-5 py-7 sm:px-7 sm:py-8">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-[#77b53d] px-3 py-1 text-[10px] font-semibold text-white">EXCLUSIVE BONUSES</span>
            <h3 className="mt-3 text-2xl font-extrabold text-[#0f172a] sm:text-3xl">Premium Add-Ons Included</h3>
            <p className="mt-2 text-xs text-slate-600 sm:text-sm">Maximize your investment with these valuable resources</p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {bonusItems.map((item) => (
              <article key={item.title} className="rounded-xl border border-[#dce8d9] bg-white px-4 py-3 shadow-[0_6px_14px_rgba(15,23,42,0.10)]">
                <div className="flex items-start gap-2.5">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#f1f8eb] text-[#77b53d]">★</span>
                  <div>
                    <h4 className="text-sm font-bold text-[#0f172a]">{item.title}</h4>
                    <p className="mt-0.5 text-[11px] text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Whatuhwill