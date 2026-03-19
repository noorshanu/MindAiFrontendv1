import Image from "next/image";

export function MasterclassSection() {
  return (
    <section className="relative py-14 lg:py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
            Masterclass: The Future of
            <br />
            Psychology
          </h2>
          <div className="space-y-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            <p>
              Artificial intelligence is rapidly transforming the psychology industry — from AI
              therapy assistants to gamified mental health platforms.
            </p>
            <p>
              In this masterclass, discover how psychologists can adapt, build new careers, and
              use AI tools to create better therapy experiences.
            </p>
            <p>
              Learn directly from the founders of Mind&apos;s AI, a platform building the next
              generation of digital mental health tools.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-gray-200 bg-gray-50">
              <Image
                src="/team/ceo.png"
                alt="CEO"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-sm sm:text-base font-semibold text-gray-900 leading-none">
                Our CEO/Founder
              </p>
              <p className="text-sm sm:text-base font-semibold text-[#84B357] leading-none mt-1">
                Mr.Sai Prasanth AB
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
            <Image
              src="/sec.png"
              alt="Masterclass preview"
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

