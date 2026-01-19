'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const CEOSection = () => {
  return (
    <section className='ceo-section py-16 px-4 mt-10'>
      <div className='container mx-auto max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='ceo-card bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-[#84B357] border'
        >
          <div className='flex flex-col md:flex-row items-center gap-8'>
            <div className='w-full md:w-1/3'>
              <div className='relative  mx-auto'>
                <Image
                  src="/ceo.png"
                  alt="CEO"
                  width={400}
                  height={400}
                  className='  w-full h-full -mt-50'
                />
              </div>
            </div>
            <div className='w-full md:w-2/3'>
              <h3 className='text-4xl font-bold font-mon mb-4 text-[#2C5F5D]'>
                Our CEO/Founder
              </h3>
              <h4 className='text-2xl font-semibold font-mon mb-4 text-[#84B357]'>
                Mr.Sai Prasanth AB
              </h4>
              <p className='text-gray-700 text-lg leading-8 mb-4 font-mon'>
                After completing his higher secondary education, Sai Prasanth chose to study the human mind its silences, struggles, and strength.
                He went on to earn a BA in Psychology (Honours) from Indira Gandhi National Open University, where his understanding of human behavior deepened beyond textbooks.

              </p>
              <p className='text-gray-700 text-lg leading-8 font-mon'>
                But learning was never meant to stay on paper.
                Straight after completing his degree, driven by a quiet urgency to make mental health support more accessible, he founded Mind&apos;s AI platform built on empathy, ethics, and the belief that no one should feel unheard simply because they don&apos;t know where to turn.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CEOSection
