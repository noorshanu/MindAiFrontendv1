'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'

const IMAGES = [
  '/mobilesilder/img1.png',
  '/mobilesilder/img2.png',
  '/mobilesilder/img3.png',
  '/mobilesilder/img4.png',
  '/mobilesilder/img5.png',
  '/mobilesilder/img6.png',
  '/mobilesilder/img7.png',
  '/mobilesilder/img8.png',
]

const getItemsPerSlide = () => {
  if (typeof window === 'undefined') return 4
  const width = window.innerWidth
  if (width >= 1024) return 4
  if (width >= 768) return 2
  return 1
}

export const MobileAppGallary = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(() => getItemsPerSlide())
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const slides = useMemo(() => {
    const chunks: string[][] = []
    for (let i = 0; i < IMAGES.length; i += itemsPerSlide) {
      chunks.push(IMAGES.slice(i, i + itemsPerSlide))
    }
    return chunks
  }, [itemsPerSlide])

  const totalSlides = slides.length

  useEffect(() => {
    const handleResize = () => {
      const next = getItemsPerSlide()
      setItemsPerSlide((prev) => (prev === next ? prev : next))
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const goToPrevious = useCallback(() => {
    if (totalSlides <= 1) return
    setCurrentSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }, [totalSlides])

  const goToNext = useCallback(() => {
    if (totalSlides <= 1) return
    setCurrentSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }, [totalSlides])

  useEffect(() => {
    if (totalSlides <= 1) return
    const interval = setInterval(goToNext, 4000)
    return () => clearInterval(interval)
  }, [goToNext, totalSlides])

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > minSwipeDistance) goToNext()
    if (distance < -minSwipeDistance) goToPrevious()
  }

  return (
    <section className='py-16 px-4 bg-linear-to-br from-[#FFF8F8] to-white overflow-hidden'>
      <div className='container mx-auto max-w-7xl'>
        <h2 className='text-5xl font-bold font-mon text-center mb-4 text-[#000000]'>
          Glimpse of <span className='text-[#84B357]'>Our App</span>
        </h2>
        <p className='text-center text-gray-600 text-lg mb-12 font-mon max-w-2xl mx-auto'>
          Explore the beautiful interface and features of Mind&apos;s AI mobile app
        </p>

        <div className='relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden py-8'>
          <button
            onClick={goToPrevious}
            className='absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#84B357] hover:text-white text-[#2C5F5D]'
            aria-label='Previous slide'
          >
            <svg className='w-5 h-5 md:w-6 md:h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
            </svg>
          </button>

          <div
            className='relative w-full h-full flex items-center justify-center px-12 md:px-16'
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className='relative w-full max-w-7xl mx-auto overflow-hidden'>
              <div
                className='flex transition-transform duration-500 ease-in-out'
                style={{
                  width: `${totalSlides * 100}%`,
                  transform: `translateX(-${currentSlideIndex * (100 / totalSlides)}%)`,
                }}
              >
                {slides.map((slideImages, slideIndex) => (
                  <div
                    key={slideIndex}
                    className='shrink-0 w-full flex items-center justify-center gap-3 md:gap-4 lg:gap-6'
                    style={{ width: `${100 / totalSlides}%` }}
                  >
                    {slideImages.map((image, imgIndex) => (
                      <div
                        key={`${slideIndex}-${imgIndex}`}
                        className='relative flex items-center justify-center'
                        style={{
                          width:
                            itemsPerSlide === 1
                              ? '100%'
                              : itemsPerSlide === 2
                              ? 'calc(50% - 0.5rem)'
                              : 'calc(25% - 0.75rem)',
                          maxWidth:
                            itemsPerSlide === 1 ? '280px' : itemsPerSlide === 2 ? '300px' : '240px',
                        }}
                      >
                        <Image
                          src={image}
                          alt={`Mobile app screenshot ${slideIndex * itemsPerSlide + imgIndex + 1}`}
                          width={240}
                          height={500}
                          className='w-full h-auto object-contain drop-shadow-2xl'
                          priority={slideIndex === currentSlideIndex && imgIndex === 0}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={goToNext}
            className='absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#84B357] hover:text-white text-[#2C5F5D]'
            aria-label='Next slide'
          >
            <svg className='w-5 h-5 md:w-6 md:h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
            </svg>
          </button>

          {totalSlides > 1 && (
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2'>
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlideIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlideIndex ? 'bg-[#84B357] w-8' : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default MobileAppGallary
