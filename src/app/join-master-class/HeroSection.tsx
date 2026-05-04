"use client";

import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col md:flex-row items-stretch bg-white">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-9 lg:px-14 py-7 lg:py-10 max-w-4xl">
        <h1 className="text-xl sm:text-3xl font-extrabold leading-tight text-gray-900 mb-3">
          5 days certificate course
          <br />
          on mastering Ai for
          <br />
          <span className="text-[#77b53d]">Next Gen Professional</span>
          <br />
          <span className="text-[#77b53d]">Psychology Practice</span>
        </h1>
        <p className="text-[#475569] text-sm sm:text-base mb-5 max-w-3xl leading-relaxed">
          Learn how to stay ahead in the AI-driven mental health future in just 5 days.
        </p>

        <ul className="space-y-2.5 text-sm sm:text-base text-[#334155] mb-5">
          {[
            "AI + Psychology career roadmap",
            "Hands-on tools & real-world exposure",
            "Build your own mental health product idea",
            "Certificate + portfolio project",
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
          alt="How AI will transform psychology careers webinar"
          fill
          priority
          className="object-contain object-center sm:object-right"
          sizes="(min-width: 768px) 40vw, 80vw"
        />
      </div>
    </section>
  );
}

