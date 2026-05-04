import Link from "next/link";

export function PricingSection() {
  const includedItems = [
    "5-day live interactive sessions",
    "Industry-recognized certificate",
    "Daily assignments and capstone project",
    "Lifetime community access",
    "AI tools resource kit",
    "Internship opportunities",
    "Portfolio project for career advancement",
  ];

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
              <p className="text-lg font-bold sm:text-2xl">Workshop Access</p>
              <p className="mt-1 text-3xl font-extrabold sm:text-4xl">₹1,499</p>
              <p className="mt-1 text-xs text-white/90 sm:text-sm">Limited time early bird pricing</p>
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
                href="/registration?package=premium"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#77b53d] px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-[#6fa93a] transition sm:text-base"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

