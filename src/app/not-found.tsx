'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gradient-to-br from-[#FFF8F8] to-white flex items-center justify-center px-4 py-16'>
        <div className='container mx-auto max-w-4xl text-center'>
          {/* Animated 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className='mb-8'
          >
            <h1 className='text-9xl sm:text-[12rem] font-bold text-[#84B357] leading-none font-mon'>
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='mb-8'
          >
            <h2 className='text-4xl sm:text-5xl font-bold text-[#2C5F5D] mb-4 font-mon'>
              Page Not Found
            </h2>
            <p className='text-xl sm:text-2xl text-gray-600 font-light font-mon max-w-2xl mx-auto leading-relaxed'>
              Oops! The page you&apos;re looking for seems to have wandered off. 
              Don&apos;t worry, we&apos;re here to help you find your way back.
            </p>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='flex justify-center gap-4 mb-12'
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2
              }}
              className='w-16 h-16 bg-[#84B357]/20 rounded-full'
            />
            <motion.div
              animate={{ 
                rotate: [0, -15, 15, -15, 0],
                scale: [1, 1.2, 1, 1.2, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                delay: 0.5
              }}
              className='w-12 h-12 bg-[#84B357]/30 rounded-full'
            />
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                delay: 1
              }}
              className='w-16 h-16 bg-[#84B357]/20 rounded-full'
            />
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-[#84B357] text-white px-8 py-4 rounded-lg font-medium font-mon text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2'
              >
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
                </svg>
                Go Home
              </motion.button>
            </Link>
            
            <Link href="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-white text-[#84B357] border-2 border-[#84B357] px-8 py-4 rounded-lg font-medium font-mon text-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2'
              >
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
                </svg>
                Contact Us
              </motion.button>
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='mt-12 pt-8 border-t border-gray-200'
          >
            <p className='text-gray-500 font-mon mb-4'>You might be looking for:</p>
            <div className='flex flex-wrap justify-center gap-4'>
              <Link 
                href="/about-us"
                className='text-[#84B357] hover:text-[#6a8f45] font-mon transition-colors duration-300'
              >
                About Us
              </Link>
              <span className='text-gray-300'>•</span>
              <Link 
                href="/product"
                className='text-[#84B357] hover:text-[#6a8f45] font-mon transition-colors duration-300'
              >
                Our Products
              </Link>
              <span className='text-gray-300'>•</span>
              <Link 
                href="/contact-us"
                className='text-[#84B357] hover:text-[#6a8f45] font-mon transition-colors duration-300'
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}
