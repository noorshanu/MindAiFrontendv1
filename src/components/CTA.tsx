'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Counter from './Counter'

const CTA = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className='cta-section bg-[#84B357] py-16 px-4'
    >
        <div className='container mx-auto max-w-7xl'>
       <motion.div 
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6, delay: 0.2 }}
         className='cta-content flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-4'
       >
        <div className="w-full sm:w-1/2">
            <h2 className='text-2xl sm:text-4xl font-semibold text-white text-center sm:text-left'>Why users love our features</h2>
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-between w-full sm:w-1/2 text-center'>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
                <h1 className='text-6xl font-bold text-white'>
                  <Counter value={98} suffix='%' />
                </h1>
                <p className='font-extralight text-xs'>user satisfaction</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
                <h1 className='text-6xl font-bold text-white'>
                  <Counter value={2.5} suffix='+' decimals={1} />
                </h1>
                <p className='font-extralight text-xs'>Voice memossaved</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
                <h1 className='text-6xl font-bold text-white'>
                  <Counter value={85} suffix='%' />
                </h1>
                <p className='font-extralight text-xs'>Stress reduction</p>
            </motion.div>
        </div>

       </motion.div>
        </div>
    </motion.section>
  )
}

export default CTA