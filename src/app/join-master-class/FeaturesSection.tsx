import { FaRobot } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { FaVrCardboard } from "react-icons/fa";
import { FaMountainSun } from "react-icons/fa6";

export function FeaturesSection() { 
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          See the Future of Digital Therapy
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          Experience Mind&apos;s AI platform features
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-[#d2eabc] rounded-2xl p-6 sm:p-8 border border-[#E9F1E1]">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#84B357] text-white mb-4">
              <FaRobot className="w-8 h-8"/>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">AI Psychologist Conversations</h3>
            <p className="text-gray-700 text-sm mb-4">
              Real-time AI conversations designed to listen, guide and support like a therapist.
            </p>
            <div className="rounded-xl bg-emerald-100/80 p-4 flex items-start gap-3">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-[#84B357] flex items-center justify-center text-white">
                <FaRobot className="w-4 h-4"/>
              </div>
              <p className="text-sm text-gray-700 italic">
                How are you feeling today? I&apos;m here to listen...
              </p>
            </div>
          </div>

          <div className="bg-[#d2eabc] rounded-2xl p-6 sm:p-8 border border-[#E9F1E1]">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#77b53d] text-white mb-4">
              <FaChartLine className="w-8 h-8"/>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Mood Prediction &amp; Smart Journaling
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Track emotional patterns and discover triggers using AI-powered mood analysis.
            </p>
            <div className="rounded-xl bg-emerald-100/80 p-4">
              <p className="text-xs font-medium text-gray-600 mb-2">Today&apos;s Mood</p>
              <div className="h-2 rounded-full bg-emerald-200 overflow-hidden mb-2">
                <div className="h-full w-3/4 rounded-full bg-[#84B357]" />
              </div>
              <p className="text-sm font-medium text-gray-800 flex items-center gap-1">
                Positive <span aria-hidden>😊</span>
              </p>
            </div>
          </div>

          <div className="bg-[#d2eabc] rounded-2xl p-6 sm:p-8 border border-[#E9F1E1]">
            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#84B357] text-white mb-4">
              <FaVrCardboard className="w-8 h-8"/>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">VR Therapy Environment</h3>
            <p className="text-gray-700 text-sm mb-4">
              Step into a peaceful virtual therapy space and experience immersive mental wellness
              support.
            </p>
            <div className="rounded-2xl bg-[#E9F1E1] p-6 sm:p-7 flex flex-col items-center justify-center text-center">
              <div className="h-14 w-14 rounded-full bg-[#84B357] flex items-center justify-center text-white mb-4">
                <FaMountainSun className="w-6 h-6" />
              </div>
              <p className="text-base font-medium text-[#84B357]">Peaceful Mountain View</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

