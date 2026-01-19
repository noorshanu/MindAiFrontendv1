'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const TimerPage = () => {
  const router = useRouter()
  const [secondsLeft, setSecondsLeft] = useState(10)
  const [isRunning, setIsRunning] = useState(false)
  const secondsRef = useRef(10)
  const formattedSeconds = useMemo(() => {
    return secondsLeft < 10 ? `0${secondsLeft}` : `${secondsLeft}`
  }, [secondsLeft])

  useEffect(() => {
    if (!isRunning) return
    const intervalId = window.setInterval(() => {
      const next = secondsRef.current - 1
      secondsRef.current = next
      setSecondsLeft(next)
      if (next <= 0) {
        setIsRunning(false)
        window.sessionStorage.setItem('showHomeConfetti', '1')
        window.setTimeout(() => {
          router.push('/')
        }, 2000)
      }
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [isRunning, router])

  const handleStart = () => {
    if (isRunning) return
    secondsRef.current = 10
    setSecondsLeft(10)
    setIsRunning(true)
  }

  return (
    <main className='min-h-screen bg-linear-to-br from-[#F7FAF7] via-white to-[#F1F7EF] flex items-center justify-center px-4 py-12 relative overflow-hidden'>
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute -top-24 -right-24 w-72 h-72 bg-[#84B357] opacity-10 rounded-full blur-3xl' />
        <div className='absolute -bottom-24 -left-24 w-72 h-72 bg-[#2C5F5D] opacity-10 rounded-full blur-3xl' />
      </div>
      <div className='w-full max-w-2xl text-center relative'>
        <div className='bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 px-8 py-10 sm:px-12 sm:py-12'>
          <h1 className='text-4xl sm:text-5xl font-bold font-mon text-[#2C5F5D] mb-3'>
            Welcome to Mind&apos;s AI
          </h1>
          <p className='text-gray-600 text-lg font-mon mb-8'>
            We are launching our website in 10 seconds.
          </p>

          <div className='flex justify-center mb-8'>
            <Image
              src='/logo.png'
              alt="Mind's AI Logo"
              width={160}
              height={160}
              className='w-28 h-28 sm:w-36 sm:h-36 object-contain drop-shadow-xl'
              priority
            />
          </div>

          <div className='text-7xl sm:text-8xl font-bold text-[#84B357] mb-8 tracking-widest'>
            {formattedSeconds}
          </div>

          <button
            onClick={handleStart}
            className='bg-[#84B357] text-white px-8 py-3 rounded-xl font-medium font-mon text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#709944] disabled:opacity-70'
            disabled={isRunning}
          >
            {isRunning ? 'Launching...' : 'Start Countdown'}
          </button>
        </div>
      </div>
    </main>
  )
}

export default TimerPage