'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedFeatureCard from './AnimatedFeatureCard'

const Features = () => {
  const features = [
    {
      icon: (
        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z' />
        </svg>
      ),
      title: 'Talk to your AI Psychologist:',
      description: 'Real conversations. Real support. Trained to listen, understand, and guide — just like a human therapist, but always available.',
      image: '/talk.png',
      cta: 'Learn more →',
      ctaLink: '/chat'
    },
    {
      icon: (
        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
        </svg>
      ),
      title: 'Mood Prediction & Journaling:',
      description: 'Track your emotions, write freely, and let Mind\'s AI detect patterns, triggers, and emotional trends – all privately and securely.',
      image: '/mood.png',
      cta: 'Learn more →',
      ctaLink: '/mood'
    },
    {
      icon: (
        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
        </svg>
      ),
      title: 'VR Therapy Mode:',
      description: 'Step into a peaceful virtual room. Talk to a lifelike version of someone you trust. Be heard, seen, and understood – without judgment.',
      image: '/vr.png',
      cta: 'Enter VR Therapy →',
      ctaLink: '/vr-therapy'
    },
    {
      icon: (
        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
        </svg>
      ),
      title: 'Avatar Therapy:',
      description: 'Create a lifelike avatar of someone you miss or need closure with. Heal through safe, AI-guided conversations.',
      image: '/avatar.png',
      cta: 'Learn more →',
      ctaLink: '/avatar'
    },
    // {
    //   icon: (
    //     <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
    //       <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' />
    //     </svg>
    //   ),
    //   title: 'A Gentle Check-In, Every Day:',
    //   description: 'Some days, all we need is a small reminder that we\'re not alone. Mind\'s AI sends thoughtful, caring nudges – to help you pause, breathe, and feel a little lighter.',
    //   image: '/gentle.png',
    //   cta: null,
    //   ctaLink: null
    // }
  ]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className='features-section py-16 px-4 bg-white overflow-hidden'
    >
      <div className='container mx-auto max-w-7xl'>
        {/* Header */}
        <div className='mb-12'>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='features-title text-4xl sm:text-5xl font-semibold text-center mb-10'
          >
            Main<span className='text-black bg-[#84B357] font-thin pl-3 pr-5 py-2 rounded-2xl ml-2'> Features</span>
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto justify-center items-center space-y-6'>
          {features.map((feature, index) => (
            <AnimatedFeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='feature-card-last border-[#84B357] border rounded-2xl mx-6 h-full mt-10 gap-7 flex flex-col sm:flex-row items-center justify-between'
        >

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className='sm:w-1/2 w-full'
          >
            <Image src="/gentel.png" alt="Features" width={400} height={280} className='w-full h-auto object-contain rounded-2xl' />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className='sm:w-1/2 w-full'
          >
            <div className='flex items-center justify-start gap-4 mb-6 px-6 mt-4'>
              <div className='text-[#000] bg-[#84B357] rounded-2xl p-2 shrink-0 text-xl  '>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-black '>
                A Gentle Check-In, Every Day:
              </h3>
            </div>

            {/* Description */}
            <p className='text-[#2D4F0C] mb-4 font-light text-lg leading-relaxed px-6 '>
              Some days, all we need is a small <br /> reminder that we’re not alone. <br />
              Mind’s AI sends thoughtful, caring nudges <br /> to help you pause, breathe, and feel a <br /> little lighter.

            </p>

          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  )
}

export default Features