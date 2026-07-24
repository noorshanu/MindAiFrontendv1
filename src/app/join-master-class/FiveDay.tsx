import React from 'react'

const FiveDay = () => {
  const days = [
    {
      step: 1,
      title: 'Orientation',
      subtitle: 'Where Human Intelligence Meets Artificial Intelligence',
      points: [
        "Welcome to Mind'sAI & workshop onboarding",
        'Explore the intersection of Psychology and AI',
        'Understand ethical AI practices and set up essential tools',
        'Connect with mentors and fellow participants',
      ],
    },
    {
      step: 2,
      title: 'AI in Psychology',
      subtitle: "Understanding AI's Impact on Modern Psychology",
      points: [
        'Discover how AI is transforming mental healthcare',
        'Learn prompt engineering and effective AI communication',
        'Explore cognitive biases, AI-assisted thinking, and practical applications',
      ],
    },
    {
      step: 3,
      title: 'Chatbots & NLP',
      subtitle: 'How AI Understands Human Language & Emotions',
      points: [
        'Learn the fundamentals of AI, Machine Learning & NLP',
        'Explore conversational AI and emotion recognition',
        'Experience hands-on AI tools used in psychology, education, and research',
      ],
    },
    {
      step: 4,
      title: 'Build Products',
      subtitle: 'Design AI-Powered Mental Health Solutions',
      points: [
        'Understand digital mental health ecosystems',
        'Learn product ideation, prototyping, and AI integration',
        'Build and pitch your own AI-powered wellness solution',
      ],
    },
    {
      step: 5,
      title: 'VR Therapy',
      subtitle: 'Experience the Future of Immersive Mental Healthcare',
      points: [
        'Explore Virtual & Augmented Reality in therapy',
        'Understand applications in anxiety, PTSD, and stress management',
        'Discuss ethical considerations and future innovations',
      ],
    },
    {
      step: 6,
      title: 'Career Strategy',
      subtitle: 'Prepare for the Future of AI-Driven Psychology',
      points: [
        'Explore emerging careers at the intersection of AI and psychology',
        'Build your professional profile and personal brand',
        'Receive mentor feedback and refine your final project',
      ],
    },
    {
      step: 7,
      title: 'Project Showcase & Certification',
      subtitle: 'Present, Celebrate & Get Certified',
      points: [
        'Showcase your capstone project to an expert panel',
        'Receive personalised feedback and industry insights',
        'Network with peers and mentors',
        "Earn your Mind'sAI Certification and celebrate your achievement",
      ],
    },
  ]

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-extrabold text-[#0f172a] sm:text-3xl">7-Day Journey</h2>
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
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold leading-tight text-[#0f172a] sm:text-xl">
                    Day {day.step} – {day.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#77b53d] sm:text-base">{day.subtitle}</p>
                  <ul className="mt-2.5 space-y-1.5">
                    {day.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#77b53d]" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
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
