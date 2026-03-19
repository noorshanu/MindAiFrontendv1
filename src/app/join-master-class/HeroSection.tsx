"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const MASTERCLASS_START_MS = Date.parse("2026-03-29T15:30:00+05:30"); // 3:30 PM IST

export function HeroSection() {
  // Important: keep the initial render stable to avoid hydration mismatch.
  // We compute the real countdown only after mount (client-side) in useEffect.
  const [secondsLeft, setSecondsLeft] = useState<number>(0);

  useEffect(() => {
    const getSecondsLeft = () =>
      Math.max(0, Math.floor((MASTERCLASS_START_MS - Date.now()) / 1000));

    // Set immediately after mount so the countdown starts without waiting.
    setSecondsLeft(getSecondsLeft());
    const id = window.setInterval(() => {
      setSecondsLeft(getSecondsLeft());
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const timeText = useMemo(() => {
    const total = Math.max(0, secondsLeft);
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
  }, [secondsLeft]);

  return (
    <section className="relative min-h-[90vh] flex flex-col md:flex-row items-stretch bg-white">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-10 lg:py-16 max-w-2xl">
        <div className="mb-4 flex items-center gap-2 text-base font-medium text-[#84B357] bg-[#84B3571A] px-4 py-2 rounded-full w-fit ">
          <span className="inline-flex h-2 w-2 rounded-full bg-[#77b53d]" />
          <span>Live Masterclass • Limited Seats</span>
        </div>
        <h1 className="text-3xl sm:text-6xl font-extrabold leading-tight text-gray-900 mb-4">
          How AI Will Transform
          <br />
          <span className="text-[#77b53d]">Psychology Careers Forever</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl">
          Discover how artificial intelligence is transforming therapy, mental wellness
          platforms, and psychology careers — and how you can be part of this next wave.
        </p>

        <div className="rounded-3xl border border-gray-200 bg-white px-5 py-5 sm:px-6 sm:py-6 shadow-sm">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs text-gray-500 line-through mb-1">Actual Value: ₹999</p>
              <p className="text-2xl sm:text-3xl font-extrabold leading-none text-[#77b53d]">
                Special Price: ₹99
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-500">Limited Time</p>
              <p className="mt-1 text-xs text-gray-500">Masterclass: 29 March 2026 • 3:30 PM</p>
              <div className="mt-1 inline-flex items-center gap-2 text-rose-500 font-semibold tabular-nums">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-rose-100">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span className="text-base sm:text-base font-medium">{timeText}</span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Link
              href="/registration"
              target="_blank"
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-[#77b53d] px-6 py-3.5 text-sm sm:text-base font-medium text-white shadow hover:bg-emerald-700 transition"
            >
              Reserve Your Seat
            </Link>
            <a
              href="#content"
              className="inline-flex flex-1 items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm sm:text-base font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              View Details
            </a>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-rose-500">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5C23 14.17 18.33 13 16 13z" />
            </svg>
            <span>
              Only <span className="font-medium">47</span> seats remaining
            </span>
          </div>
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

