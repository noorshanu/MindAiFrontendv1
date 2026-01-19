'use client'

import React from 'react'
import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='relative bg-[#83b358] overflow-hidden'>
      {/* Top Yellow Line */}
      <div className='h-1 bg-[#84B357] w-full'></div>

      {/* Content */}
      <div className='relative z-10 container mx-auto max-w-7xl px-4 pt-12 pb-8'>
        {/* Main Footer Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-4 gap-8 mb-12'>
          {/* Leftmost Section - Logo & Tagline */}
          <div>
            <Link href='/' className='inline-block mb-4'>
              <h2 className='text-3xl font-bold font-mon'>
                <span className='text-[#000]'>MIND&apos;S</span>{' '}
                <span className='text-white'>AI</span>
              </h2>
            </Link>
            <p className='text-white text-sm leading-relaxed mb-2'>
              Creating visual stories that drive results.
            </p>
            <p className='text-white text-sm leading-relaxed'>
              Your partner in digital excellence.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className='text-[#000] font-bold font-mon mb-4 text-lg'>
              Quick Links
            </h3>
            <nav className='flex flex-col space-y-2'>
              <Link
                href='/'
                className='text-white hover:text-[#000] transition-colors font-mon text-sm'
              >
                Home
              </Link>
              <Link
                href='/products'
                className='text-white hover:text-[#000] transition-colors font-mon text-sm'
              >
                Products
              </Link>

              <Link
                href='/about-us'
                className='text-white hover:text-[#000] transition-colors font-mon text-sm'
              >
                About Us
              </Link>
              <Link
                href='/contact-us'
                className='text-white hover:text-[#000] transition-colors font-mon text-sm'
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Services Section */}
          <div>
            <h3 className='text-[#000] font-bold font-mon mb-4 text-lg'>
              Services
            </h3>
            <nav className='flex flex-col space-y-2'>
              <Link
                href='/products'
                className='text-white hover:text-[#000] transition-colors font-mon text-sm'
              >
                AI Therapy Chat
              </Link>
              <Link
                href='/products'
                className='text-white hover:text-[#000] transition-colors font-mon text-sm'
              >
                VR Therapy Mode
              </Link>
              <Link
                href='/products'
                className='text-white hover:text-[#000] transition-colors font-mon text-sm'
              >
                Mood Prediction
              </Link>
              <Link
                href='/products'
                className='text-white hover:text-[#000] transition-colors font-mon text-sm'
              >
                Avatar Therapy
              </Link>
              <Link
                href='/products'
                className='text-white hover:text-[#000] transition-colors font-mon text-sm'
              >
                Exposure Therapy
              </Link>
            </nav>
          </div>

          {/* Contact & Follow Us Section */}
          <div>
            <h3 className='text-[#000] font-bold font-mon mb-4 text-lg'>
              Contact
            </h3>
            <div className='space-y-4 mb-6'>
              {/* Email */}
              <div className='flex items-start gap-3'>
                <svg className='w-5 h-5 text-white shrink-0 mt-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
                <p className='text-white text-sm'>iskrtipsychologysolutions@gmail.com</p>
              </div>

              {/* Phone */}
              <div className='flex items-start gap-3'>
                <svg className='w-5 h-5 text-white shrink-0 mt-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                </svg>
                <p className='text-white text-sm'>+91 6235877369</p>
              </div>

              {/* Location */}
              <div className='flex items-start gap-3'>
                <svg className='w-5 h-5 text-white shrink-0 mt-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
                <p className='text-white text-sm leading-relaxed'>
                  Iskrti Psychology Solutions Pvt ltd<br />
                  101, Oxford Tower, Kodihalli, Bangalore
                </p>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className='text-white font-bold font-mon mb-3 text-sm'>
                Follow Us
              </h4>
              <div className='flex items-center gap-3'>
                {/* Instagram */}
                <Link
                  href='https://www.instagram.com/_minds_ai?igsh=NGd3emszeDBqY3Fq'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-[#2C5F5D] rounded-lg flex items-center justify-center hover:bg-[#1a3d3b] transition-colors'
                  aria-label='Instagram'
                >
                  <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                  </svg>
                </Link>

                {/* YouTube */}
                <Link
                  href='https://www.facebook.com/profile.php?id=61571434214906'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-[#2C5F5D] rounded-lg flex items-center justify-center hover:bg-[#1a3d3b] transition-colors'
                  aria-label='YouTube'
                >
                  <FaFacebookF className='text-white text-2xl' />
                </Link>

                {/* LinkedIn */}
                <Link
                  href='https://www.linkedin.com/company/iskrti-psychology-solutions/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-[#2C5F5D] rounded-lg flex items-center justify-center hover:bg-[#1a3d3b] transition-colors'
                  aria-label='LinkedIn'
                >
                  <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                  </svg>
                </Link>

                {/* Twitter */}
                <Link
                  href='https://x.com/Minds_Ai_'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 bg-[#2C5F5D] rounded-lg flex items-center justify-center hover:bg-[#1a3d3b] transition-colors'
                  aria-label='Twitter'
                >
                  <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-400/30 pt-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            {/* Copyright */}
            <p className='text-white text-sm font-mon'>
              &copy; {new Date().getFullYear()} Mind&apos;s AI. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className='flex items-center gap-6'>
              <Link
                href='/privacy-policy'
                target='_blank'
                className='text-white hover:text-[#000000] transition-colors font-mon text-sm'
              >
                Privacy Policy
              </Link>
              <Link
                href='/terms'
                target='_blank'
                className='text-white hover:text-[#000000] transition-colors font-mon text-sm'
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer