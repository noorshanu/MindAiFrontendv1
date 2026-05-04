import React from 'react'

const WhatYouLearn = () => {
  const cards = [
    {
      title: 'AI in Psychology',
      desc: 'Understand real-world applications of artificial intelligence transforming mental health care and therapeutic practices.',
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M9 2h6v2h2a2 2 0 012 2v3h-2V6h-2v2H9V6H7v3H5V6a2 2 0 012-2h2V2zm-2 9h10a3 3 0 013 3v5a3 3 0 01-3 3H7a3 3 0 01-3-3v-5a3 3 0 013-3zm2 3v2h2v-2H9zm4 0v2h2v-2h-2zM3 10h2v2H3v-2zm16 0h2v2h-2v-2z" />
        </svg>
      ),
    },
    {
      title: 'Chatbots & NLP',
      desc: 'How AI understands emotions through natural language processing and conversational AI technologies.',
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4 4h16a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4v-4H4a2 2 0 01-2-2V6a2 2 0 012-2zm3 6h6v2H7v-2zm8 0h2v2h-2v-2z" />
        </svg>
      ),
    },
    {
      title: 'Mental Health Apps',
      desc: 'From idea to product - learn the complete journey of building AI-powered mental wellness applications.',
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm5 17a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM8 5v11h8V5H8z" />
        </svg>
      ),
    },
    {
      title: 'VR Therapy',
      desc: 'Future of immersive healing through virtual reality and augmented reality therapeutic interventions.',
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2h-3l-2-3h-6l-2 3H4a2 2 0 01-2-2V8a2 2 0 012-2zm3 4a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
      ),
    },
    {
      title: 'Career Paths',
      desc: 'New roles in AI-driven psychology and how to position yourself for emerging opportunities.',
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M9 3h6a2 2 0 012 2v2h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2h3V5a2 2 0 012-2zm0 4h6V5H9v2z" />
        </svg>
      ),
    },
    {
      title: 'Innovation Lab',
      desc: 'Hands-on experience with cutting-edge AI tools and frameworks used in mental health tech.',
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a7 7 0 00-4 12.75V17a1 1 0 001 1h6a1 1 0 001-1v-2.25A7 7 0 0012 2zm-2 18h4v-1h-4v1zm2-5a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-2xl font-extrabold text-[#0f172a] sm:text-3xl">What You Will Learn</h2>
        <p className="mt-2 text-center text-xs text-slate-500 sm:text-base">
          Comprehensive curriculum designed to future-proof your psychology career
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_6px_16px_rgba(15,23,42,0.10)]"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f2f8ec] text-[#77b53d]">
                {card.icon}
              </div>
              <h3 className="mt-3 text-lg font-bold text-[#0f172a]">{card.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatYouLearn