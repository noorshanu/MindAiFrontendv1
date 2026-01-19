'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FaFacebookF } from 'react-icons/fa'

const ContactUsClient = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      message: ''
    })
  }

  const handleClear = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      message: ''
    })
  }

  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gradient-to-br from-[#FFF8F8] to-white py-12 px-4'>

            <div className='container mx-auto max-w-7xl'>

            <div className=' text-center'>
                <h2 className='text-3xl font-bold font-mon mb-6 text-[#FF6B35]'>
                    Contact Us
                </h2>
                <p className='text-gray-600 mb-8 font-mon'>
                    We&apos;re here to help! Reach out through any of these channels.
                </p>
            </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Left Panel - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='contact-form-panel'
          >
            <h2 className='text-3xl font-bold font-mon mb-6 text-[#FF6B35]'>
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Full Name */}
              <div>
                <label htmlFor='fullName' className='block text-sm font-medium text-gray-700 mb-2 font-mon'>
                  Full Name <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  id='fullName'
                  name='fullName'
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder='Enter your full name'
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-transparent transition-all font-mon'
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor='phoneNumber' className='block text-sm font-medium text-gray-700 mb-2 font-mon'>
                  Phone Number <span className='text-red-500'>*</span>
                </label>
                <div className='relative'>
                  <div className='absolute left-4 top-1/2 transform -translate-y-1/2'>
                    <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                    </svg>
                  </div>
                  <input
                    type='tel'
                    id='phoneNumber'
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder='+91 1234567890'
                    required
                    className='w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-transparent transition-all font-mon'
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2 font-mon'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='your.email@example.com'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-transparent transition-all font-mon'
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2 font-mon'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Tell us how we can help you...'
                  rows={5}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-transparent transition-all resize-none font-mon'
                />
              </div>

              {/* Buttons */}
              <div className='flex gap-4 pt-2'>
                <button
                  type='submit'
                  className='flex-1 bg-[#84B357] text-white px-6 py-3 rounded-lg font-medium font-mon hover:bg-[#6a8f45] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                >
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
                  </svg>
                  Send Message
                </button>
                <button
                  type='button'
                  onClick={handleClear}
                  className='px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium font-mon hover:bg-gray-50 transition-all duration-300'
                >
                  Clear
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right Panel - Get in Touch */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='contact-info-panel'
          >
            <h2 className='text-3xl font-bold font-mon mb-2 text-[#FF6B35]'>
              Get in Touch
            </h2>
            <p className='text-gray-600 mb-8 font-mon'>
              We&apos;re here to help! Reach out through any of these channels.
            </p>

            <div className='space-y-4 mb-8'>
              {/* Address */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='contact-info-item'
              >
                <div className='flex items-start gap-4'>
                  <div className='shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center'>
                    <svg className='w-6 h-6 text-red-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-800 mb-1 font-mon'>Address</h3>
                    <p className='text-[#84B357] font-mon'>
                      Iskrti Psychology Solutions Pvt ltd<br />
                      101, Oxford Tower, Kodihalli, Bangalore
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='contact-info-item'
              >
                <div className='flex items-start gap-4'>
                  <div className='shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center'>
                    <svg className='w-6 h-6 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-800 mb-1 font-mon'>Phone</h3>
                    <p className='text-[#84B357] font-mon'>+91-6235877369</p>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='contact-info-item'
              >
                <div className='flex items-start gap-4'>
                  <div className='shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center'>
                    <svg className='w-6 h-6 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-800 mb-1 font-mon'>Email</h3>
                    <p className='text-[#84B357] font-mon'>iskritipsychologysolutions@gmail.com</p>
                  </div>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='contact-info-item'
              >
                <div className='flex items-start gap-4'>
                  <div className='shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center'>
                    <svg className='w-6 h-6 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' />
                    </svg>
                  </div>
                  <div className='flex-1'>
                    <h3 className='font-semibold text-gray-800 mb-3 font-mon'>Follow Us</h3>
                    <div className='flex items-center gap-3 flex-wrap'>
                      {/* Instagram */}
                      <a
                        href='https://www.instagram.com/_minds_ai?igsh=NGd3emszeDBqY3Fq'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-red-500 rounded-lg flex items-center justify-center hover:opacity-90 transition-all hover:scale-110'
                        aria-label='Instagram'
                      >
                        <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
                          <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/>
                        </svg>
                      </a>

                      {/* LinkedIn */}
                      <a
                        href='https://www.linkedin.com/company/iskrti-psychology-solutions/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-all hover:scale-110'
                        aria-label='LinkedIn'
                      >
                        <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
                          <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                        </svg>
                      </a>

                      {/* Twitter */}
                      <a
                        href='https://x.com/Minds_Ai_'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center hover:bg-cyan-600 transition-all hover:scale-110'
                        aria-label='Twitter'
                      >
                        <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 24 24'>
                          <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'/>
                        </svg>
                      </a>

                      {/* Facebook */}
                      <a
                        href='https://www.facebook.com/profile.php?id=61571434214906'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all hover:scale-110'
                        aria-label='Facebook'
                      >
                        <FaFacebookF className='text-white text-xl' />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ContactUsClient
