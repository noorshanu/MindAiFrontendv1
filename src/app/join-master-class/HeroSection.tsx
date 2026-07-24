"use client";

import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col md:flex-row items-stretch bg-white">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-9 lg:px-14 py-7 lg:py-10 max-w-4xl">
        <h1 className="text-xl sm:text-3xl font-extrabold leading-tight text-gray-900 mb-3">
          India&apos;s First 7-Day AI × Psychology
          <br />
          <span className="text-[#77b53d]">Master Certification</span>
          <br />
          <span className="text-[#77b53d]">Workshop</span>
        </h1>
        <p className="text-[#475569] text-sm sm:text-base mb-5 max-w-3xl leading-relaxed">
          Discover how AI is becoming a powerful tool to support mental health professionals,
          enhance psychological practice, improve research, and expand access to mental health
          services—without replacing human empathy in just 7 days.
        </p>

        <ul className="space-y-2.5 text-sm sm:text-base text-[#334155] mb-5">
          {[
            "Live Interactive Sessions",
            "Build Real AI-Powered Psychology Projects",
            "Industry Certification",
            "Career Guidance",
            "Capstone Presentation",
          ].map((point) => (
            <li key={point} className="flex items-center gap-3 leading-tight">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#77b53d] text-white text-sm">
                ✓
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div>
          <Link
            href="/registration"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-[#77b53d] px-6 py-2.5 text-sm sm:text-base font-semibold text-white shadow-[0_10px_25px_rgba(119,181,61,0.35)] hover:bg-[#6fa93a] transition"
          >
            Register Now
          </Link>
        </div>
      </div>

      {/* Right hero image */}
      <div className="relative flex-1 min-h-[260px] md:min-h-[90vh]">
        <Image
          src="/web-hero.png"
          alt="India's First 7-Day AI × Psychology Master Certification Workshop"
          fill
          priority
          className="object-contain object-center sm:object-right"
          sizes="(min-width: 768px) 40vw, 80vw"
        />
      </div>
    </section>
  );
}

