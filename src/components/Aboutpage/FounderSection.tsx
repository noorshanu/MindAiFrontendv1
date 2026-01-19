'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const FounderSection = () => {
  return (
    <section className='founder-section py-16 px-4 mt-10' >
      <div className='container mx-auto max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='founder-card bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-[#84B357] border'
        >
          <div className='flex flex-col md:flex-row-reverse items-center gap-8'>
            <div className='w-full md:w-1/3'>
              <div className='relative  mx-auto'>
                <Image
                  src="/anil.png"
                  alt="Founder"
                  width={400}
                  height={400}
                  className='w-full h-full -mt-50'
                />
              </div>
            </div>
            <div className='w-full md:w-2/3'>
              <h3 className='text-4xl font-bold font-mon mb-4 text-[#2C5F5D]'>
                Board Director/Mentor
              </h3>
              <h4 className='text-2xl font-semibold font-mon mb-4 text-[#84B357]'>
                Dr..Anil kumar.G
              </h4>
              <p className='text-gray-700 text-lg leading-8 mb-4 font-mon'>
                Dr. Anil Kumar G is a name deeply respected in the field of social impact. With multiple awards recognizing his 
                contributions and an honorary doctorate for his work in human rights, his life has always been guided by service,
                 dignity, and justice for people. But beyond accolades, what defines him most is his unwavering belief in doing what
                  is right, even when it is difficult.

              </p>
              <p className='text-gray-700 text-lg leading-8 font-mon'>
              It was during years of working toward social wellbeing that he crossed paths with Sai Prasanth. 
              What began as collaboration soon evolved into a deep professional and personal sync a shared understanding that real change begins when empathy meets action. They spoke the same language of purpose. They believed in 
             real change begins when empathy meets action. They spoke the same language of purpose. They believed in 
               systems that empower, not silence. In people, not numbers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FounderSection
