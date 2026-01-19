'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const AboutIntro = () => {
  return (
    <section className='about-section-1 py-16 px-4'>
      <div className='container mx-auto max-w-7xl'>
        <div className='flex flex-col lg:flex-row items-center gap-12'>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='w-full lg:w-1/2 about-image'
          >
            <Image
              src="/mia.png"
              alt="About Us"
              width={600}
              height={600}
              className='rounded-2xl border-[#84B357] border p-2'
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='w-full lg:w-1/2 about-content'
          >
            <h2 className='sm:text-5xl text-3xl font-bold font-mon mb-6 text-[#2C5F5D]'>
              About <span className='text-[#84B357]'>Mind&apos;s AI</span>
            </h2>
            <p className='text-gray-700 text-lg leading-8 mb-6  font-thin'>
              Mind&apos;s AI is a revolutionary platform that combines cutting-edge artificial intelligence 
              with evidence-based psychological practices to provide accessible, personalized mental health 
              support. We are dedicated to breaking down barriers to mental health care and making professional 
              support available to everyone, anytime, anywhere.
            </p>
            <p className='text-gray-700 text-lg leading-8 mb-6 font-thin'>
              Our mission is to empower individuals on their mental health journey through innovative technology, 
              compassionate care, and a commitment to privacy and security. We believe that everyone deserves 
              access to quality mental health resources, and we&apos;re here to make that a reality.
            </p>
            {/* <button className='bg-[#84B357] text-white px-8 py-3 rounded-xl font-medium font-mon hover:bg-[#6a8f45] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
              Learn More
            </button> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutIntro
