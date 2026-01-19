'use client'

import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

const CONFETTI_DURATION_MS = 2500

const HomeConfetti = () => {
  const [isActive, setIsActive] = useState(false)
  const [viewport, setViewport] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight })
    }
    updateViewport()
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const flag = window.sessionStorage.getItem('showHomeConfetti')
    if (flag !== '1') return

    window.sessionStorage.removeItem('showHomeConfetti')
    setIsActive(true)

    const timeoutId = window.setTimeout(() => {
      setIsActive(false)
    }, CONFETTI_DURATION_MS)

    return () => window.clearTimeout(timeoutId)
  }, [])

  if (!isActive || viewport.width === 0 || viewport.height === 0) return null

  return (
    <Confetti
      width={viewport.width}
      height={viewport.height}
      recycle={false}
      numberOfPieces={300}
    />
  )
}

export default HomeConfetti
