import React from 'react'

const PhysologicalField = () => {
  return (
    <section className="px-6 py-10 sm:px-9 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-xl font-extrabold leading-tight text-[#0f172a] sm:text-3xl">
          The Psychology Field Is <span className="text-[#77b53d]">Changing Fast</span>
        </h2>
        <p className="mx-auto mt-2 max-w-4xl text-center text-sm leading-relaxed text-slate-500 sm:text-base">
          AI is already transforming therapy and behavioral insights. The question is:
          <br />
          are you ready for what&apos;s coming next?
        </p>

        <div className="mt-8 rounded-3xl border border-[#e2ecd7] border-l-4 border-l-[#77b53d] bg-[#f3f8ed] px-5 py-5 sm:px-7 sm:py-6">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#77b53d] text-white">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M9 21h6v-1H9v1zm3-19a7 7 0 00-4 12.75V17a1 1 0 001 1h6a1 1 0 001-1v-2.25A7 7 0 0012 2zm2.5 11.6l-.5.3V16h-4v-2.1l-.5-.3A5 5 0 1114.5 13.6z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold leading-tight text-[#0f172a] sm:text-2xl">
                This workshop prepares you for what&apos;s coming next.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                Whether you&apos;re a student, practitioner or career-changer, understanding AI&apos;s role in
                mental health is no longer optional—it&apos;s essential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhysologicalField