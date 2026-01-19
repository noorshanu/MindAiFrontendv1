'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { authApi, profileApi, removeToken } from '@/libs/api'

interface User {
  _id?: string
  username?: string
  email?: string
  phone?: string
  gender?: string
  profilePicture?: string
  isEmailVerified?: boolean
  isPhoneVerified?: boolean
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const loadUserProfile = useCallback(async () => {
    try {
      const response = await profileApi.getProfile()
      if (response.success && response.user) {
        setUser(response.user as User)
      }
    } catch (error) {
      console.error('Failed to load profile:', error)
      router.push('/login')
    } finally {
      setLoading(false)
    }
  }, [router])

  useEffect(() => {
    loadUserProfile()
  }, [loadUserProfile])

  const handleLogout = async () => {
    try {
      await authApi.logout()
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      removeToken()
      router.push('/login')
    }
  }

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#84B357] mx-auto mb-4'></div>
          <p className='text-gray-600'>Loading...</p>
        </div>
      </div>
    )
  }

  const isActive = (path: string) => pathname === path

  return (
    <div className='h-screen bg-gray-50 flex overflow-hidden'>
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-[#84B357] text-white transition-all duration-300 flex flex-col h-full`}
      >
        {/* Logo */}
        <div className='p-6 border-b border-green-600'>
          <div className='flex items-center justify-between'>
            {sidebarOpen && (
              <div className='text-2xl font-bold'>
                <span className='text-[#2C5F5D]'>MIND&apos;S</span> AI
              </div>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className='p-2 hover:bg-green-600 rounded-lg transition-colors'
            >
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d={sidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className='flex-1 p-4 space-y-2 overflow-y-auto'>
          <Link
            href='/dashboard/home'
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
              isActive('/dashboard/home')
                ? 'bg-green-600 text-white'
                : 'hover:bg-green-600 hover:bg-opacity-50'
            }`}
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
              />
            </svg>
            {sidebarOpen && <span>Home</span>}
          </Link>

          <Link
            href='/dashboard/profile'
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
              isActive('/dashboard/profile')
                ? 'bg-green-600 text-white'
                : 'hover:bg-green-600 hover:bg-opacity-50'
            }`}
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
            {sidebarOpen && <span>My Profile</span>}
          </Link>

          <Link
            href='/dashboard/chat'
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
              isActive('/dashboard/chat')
                ? 'bg-green-600 text-white'
                : 'hover:bg-green-600 hover:bg-opacity-50'
            }`}
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
              />
            </svg>
            {sidebarOpen && <span>Chat</span>}
          </Link>

          <Link
            href='/dashboard/chat-history'
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
              isActive('/dashboard/chat-history')
                ? 'bg-green-600 text-white'
                : 'hover:bg-green-600 hover:bg-opacity-50'
            }`}
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            {sidebarOpen && <span>Chat History</span>}
          </Link>

          <Link
            href='/dashboard/vr-chat'
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
              isActive('/dashboard/vr-chat')
                ? 'bg-green-600 text-white'
                : 'hover:bg-green-600 hover:bg-opacity-50'
            }`}
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              />
            </svg>
            {sidebarOpen && <span>VR Chat</span>}
          </Link>

          <Link
            href='/dashboard/settings'
            className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
              isActive('/dashboard/settings')
                ? 'bg-green-600 text-white'
                : 'hover:bg-green-600 hover:bg-opacity-50'
            }`}
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
            {sidebarOpen && <span>Settings</span>}
          </Link>
        </nav>

        {/* User Profile Section */}
        <div className='p-4 border-t border-green-600'>
          {user && (
            <div className='flex items-center gap-3 mb-4'>
              {user.profilePicture ? (
                <img
                  src={user.profilePicture}
                  alt='Profile'
                  className='w-10 h-10 rounded-full object-cover'
                  onError={() => {
                    console.error('Failed to load profile picture:', user.profilePicture)
                  }}
                  key={user.profilePicture}
                />
              ) : (
                <div className='w-10 h-10 rounded-full bg-green-600 flex items-center justify-center'>
                  <span className='text-white font-semibold'>
                    {user.username?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || 'U'}
                  </span>
                </div>
              )}
              {sidebarOpen && (
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-medium truncate'>
                    {user.username || user.email || user.phone}
                  </p>
                  <p className='text-xs text-green-100 truncate'>
                    {user.email || user.phone}
                  </p>
                </div>
              )}
            </div>
          )}
          <button
            onClick={handleLogout}
            className='w-full flex items-center gap-3 p-3 rounded-lg hover:bg-green-600 transition-colors'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
              />
            </svg>
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex-1 flex flex-col h-full overflow-hidden'>
        {/* Header */}
        <header className='bg-white shadow-sm border-b border-gray-200 p-4 shrink-0'>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold text-[#2C5F5D]'>
              {pathname === '/dashboard/home' && 'Home'}
              {pathname === '/dashboard/profile' && 'My Profile'}
              {pathname === '/dashboard/chat' && 'Chat'}
              {pathname === '/dashboard/chat-history' && 'Chat History'}
              {pathname === '/dashboard/vr-chat' && 'VR Chat'}
              {pathname === '/dashboard/settings' && 'Settings'}
            </h1>
            <div className='flex items-center gap-4'>
              <span className='text-sm text-gray-600'>
                Welcome, {user?.username || user?.email || 'User'}!
              </span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className='flex-1 p-6 overflow-y-auto'>
          {children}
        </main>
      </div>
    </div>
  )
}

