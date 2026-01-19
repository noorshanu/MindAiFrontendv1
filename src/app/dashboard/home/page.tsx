'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  return (
    <div className='space-y-6'>
      {/* Welcome Card */}
      <div className='bg-white rounded-lg shadow-md p-6'>
        <h2 className='text-xl font-bold text-[#2C5F5D] mb-4'>Welcome to MIND&apos;S AI</h2>
        <p className='text-gray-600'>
          Your mental health companion. Here you can chat, explore, and begin your healing journey.
        </p>
      </div>

      {/* Quick Actions */}
      <div className='bg-white rounded-lg shadow-md p-6'>
        <h3 className='text-lg font-semibold text-[#2C5F5D] mb-4'>Quick Actions</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <button
            onClick={() => router.push('/dashboard/chat')}
            className='p-4 border-2 border-[#84B357] rounded-lg hover:bg-[#84B357] hover:text-white transition-colors text-left'
          >
            <h4 className='font-semibold mb-2'>Start Chat</h4>
            <p className='text-sm text-gray-600'>Begin a conversation</p>
          </button>
          <button
            onClick={() => router.push('/dashboard/vr-chat')}
            className='p-4 border-2 border-[#84B357] rounded-lg hover:bg-[#84B357] hover:text-white transition-colors text-left'
          >
            <h4 className='font-semibold mb-2'>VR Chat</h4>
            <p className='text-sm text-gray-600'>Explore VR chat features</p>
          </button>
          <button
            onClick={() => router.push('/dashboard/settings')}
            className='p-4 border-2 border-[#84B357] rounded-lg hover:bg-[#84B357] hover:text-white transition-colors text-left'
          >
            <h4 className='font-semibold mb-2'>Settings</h4>
            <p className='text-sm text-gray-600'>Manage your preferences</p>
          </button>
        </div>
      </div>
    </div>
  )
}

