import React from 'react'

const FiveDay = () => {
  const days = [
    {
      step: 1,
      title: 'The Shift',
      description:
        "Understanding AI's impact on psychology - explore the paradigm shift in mental health care and therapeutic interventions.",
    },
    {
      step: 2,
      title: 'Inside AI',
      description:
        'Basics of AI, NLP, and tools - demystify the technology powering the future of mental health.',
    },
    {
      step: 3,
      title: 'Build Products',
      description:
        'Create your own app idea - turn concepts into actionable mental health solutions with AI integration.',
    },
    {
      step: 4,
      title: 'VR Therapy',
      description:
        'Explore immersive experiences - discover how virtual reality is revolutionizing therapeutic treatment.',
    },
    {
      step: 5,
      title: 'Career Strategy',
      description:
        'Position yourself for the future - strategic roadmap to thrive in the AI-powered psychology landscape.',
    },
  ]

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-extrabold text-[#0f172a] sm:text-3xl">5-Day Journey</h2>
        <p className="mt-2 text-center text-xs text-slate-500 sm:text-base">Your transformative learning path</p>

        <div className="mt-8 space-y-3 sm:space-y-4">
          {days.map((day) => (
            <article
              key={day.step}
              className="rounded-2xl border border-[#e6efe0] border-l-4 border-l-[#77b53d] bg-white px-4 py-4 shadow-[0_8px_18px_rgba(15,23,42,0.10)] sm:px-6"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#77b53d] text-sm font-bold text-white">
                  {day.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight text-[#0f172a] sm:text-xl">{day.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">{day.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FiveDay