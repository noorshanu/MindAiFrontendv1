'use client'

import React from 'react'
import { motion } from 'framer-motion'

const VisionMission = () => {
  return (
    <section className='vision-mission-section py-16 px-4 bg-white'>
      <div className='container mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='vision-card'
          >
            <div className='bg-gradient-to-br from-[#84B357] to-[#6a8f45] p-8 rounded-2xl text-white shadow-xl'>
              <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6'>
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                </svg>
              </div>
              <h3 className='text-3xl font-bold font-mon mb-4'>Our Vision</h3>
              <p className='text-lg leading-7 font-mon'>
                To create a world where mental health support is accessible, personalized, and available 
                to everyone, regardless of their location, background, or circumstances. We envision a 
                future where technology and compassion work together to transform mental health care.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mission-card'
          >
            <div className='bg-gradient-to-br from-[#2C5F5D] to-[#1a3d3b] p-8 rounded-2xl text-white shadow-xl'>
              <div className='w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6'>
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                </svg>
              </div>
              <h3 className='text-3xl font-bold font-mon mb-4'>Our Mission</h3>
              <p className='text-lg leading-7 font-mon'>
                To leverage cutting-edge AI technology to provide personalized, evidence-based mental health 
                support that is accessible, affordable, and effective. We are committed to maintaining the 
                highest standards of privacy, security, and ethical AI practices while helping individuals 
                achieve better mental well-being.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission
