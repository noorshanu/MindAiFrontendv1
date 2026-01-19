'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface AnimatedFeatureCardProps {
  feature: {
    icon: React.ReactNode
    title: string
    description: string
    image: string
    cta?: string
    ctaLink?: string
  }
  index: number
}

const AnimatedFeatureCard = ({ feature, index }: AnimatedFeatureCardProps) => {
  // Even index (0, 2, 4...) slides from left, odd index (1, 3, 5...) slides from right
  const isEven = index % 2 === 0
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className='feature-card border-[#84B357] border rounded-2xl mx-6 h-full'
    >
      {/* Illustration */}
      <div className='mb-4 flex-1 flex items-center justify-center '>
        <Image
          src={feature.image}
          alt={feature.title}
          width={400}
          height={280}
          className='w-full h-auto object-contain rounded-2xl p-2'
        />
      </div>
      {/* Icon and Title */}
      <div className='flex items-center justify-start gap-4 mb-6 px-6 mt-4'>
        <div className='text-[#000] bg-[#84B357] rounded-2xl p-2 shrink-0 text-xl  '>
          {feature.icon}
        </div>
        <h3 className='text-xl font-semibold text-black '>
          {feature.title}
        </h3>
      </div>

      {/* Description */}
      <p className='text-[#2D4F0C] mb-4 font-light text-lg leading-relaxed px-6'>
        {feature.description}
      </p>
    </motion.div>
  )
}

export default AnimatedFeatureCard
