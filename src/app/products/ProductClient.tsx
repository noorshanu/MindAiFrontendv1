'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import Footer from '@/components/Footer'

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
          
          <div className='text-center py-20'>
            <p className='text-gray-500 text-lg font-mon'>
              Product page content coming soon...
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductClient
