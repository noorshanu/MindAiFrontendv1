'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { profileApi } from '@/libs/api'
import ProfilePictureUpload from '@/components/ProfilePictureUpload'

const IntroPage = () => {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | 'other' | null>(null)
  const [nickname, setNickname] = useState('')
  const [profilePicture, setProfilePicture] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const totalSteps = 3

  const nicknameSuggestions = ['CoolUser123', 'StarGazer', 'Explorer', 'Dreamer', 'Phoenix']

  const handleContinue = async () => {
    if (currentStep === 1) {
      setCurrentStep(2)
    } else if (currentStep === 2) {
      if (selectedGender) {
        try {
          setLoading(true)
          setError(null)
          
          // Update user profile with gender
          const response = await profileApi.setupProfile({
            gender: selectedGender
          })
          
          if (response.success) {
            setCurrentStep(3)
          } else {
            setError(response.message || 'Failed to update profile')
          }
        } catch (err) {
          console.error('Error updating profile:', err)
          setError(err instanceof Error ? err.message : 'Failed to update profile')
        } finally {
          setLoading(false)
        }
      }
    } else if (currentStep === 3) {
      // Final step - save nickname and redirect
      try {
        setLoading(true)
        setError(null)
        
        const updateData: { username?: string; profilePicture?: string } = {}
        if (nickname.trim()) {
          updateData.username = nickname.trim()
        }
        if (profilePicture) {
          updateData.profilePicture = profilePicture
        }

        if (Object.keys(updateData).length > 0) {
          await profileApi.setupProfile(updateData)
        }
        
        // Redirect to dashboard
        router.push('/dashboard')
      } catch (err) {
        console.error('Error updating profile:', err)
        setError(err instanceof Error ? err.message : 'Failed to update profile')
      } finally {
        setLoading(false)
      }
    }
  }

  const handleSkip = () => {
    router.push('/dashboard')
  }

  return (
    <div className='min-h-screen bg-white relative overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src="/introbg.png"
          alt="Background"
          fill
          className='object-cover opacity-10'
          priority
        />
      </div>

      {/* Content */}
      <div className='relative z-10 min-h-screen flex'>
        {/* Left Section - Logo */}
        <div className='hidden lg:flex lg:w-1/3 items-center justify-center p-8 relative'>
          <div className='text-center'>
            <div className='text-8xl font-bold text-[#2C5F5D] mb-4 font-mon'>
              M<span className='text-[#84B357]'>.AI</span>
            </div>
            <div className='text-2xl font-bold text-[#2C5F5D] font-mon'>
              MIND&apos;S AI
            </div>
          </div>
          {/* Decorative blobs */}
          <div className='absolute top-20 left-10 w-32 h-32 bg-[#84B357] opacity-20 rounded-full blur-3xl'></div>
          <div className='absolute bottom-20 right-10 w-40 h-40 bg-[#84B357] opacity-15 rounded-full blur-3xl'></div>
          <div className='absolute top-1/2 left-1/4 w-24 h-24 bg-[#84B357] opacity-10 rounded-full blur-2xl'></div>
        </div>

        {/* Right Section - Content */}
        <div className='flex-1 lg:w-2/3 flex flex-col p-6 lg:p-12'>
          {/* Top Navigation */}
          <div className='flex justify-between items-center mb-8'>
            <button
              onClick={() => currentStep > 1 ? setCurrentStep(currentStep - 1) : router.back()}
              className='text-gray-700 hover:text-[#2C5F5D] transition-colors'
            >
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
              </svg>
            </button>
            <button
              onClick={handleSkip}
              className='text-gray-600 hover:text-[#2C5F5D] font-medium transition-colors'
            >
              Skip
            </button>
          </div>

          {/* Step Content */}
          <div className='flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full'>
            {currentStep === 1 ? (
              // Welcome Screen
              <div className='text-center space-y-6'>
                <h1 className='text-5xl lg:text-6xl font-bold text-[#2C5F5D] font-mon'>
                  Hey, you made it!! 👋
                </h1>
                <p className='text-xl text-gray-600 max-w-md mx-auto'>
                  Where your mind is heard, your pain held, and healing begins.
                </p>
                <button
                  onClick={handleContinue}
                  className='mt-8 bg-[#84B357] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#709944] transition-colors shadow-lg'
                >
                  Begin Your Healing Journey →
                </button>
              </div>
            ) : currentStep === 2 ? (
              // Gender Selection Screen
              <div className='space-y-8'>
                <h2 className='text-4xl lg:text-5xl font-bold text-[#2C5F5D] font-mon'>
                  Your Gender?
                </h2>
                
                <div className='space-y-4'>
                  {/* Female Option */}
                  <button
                    onClick={() => setSelectedGender('female')}
                    className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                      selectedGender === 'female'
                        ? 'border-[#84B357] bg-[#84B357] bg-opacity-10'
                        : 'border-[#84B357] border-opacity-30 hover:border-opacity-50'
                    }`}
                  >
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center'>
                        <span className='text-2xl'>♀</span>
                      </div>
                      <span className='text-lg font-medium text-gray-700'>Female</span>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 ${
                      selectedGender === 'female'
                        ? 'border-[#84B357] bg-[#84B357]'
                        : 'border-gray-300'
                    }`}>
                      {selectedGender === 'female' && (
                        <div className='w-full h-full rounded-full bg-white scale-50'></div>
                      )}
                    </div>
                  </button>

                  {/* Male Option */}
                  <button
                    onClick={() => setSelectedGender('male')}
                    className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                      selectedGender === 'male'
                        ? 'border-[#84B357] bg-[#84B357] bg-opacity-10'
                        : 'border-[#84B357] border-opacity-30 hover:border-opacity-50'
                    }`}
                  >
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center'>
                        <span className='text-2xl'>♂</span>
                      </div>
                      <span className='text-lg font-medium text-gray-700'>Male</span>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 ${
                      selectedGender === 'male'
                        ? 'border-[#84B357] bg-[#84B357]'
                        : 'border-gray-300'
                    }`}>
                      {selectedGender === 'male' && (
                        <div className='w-full h-full rounded-full bg-white scale-50'></div>
                      )}
                    </div>
                  </button>

                  {/* Other Option */}
                  <button
                    onClick={() => setSelectedGender('other')}
                    className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                      selectedGender === 'other'
                        ? 'border-[#84B357] bg-[#84B357] bg-opacity-10'
                        : 'border-[#84B357] border-opacity-30 hover:border-opacity-50'
                    }`}
                  >
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center'>
                        <div className='w-6 h-6 rounded-full bg-purple-400'></div>
                      </div>
                      <span className='text-lg font-medium text-gray-700'>Other</span>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 ${
                      selectedGender === 'other'
                        ? 'border-[#84B357] bg-[#84B357]'
                        : 'border-gray-300'
                    }`}>
                      {selectedGender === 'other' && (
                        <div className='w-full h-full rounded-full bg-white scale-50'></div>
                      )}
                    </div>
                  </button>
                </div>

                {error && (
                  <div className='mt-4 p-3 bg-red-50 border border-red-200 rounded-lg'>
                    <p className='text-sm text-red-600'>{error}</p>
                  </div>
                )}

                <button
                  onClick={handleContinue}
                  disabled={!selectedGender || loading}
                  className='w-full bg-[#84B357] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#709944] transition-colors shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed mt-8'
                >
                  {loading ? 'Saving...' : 'Continue →'}
                </button>
              </div>
            ) : currentStep === 3 ? (
              // Nickname and Profile Picture Screen
              <div className='space-y-6'>
                <h2 className='text-4xl lg:text-5xl font-bold text-[#2C5F5D] font-mon'>
                  Give Your Nickname
                </h2>

                {/* Profile Picture Upload */}
                <div className='flex justify-center'>
                  <ProfilePictureUpload
                    currentPicture={profilePicture || undefined}
                    onUploadSuccess={(url) => {
                      setProfilePicture(url)
                    }}
                    size="large"
                  />
                </div>

                {/* Nickname Input */}
                <div className='space-y-2'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Choose your nickname
                  </label>
                  <div className='relative'>
                    <input
                      type='text'
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      placeholder='Enter your nickname'
                      className='w-full px-4 py-3 border-2 border-[#2C5F5D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-[#84B357]'
                      maxLength={20}
                    />
                    <div className='absolute right-3 top-1/2 -translate-y-1/2'>
                      <svg className='w-5 h-5 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                      </svg>
                    </div>
                  </div>
                  <p className='text-sm text-gray-500'>This is how others will see you</p>
                </div>

                {/* Suggestions */}
                <div className='space-y-2'>
                  <label className='block text-sm font-medium text-gray-700'>Suggestions</label>
                  <div className='flex flex-wrap gap-2'>
                    {nicknameSuggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => setNickname(suggestion)}
                        className='px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors'
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guidelines */}
                <div className='bg-[#84B357] bg-opacity-10 border-2 border-[#84B357] rounded-lg p-4'>
                  <div className='flex items-start gap-3'>
                    <svg className='w-5 h-5 text-[#84B357] mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z' clipRule='evenodd' />
                    </svg>
                    <div className='space-y-1 text-sm'>
                      <p className='font-medium text-[#2C5F5D]'>Nickname Guidelines:</p>
                      <ul className='list-disc list-inside text-gray-700 space-y-1'>
                        <li>3-20 characters long</li>
                        <li>No special characters</li>
                        <li>Must be unique</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className='p-3 bg-red-50 border border-red-200 rounded-lg'>
                    <p className='text-sm text-red-600'>{error}</p>
                  </div>
                )}

                <button
                  onClick={handleContinue}
                  disabled={loading}
                  className='w-full bg-[#84B357] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#709944] transition-colors shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed'
                >
                  {loading ? 'Saving...' : 'Continue →'}
                </button>

                <p className='text-center text-sm text-gray-500'>
                  You can change this later in settings
                </p>
              </div>
            ) : null}
          </div>

          {/* Bottom Navigation */}
          <div className='mt-8 flex items-center justify-between'>
            {/* Progress Bar */}
            <div className='flex-1 bg-gray-200 h-2 rounded-full overflow-hidden max-w-md mx-auto'>
              <div
                className='bg-[#84B357] h-full transition-all duration-300'
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>

            {/* Next Arrow */}
            {currentStep < totalSteps && (
              <button
                onClick={handleContinue}
                className='text-gray-700 hover:text-[#2C5F5D] transition-colors ml-4'
              >
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroPage