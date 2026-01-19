'use client'

import React, { useState, useRef, useEffect } from 'react'

interface OTPVerificationProps {
  phoneNumber?: string
  onVerify: (otp: string) => void
  onResend: () => void
  onBack?: () => void
}

const OTPVerification: React.FC<OTPVerificationProps> = ({ 
  phoneNumber, 
  onVerify, 
  onResend,
  onBack 
}) => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', ''])
  const [timeLeft, setTimeLeft] = useState(59)
  const [canResend, setCanResend] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [timeLeft])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return
    
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').slice(0, 6)
    const newOtp = [...otp]
    pastedData.split('').forEach((char, index) => {
      if (index < 6 && /^\d$/.test(char)) {
        newOtp[index] = char
      }
    })
    setOtp(newOtp)
    const nextEmptyIndex = newOtp.findIndex(val => val === '')
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus()
    } else {
      inputRefs.current[5]?.focus()
    }
  }

  const handleVerify = () => {
    const otpString = otp.join('')
    if (otpString.length === 6) {
      onVerify(otpString)
    }
  }

  const handleResend = () => {
    setTimeLeft(59)
    setCanResend(false)
    setOtp(['', '', '', '', '', ''])
    inputRefs.current[0]?.focus()
    onResend()
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className='w-full max-w-md mx-auto'>
      {/* Header Icon */}
      <div className='flex justify-center mb-6'>
        <div className='w-20 h-20 rounded-full bg-[#84B357] border-2 border-[#709944] flex items-center justify-center'>
          <svg className='w-10 h-10 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h2 className='text-3xl font-bold text-[#2C5F5D] text-center mb-3'>Verification Code</h2>

      {/* Instructional Text */}
      <p className='text-gray-600 text-center mb-8'>
        We have sent the verification code to your registered phone number
        {phoneNumber && (
          <span className='block mt-1 font-medium text-gray-800'>{phoneNumber}</span>
        )}
      </p>

      {/* OTP Input Boxes */}
      <div className='flex justify-center gap-3 mb-8'>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => { inputRefs.current[index] = el }}
            type='text'
            inputMode='numeric'
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className='w-14 h-14 text-center text-2xl font-bold border-2 border-[#2C5F5D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-[#84B357] text-gray-800'
          />
        ))}
      </div>

      {/* Resend Code Section */}
      <div className='text-center mb-8'>
        <p className='text-gray-600 mb-2'>Didn&apos;t receive the code?</p>
        {canResend ? (
          <button
            type='button'
            onClick={handleResend}
            className='text-[#2C5F5D] font-medium hover:underline'
          >
            Resend Code
          </button>
        ) : (
          <p className='text-gray-500 text-sm'>
            Resend code in {formatTime(timeLeft)}
          </p>
        )}
      </div>

      {/* Verify Code Button */}
      <button
        type='button'
        onClick={handleVerify}
        disabled={otp.join('').length !== 6}
        className='w-full bg-[#84B357] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#709944] transition-colors shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed'
      >
        Verify Code
      </button>

      {/* Back Button */}
      {onBack && (
        <button
          type='button'
          onClick={onBack}
          className='w-full mt-4 text-gray-600 hover:text-[#84B357] transition-colors'
        >
          ← Back
        </button>
      )}
    </div>
  )
}

export default OTPVerification

