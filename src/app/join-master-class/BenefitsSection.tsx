import { FaBrain } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
export function BenefitsSection() {


  return (
    <section id="content" className="relative py-14 lg:py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl  font-bold text-gray-900 leading-tight mb-4 text-center">
          What Participants Will Receive
        </h2>
        <p className="text-lg sm:text-xl text-black mb-12 text-center">
          Exclusive benefits for masterclass attendees
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-gray-100">
            <div className="bg-emerald-100 rounded-lg p-3 mb-4 flex items-center justify-center w-12 h-12 text-[#77b53d]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Certificate of Participation</h3>
            <p className="text-gray-700 text-sm">
              Official completion certificate to showcase your learning
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-gray-100">
            <div className="bg-emerald-100 rounded-lg p-3 mb-4 flex items-center justify-center w-12 h-12 text-[#77b53d]">
              <FaBrain className="w-6 h-6"/>
             
        
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Deep AI Psychology Insights</h3>
            <p className="text-gray-700 text-sm">
              Cutting-edge research and practical applications
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-gray-100">
            <div className="bg-emerald-100 rounded-lg p-3 mb-4 flex items-center justify-center w-12 h-12 text-[#77b53d]">
            <FaRocket className="w-6 h-6"/>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Early Platform Access</h3>
            <p className="text-gray-700 text-sm">First access to Mind&apos;s AI beta platform</p>
          </div>

          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-gray-100">
            <div className="bg-emerald-100 rounded-lg p-3 mb-4 flex items-center justify-center w-12 h-12 text-[#77b53d]">
            <IoChatbubbles className="w-6 h-6"/>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Live Q&A Session</h3>
            <p className="text-gray-700 text-sm">Direct interaction with Mind&apos;s AI founders</p>
          </div>
        </div>
      </div>
    </section>
  );
}

