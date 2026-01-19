'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar2 = () => {
  const pathname = usePathname()
  const isLoginPage = pathname === '/login'
  const isSignupPage = pathname === '/signup'

  return (
    <nav className="w-full bg-white px-6 py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link 
            href="/" 
            className="text-[#84B357] font-medium hover:text-[#6a9145] transition-colors"
          >
            HOME
          </Link>
          <Link 
            href="/vr-integration" 
            className="text-[#6B7D7D] font-medium hover:text-[#5a6a6a] transition-colors"
          >
            VR INTEGRATION
          </Link>
          <Link 
            href="/chat" 
            className="text-[#6B7D7D] font-medium hover:text-[#5a6a6a] transition-colors"
          >
            CHAT
          </Link>
        </div>

        {/* Signup/Login Button */}
        <div className="flex items-center">
          {isLoginPage && (
            <Link
              href="/signup"
              className="bg-[#4CAF50] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#45a049] transition-colors shadow-md"
            >
              Signup
            </Link>
          )}
          {isSignupPage && (
            <Link
              href="/login"
              className="bg-[#4CAF50] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#45a049] transition-colors shadow-md"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar2