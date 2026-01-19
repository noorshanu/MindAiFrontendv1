'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const Appdownload = () => {
  const [showModal, setShowModal] = useState(false)

  const handleAppClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <section className='relative py-16 px-4 overflow-hidden'>
      {/* Background */}
      <div className='absolute  right-0 sm:top-16   sm:bottom-0 bottom-2'>
        <Image
          src="/bgbg.png"
          alt="Background"
      width={700}
      height={600}
          className='sm:w-[700px] w-full sm:h-[670px] h-[470px]'
        />
      </div>

      <div className='container mx-auto max-w-7xl relative z-10'>
        <div className='flex flex-col lg:flex-row items-center gap-12'>
          {/* Left Side - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='w-full lg:w-1/2'
          >
            <h2 className='text-4xl md:text-[80px] font-bold mb-8 sm:leading-21 leading-10'>
              Download  <span className='font-extralight'>the</span> <br /> <span className='text-black'>MIND&apos;S</span>{' '}
              <span className='text-[#84B357]'>AI</span>  <br /> <span className='text-black font-extralight'>app</span>
            </h2>
            
            <p className='text-gray-700 text-base md:text-lg leading-7 mb-8 font-light max-w-xl'>
              Mind&apos;s AI is an AI-driven mental wellness platform designed to understand human emotions, 
              relationships, and inner conflicts. Acting as a calm, unbiased third voice, it helps people 
              navigate stress, misunderstandings, and emotional challenges with clarity and balance. By 
              combining psychological intelligence, guided conversations, and personalized support, Mind&apos;s 
              AI makes mental well-being accessible, stigma-free, and human centered. Not just artificial 
              intelligence emotional intelligence, redefined.
            </p>

            {/* App Store Badges */}
            <div className='flex flex-row gap-4'>
              <motion.button
                onClick={handleAppClick}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='inline-block cursor-pointer bg-transparent border-none p-0'
              >
                <Image
                  src="/appstore.png"
                  alt="Download on the App Store"
                  width={180}
                  height={60}
                  className='h-auto'
                />
              </motion.button>
              
              <motion.button
                onClick={handleAppClick}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='inline-block cursor-pointer bg-transparent border-none p-0'
              >
                <Image
                  src="/googleplay.png"
                  alt="Get it on Google Play"
                  width={180}
                  height={60}
                  className='h-auto'
                />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Phone Mockups */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='w-full lg:w-1/2 relative'
          >
            <div className='relative flex items-center justify-center'>
              <Image
                src="/mobdown.png"
                alt="Mobile App Preview"
                width={600}
                height={800}
                className='w-full ]'
              />
            </div>
          </motion.div>
        </div>
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
    </section>
  )
}

export default Appdownload