'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const GallerySection = () => {
  const galleryImages = [
    '/mia.png',
    '/hhero.png',
    '/avatar.png',
    '/dp.png',
    '/gentle.png',
    '/vr.png',
    '/talk.png',
    '/mood.png',
  ]

  return (
    <section className='gallery-section py-16 px-4 bg-white'>
      <div className='container mx-auto max-w-7xl'>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-5xl font-bold font-mon text-center mb-4 text-[#2C5F5D]'
        >
          Our <span className='text-[#84B357]'>Gallery</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-center text-gray-600 text-lg mb-12 font-mon max-w-2xl mx-auto'
        >
          A glimpse into our journey, our team, and the impact we&apos;re making in the mental health space.
        </motion.p>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='gallery-item'
            >
              <div className='relative w-full h-64 rounded-xl overflow-hidden group cursor-pointer'>
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className='object-cover transition-transform duration-300 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-[#84B357]/0 group-hover:bg-[#84B357]/20 transition-all duration-300' />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
