import Link from "next/link";

export function PricingSection() {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
          Choose Your Masterclass Pass
        </h2>
        <p className="text-center text-gray-600 text-base sm:text-lg mb-12">
          Select the perfect plan for your learning journey
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-7 sm:p-8 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Basic Pass</h3>
            <div className="mb-6">
              <p className="text-sm text-gray-400 line-through">₹500</p>
              <p className="text-4xl font-extrabold text-gray-900">₹99</p>
            </div>

            <ul className="space-y-3 text-sm text-gray-700 mb-8">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#77b53d]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span>Webinar access</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#77b53d]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span>Live Q&amp;A</span>
              </li>
            </ul>

            <Link
              href="/registration?package=basic"
              className="mt-auto inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800 transition"
            >
              Get Basic Pass
            </Link>
          </div>

          <div className="relative rounded-2xl bg-[#77b53d] text-white shadow-xl p-7 sm:p-8 flex flex-col border border-emerald-500/40">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center rounded-full bg-orange-500 px-4 py-1 text-xs font-semibold shadow">
                Most Popular
              </span>
            </div>

            <h3 className="text-xl font-bold mb-4">Pro Pass</h3>
            <div className="mb-6">
              <p className="text-sm text-emerald-100 line-through">₹1100</p>
              <p className="text-4xl font-extrabold">₹299</p>
            </div>

            <ul className="space-y-3 text-sm mb-8">
              {[
                "Webinar access",
                "Certificate",
                "Recording",
                "Early access to Mind's AI",
                "Live Q&A",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 text-white">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-emerald-50">{t}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/registration?package=pro"
              className="mt-auto inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-emerald-700 shadow hover:bg-emerald-50 transition"
            >
              Get Pro Pass
            </Link>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-7 sm:p-8 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Pass</h3>
            <div className="mb-6">
              <p className="text-sm text-gray-400 line-through">₹2999</p>
              <p className="text-4xl font-extrabold text-gray-900">₹999</p>
            </div>

            <ul className="space-y-3 text-sm text-gray-700 mb-8">
              {["Everything in Pro", "Private community", "Internship opportunities"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 text-[#77b53d]">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/registration?package=premium"
              className="mt-auto inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800 transition"
            >
              Get Premium Pass
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

