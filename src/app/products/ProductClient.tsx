'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FaComments, FaVrCardboard, FaChartLine, FaUser, FaShieldAlt, FaArrowRight } from 'react-icons/fa'
import Appdownload from '@/components/Appdownload'

const ProductClient = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gradient-to-br from-[#FFF8F8] to-white py-12 px-4'>
        <div className='container mx-auto max-w-7xl'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h1 className='text-5xl font-bold font-mon mb-4 text-[#2C5F5D]'>
              Our <span className='text-[#84B357]'>Products</span>
            </h1>
            <p className='text-gray-600 text-lg font-mon max-w-2xl mx-auto'>
              Discover our comprehensive suite of AI-powered mental wellness tools designed to support your mental health journey.
            </p>
          </motion.div>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
            {/* AI Therapy Chat Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='bg-white rounded-2xl p-6 relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
              style={{
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            >
              <div className='flex justify-between items-start mb-4'>
                <div className='bg-[#84B357] bg-opacity-10 rounded-xl p-3'>
                  <FaComments className='w-6 h-6 text-[#ffffff]' />
                </div>
                <div className='bg-[#84B357] bg-opacity-10 rounded-xl p-2 cursor-pointer hover:bg-[#84B357] hover:bg-opacity-20 transition-colors'>
                  <FaArrowRight className='w-4 h-4 text-[#ffffff]' />
                </div>
              </div>
              <h3 className='text-xl font-bold font-mon text-[#84B357] mb-3'>
                AI Therapy Chat
              </h3>
              <p className='text-gray-700 text-sm font-mon leading-relaxed'>
                A safe, non-judgmental space where you can balance your thoughts and gain control over your emotions.
              </p>
            </motion.div>

            {/* VR Therapy Mode Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='bg-white rounded-2xl p-6 relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
              style={{
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            >
              <div className='flex justify-between items-start mb-4'>
                <div className='bg-[#84B357] bg-opacity-10 rounded-xl p-3'>
                  <FaVrCardboard className='w-6 h-6 text-[#ffffff]' />
                </div>
                <div className='bg-[#84B357] bg-opacity-10 rounded-xl p-2 cursor-pointer hover:bg-[#84B357] hover:bg-opacity-20 transition-colors'>
                  <FaArrowRight className='w-4 h-4 text-[#fff]' />
                </div>
              </div>
              <h3 className='text-xl font-bold font-mon text-[#84B357] mb-3'>
                VR Therapy Mode
              </h3>
              <p className='text-gray-700 text-sm font-mon leading-relaxed'>
                Calming, controlled virtual environments enabling immersive experiences and personalized therapy sessions.
              </p>
            </motion.div>

            {/* Mood Prediction Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='bg-white rounded-2xl p-6 relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 sm:col-span-2 lg:col-span-1'
              style={{
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            >
              <div className='flex justify-between items-start mb-4'>
                <div className='bg-[#84B357] bg-opacity-10 rounded-xl p-3'>
                  <FaChartLine className='w-6 h-6 text-[#ffffff]' />
                </div>
                <div className='bg-[#84B357] bg-opacity-10 rounded-xl p-2 cursor-pointer hover:bg-[#84B357] hover:bg-opacity-20 transition-colors'>
                  <FaArrowRight className='w-4 h-4 text-[#ffffff]' />
                </div>
              </div>
              <h3 className='text-xl font-bold font-mon text-[#84B357] mb-3'>
                Mood Prediction
              </h3>
              <p className='text-gray-700 text-sm font-mon leading-relaxed'>
                Analyzing emotional patterns to help determine your mood and provide personalized insights and support.
              </p>
            </motion.div>

            {/* Avatar Therapy Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='bg-white rounded-2xl p-6 relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
              style={{
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            >
              <div className='flex justify-between items-start mb-4'>
                <div className='bg-[#84B357] bg-opacity-10 rounded-xl p-3'>
                  <FaUser className='w-6 h-6 text-[#ffffff]' />
                </div>
                <div className='bg-[#84B357] bg-opacity-10 rounded-xl p-2 cursor-pointer hover:bg-[#84B357] hover:bg-opacity-20 transition-colors'>
                  <FaArrowRight className='w-4 h-4 text-[#ffffff]' />
                </div>
              </div>
              <h3 className='text-xl font-bold font-mon text-[#84B357] mb-3'>
                Avatar Therapy
              </h3>
              <p className='text-gray-700 text-sm font-mon leading-relaxed'>
                A customizable virtual persona to create engaging experiences tailored to your preferences and needs.
              </p>
            </motion.div>

            {/* Exposure Therapy Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className='bg-white rounded-2xl p-6 relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
              style={{
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            >
              <div className='flex justify-between items-start mb-4'>
                <div className='bg-[#84B357] bg-opacity-10 rounded-xl p-3'>
                    <FaShieldAlt className='w-6 h-6 text-[#ffffff]' />
                </div>
                <div className='bg-[#84B357] bg-opacity-10 rounded-xl p-2 cursor-pointer hover:bg-[#84B357] hover:bg-opacity-20 transition-colors'>
                  <FaArrowRight className='w-4 h-4 text-[#ffffff]' />
                </div>
              </div>
              <h3 className='text-xl font-bold font-mon text-[#84B357] mb-3'>
                Exposure Therapy
              </h3>
              <p className='text-gray-700 text-sm font-mon leading-relaxed'>
                Gradually and safely face your fears to build confidence and strengthen your mental resilience.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <Appdownload />
      <Footer />
    </>
  )
}

export default ProductClient
