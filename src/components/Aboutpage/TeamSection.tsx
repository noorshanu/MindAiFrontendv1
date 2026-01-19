'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
}

const TeamSection = () => {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(1)

  const teamMembers: TeamMember[] = [
    { id: 1, name: 'Ms. Vinitha Anil', role: 'Counselling Psychologist', image: '/team/vinitha.png' },
    { id: 2, name: 'Mr. Noor Alam', role: 'Full Stack Developer', image: '/team/noorui.png' },
    { id: 3, name: 'Mr. Masoom Sheikh', role: 'App Developer', image: '/team/masoom.png' },
    { id: 4, name: 'Mr. Priyanshu Sinha', role: 'Unity developer', image: '/team/priya.png' },
    { id: 5, name: 'Ms. Rasana Sherin', role: 'UX/UI Designer', image: '/team/raazana.png' },
    { id: 6, name: 'Ms. Shilpa', role: 'Creative Designer', image: '/team/shilpa.png' },
    { id: 7, name: 'Ms. Abhaya Bhadran', role: 'Tec Intern', image: '/team/abhaya.png' },
  ]

  // Calculate items per slide based on screen size
  useEffect(() => {
    const calculateItemsPerSlide = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth
        if (width >= 1024) {
          // lg: 4 items
          setItemsPerSlide(4)
        } else if (width >= 640) {
          // sm: 2 items
          setItemsPerSlide(2)
        } else {
          // mobile: 1 item
          setItemsPerSlide(1)
        }
      }
    }

    calculateItemsPerSlide()
    window.addEventListener('resize', calculateItemsPerSlide)
    return () => window.removeEventListener('resize', calculateItemsPerSlide)
  }, [])

  const totalSlides = Math.ceil(teamMembers.length / itemsPerSlide)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTeamIndex((prev) => (prev + 1) % totalSlides)
    }, 5000)
    return () => clearInterval(interval)
  }, [totalSlides])

  const goToPrevious = () => {
    setCurrentTeamIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentTeamIndex((prev) => (prev + 1) % totalSlides)
  }

  return (
    <section className='team-section py-16 px-4'>
      <div className='container mx-auto max-w-7xl'>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-5xl font-bold font-mon text-center mb-4 text-[#2C5F5D]'
        >
          Our <span className='text-[#84B357]'>Team</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-center text-gray-600 text-lg mb-12 font-mon max-w-2xl mx-auto'
        >
          Meet the talented individuals who make Mind&apos;s AI possible. Our diverse team of psychologists, 
          developers, designers, and researchers work together to create innovative mental health solutions.
        </motion.p>
        <div className='team-slider-container overflow-hidden relative'>
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#84B357] hover:text-white text-[#2C5F5D] disabled:opacity-50 disabled:cursor-not-allowed'
            aria-label='Previous slide'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#84B357] hover:text-white text-[#2C5F5D] disabled:opacity-50 disabled:cursor-not-allowed'
            aria-label='Next slide'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </button>

          <div 
            className='team-grid flex transition-transform duration-500 ease-in-out px-12'
            style={{ transform: `translateX(-${currentTeamIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div 
                key={slideIndex} 
                className='min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2'
              >
                {teamMembers.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((member, index) => (
                  <motion.div 
                    key={member.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className='team-member-card'
                  >
                    <div className=' hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
                      <div className='relative w-full h-full mx-auto mb-4'>
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={300}
                          height={300}
                          className=' mx-auto'
                        />
                      </div>
                      <h4 className='text-xl font-bold font-mon text-center mb-2 text-[#2C5F5D]'>
                        {member.name}
                      </h4>
                      <p className='text-center text-[#84B357] font-mon'>
                        {member.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
          <div className='flex justify-center gap-2 mt-8'>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTeamIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTeamIndex ? 'bg-[#84B357] w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
