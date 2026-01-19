'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  const [showModal, setShowModal] = useState(false)

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='hero-section sm:py-16 py-8 px-4'
    >
      <div className='container mx-auto max-w-7xl flex flex-col sm:flex-row justify-between gap-12 items-center'>
        {/* Left Section - Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='hero-content sm:w-1/2 w-full'
        >
          <h1 className='text-5xl sm:text-7xl font-normal text-black leading-14 sm:leading-20 sm:mt-10 mt-0 sm:mb-10 mb-4'>
            Your Personal<br />
            <span className='text-gray-800'>AI Therapist</span>
          </h1>
          <p className='sm:text-2xl text-xl text-black font-extralight leading-9 '>
            A 24/7 AI therapy platform delivering real <br />time conversations, CBT-based guidances <br />
            with a human like experience, designed for <br />
            global scalability and equipped with a crisis <br />
            mode for smart escalation to human <br />
            support in high-risk situations.

          </p>
        </motion.div>

        {/* Right Section - Logo and Buttons */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='hero-image-section flex flex-col items-center justify-center  sm:w-1/2 w-full'
        >
          {/* Logo */}
          <div className='flex justify-center hero-image-wrapper'>
            <Image
              src="/hhero.png"
              alt="MIND'S AI Logo"
              width={700}
              height={400}
              className="hero-image h-[420px] w-full object-cover"
            />
          </div>

          {/* Call-to-Action Buttons */}
          <div className='flex flex-col gap-4 w-full max-w-sm'>
            <button
              onClick={handleButtonClick}
              className='w-full bg-[#84B357] text-white py-3 px-4 rounded-2xl font-mon font-thin text-center hover:bg-[#709944] transition-colors text-2xl leading-none'
              style={{
                boxShadow: '4px 4px 13px 0px #1A4041',

              }}
            >
              CHAT WITH ISKRITI
            </button>
            <button
              onClick={handleButtonClick}
              className='w-full bg-[#84B357] text-white py-3 px-4 rounded-2xl font-mon font-thin text-center hover:bg-[#709944] transition-colors text-2xl leading-none'
              style={{
                boxShadow: '4px 4px 13px 0px #1A4041',

              }}
            >
              EXPOSURE THERAPY
            </button>
          </div>
        </motion.div>
      </div>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className='fixed inset-0 bg-black/50 bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4'
            >
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className='bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden'
              >
                {/* Decorative Elements */}
                <div className='absolute top-0 right-0 w-32 h-32 bg-[#84B357] opacity-10 rounded-full -mr-16 -mt-16' />
                <div className='absolute bottom-0 left-0 w-24 h-24 bg-[#84B357] opacity-10 rounded-full -ml-12 -mb-12' />
                
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10 cursor-pointer'
                  aria-label='Close modal'
                >
                  <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </button>

                {/* Content */}
                <div className='relative z-10 text-center'>
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className='mb-6 flex justify-center'
                  >
                    <div className='w-20 h-20 bg-[#84B357] rounded-full flex items-center justify-center'>
                      <svg className='w-10 h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className='text-3xl font-bold font-mon text-[#2C5F5D] mb-4'
                  >
                    Stay Tuned! 🚀
                  </motion.h3>

                  {/* Message */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className='text-gray-600 text-lg font-mon mb-6 leading-relaxed'
                  >
                    We&apos;re working hard to bring you the <span className='text-[#84B357] font-semibold'>Mind&apos;s AI</span> app experience. 
                    It&apos;s coming soon to both App Store and Google Play!
                  </motion.p>

                  {/* Subtext */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className='text-sm text-gray-500 font-mon mb-6'
                  >
                    Be the first to know when we launch! 🎉
                  </motion.p>

                  {/* Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={closeModal}
                    className='bg-[#84B357] text-white px-8 py-3 rounded-lg font-medium font-mon text-lg shadow-lg hover:shadow-xl transition-all duration-300'
                  >
                    Got it!
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Hero