'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { contentApi } from '@/libs/api'

interface TeamMember {
  id: string
  name: string
  role: string
  image: string
}

function teamAvatarFallback(name: string) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=300&background=84B357&color=fff`
}

const TeamSection = () => {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(1)
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    contentApi
      .getTeam()
      .then((res) => {
        if (res.success && res.data) {
          setTeamMembers(
            res.data.map((m) => ({
              id: m._id,
              name: m.name,
              role: m.title,
              image: m.imageUrl?.trim() || teamAvatarFallback(m.name),
            })),
          )
        }
      })
      .catch(() => setTeamMembers([]))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    const calculateItemsPerSlide = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth
        if (width >= 1024) {
          setItemsPerSlide(4)
        } else if (width >= 640) {
          setItemsPerSlide(2)
        } else {
          setItemsPerSlide(1)
        }
      }
    }

    calculateItemsPerSlide()
    window.addEventListener('resize', calculateItemsPerSlide)
    return () => window.removeEventListener('resize', calculateItemsPerSlide)
  }, [])

  const totalSlides = Math.max(1, Math.ceil(teamMembers.length / itemsPerSlide) || 1)
  const activeSlideIndex = Math.min(currentTeamIndex, totalSlides - 1)

  useEffect(() => {
    if (teamMembers.length <= itemsPerSlide) return

    const interval = setInterval(() => {
      setCurrentTeamIndex((prev) => (prev + 1) % totalSlides)
    }, 5000)
    return () => clearInterval(interval)
  }, [totalSlides, teamMembers.length, itemsPerSlide])

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
          {!loading && teamMembers.length > itemsPerSlide && (
            <>
              <button
                onClick={goToPrevious}
                className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#84B357] hover:text-white text-[#2C5F5D]'
                aria-label='Previous slide'
              >
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#84B357] hover:text-white text-[#2C5F5D]'
                aria-label='Next slide'
              >
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </button>
            </>
          )}

          {loading ? (
            <div className='flex justify-center py-12'>
              <div className='animate-pulse text-gray-500'>Loading team...</div>
            </div>
          ) : teamMembers.length === 0 ? (
            <div className='text-center py-12 text-gray-500'>No team members yet.</div>
          ) : (
            <>
              <div
                className='team-grid flex transition-transform duration-500 ease-in-out px-12'
                style={{ transform: `translateX(-${activeSlideIndex * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className='min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2'
                  >
                    {teamMembers
                      .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                      .map((member, index) => (
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
                            <p className='text-center text-[#84B357] font-mon'>{member.role}</p>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                ))}
              </div>
              {teamMembers.length > itemsPerSlide && (
                <div className='flex justify-center gap-2 mt-8'>
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTeamIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === activeSlideIndex ? 'bg-[#84B357] w-8' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
