'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { profileApi } from '@/libs/api'
import ProfilePictureUpload from '@/components/ProfilePictureUpload'

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

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [showPasswordForm, setShowPasswordForm] = useState(false)
  const [showAddContact, setShowAddContact] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    gender: '' as 'male' | 'female' | 'other' | '',
  })
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })
  const [contactData, setContactData] = useState({
    contact: '',
    type: 'email' as 'email' | 'phone',
    otp: '',
  })
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [otpSent, setOtpSent] = useState(false)

  const loadUserProfile = useCallback(async () => {
    try {
      setLoading(true)
      const response = await profileApi.getProfile()
      if (response.success && response.user) {
        const userData = response.user as User
        console.log('Profile loaded in profile page:', userData)
        console.log('Profile picture URL:', userData.profilePicture)
        setUser(userData)
        setFormData({
          username: userData.username || '',
          gender: (userData.gender as 'male' | 'female' | 'other') || '',
        })
      }
    } catch (error) {
      console.error('Failed to load profile:', error)
      setError('Failed to load profile')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadUserProfile()
  }, [loadUserProfile])

  const handleUpdateProfile = async () => {
    try {
      setError(null)
      setSuccess(null)

      const updateData: { username?: string; gender?: string } = {}
      if (formData.username && formData.username !== user?.username) {
        updateData.username = formData.username
      }
      if (formData.gender && formData.gender !== user?.gender) {
        updateData.gender = formData.gender
      }

      if (Object.keys(updateData).length === 0) {
        setError('No changes to save')
        return
      }

      const response = await profileApi.updateProfile(updateData)
      if (response.success) {
        setSuccess('Profile updated successfully!')
        setEditing(false)
        await loadUserProfile()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update profile')
    }
  }

  const handleCancel = () => {
    setFormData({
      username: user?.username || '',
      gender: (user?.gender as 'male' | 'female' | 'other') || '',
    })
    setEditing(false)
    setError(null)
  }

  const handleChangePassword = async () => {
    try {
      setError(null)
      setSuccess(null)

      if (passwordData.newPassword !== passwordData.confirmPassword) {
        setError('New passwords do not match')
        return
      }

      if (passwordData.newPassword.length < 6) {
        setError('Password must be at least 6 characters')
        return
      }

      const response = await profileApi.changePassword(
        passwordData.currentPassword,
        passwordData.newPassword
      )

      if (response.success) {
        setSuccess('Password changed successfully!')
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        })
        setShowPasswordForm(false)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to change password')
    }
  }

  const handleSendOTP = async () => {
    try {
      setError(null)
      setSuccess(null)

      if (!contactData.contact) {
        setError('Please enter contact information')
        return
      }

      const response = await profileApi.addContact(contactData.contact, contactData.type)
      if (response.success) {
        setSuccess(`OTP sent to your ${contactData.type}`)
        setOtpSent(true)
        // In development, OTP is hardcoded as 123456
        const responseData = response as { success: boolean; otp?: string }
        if (responseData.otp) {
          setContactData({ ...contactData, otp: responseData.otp })
        } else {
          // Default OTP for development
          setContactData({ ...contactData, otp: '123456' })
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send OTP')
    }
  }

  const handleVerifyContact = async () => {
    try {
      setError(null)
      setSuccess(null)

      if (!contactData.otp) {
        setError('Please enter OTP')
        return
      }

      const response = await profileApi.verifyContact(
        contactData.contact,
        contactData.otp,
        contactData.type
      )

      if (response.success) {
        setSuccess(`${contactData.type} verified and added successfully!`)
        setContactData({ contact: '', type: 'email', otp: '' })
        setOtpSent(false)
        setShowAddContact(false)
        await loadUserProfile()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to verify contact')
    }
  }

  if (loading) {
    return (
      <div className='flex items-center justify-center py-12'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#84B357]'></div>
      </div>
    )
  }

  return (
    <div className='space-y-6 max-w-4xl mx-auto'>
      {/* Profile Picture Section */}
      <div className='bg-white rounded-lg shadow-md p-6'>
        <h3 className='text-lg font-semibold text-[#2C5F5D] mb-6'>Profile Picture</h3>
        <div className='flex justify-center'>
          <ProfilePictureUpload
            currentPicture={user?.profilePicture}
            onUploadSuccess={async (url) => {
              setUser({ ...user, profilePicture: url })
              await loadUserProfile()
            }}
            size="large"
          />
        </div>
      </div>

      {/* Profile Information */}
      <div className='bg-white rounded-lg shadow-md p-6'>
        <div className='flex items-center justify-between mb-6'>
          <h3 className='text-lg font-semibold text-[#2C5F5D]'>Profile Information</h3>
          {!editing && (
            <button
              onClick={() => setEditing(true)}
              className='px-4 py-2 bg-[#84B357] text-white rounded-lg hover:bg-[#709944] transition-colors'
            >
              Edit Profile
            </button>
          )}
        </div>

        {error && (
          <div className='mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg'>
            {error}
          </div>
        )}

        {success && (
          <div className='mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg'>
            {success}
          </div>
        )}

        <div className='space-y-6'>
          <div>
            <label className='text-sm font-medium text-gray-500 mb-2 block'>Username</label>
            {editing ? (
              <input
                type='text'
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className='w-full px-4 py-2 border-2 border-[#2C5F5D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-[#84B357]'
                placeholder='Enter username'
                maxLength={30}
              />
            ) : (
              <p className='text-lg font-semibold text-gray-800'>{user?.username || 'Not set'}</p>
            )}
          </div>

          <div>
            <label className='text-sm font-medium text-gray-500 mb-2 block'>Gender</label>
            {editing ? (
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value as 'male' | 'female' | 'other' })}
                className='w-full px-4 py-2 border-2 border-[#2C5F5D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-[#84B357]'
              >
                <option value=''>Select gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </select>
            ) : (
              <p className='text-lg font-semibold text-gray-800 capitalize'>{user?.gender || 'Not set'}</p>
            )}
          </div>

          <div>
            <label className='text-sm font-medium text-gray-500 mb-2 block'>Email</label>
            <p className='text-lg font-semibold text-gray-800'>{user?.email || 'Not set'}</p>
            {user?.isEmailVerified ? (
              <span className='text-xs text-green-600 mt-1 inline-block'>✓ Verified</span>
            ) : (
              <span className='text-xs text-gray-500 mt-1 inline-block'>Not verified</span>
            )}
          </div>

          <div>
            <label className='text-sm font-medium text-gray-500 mb-2 block'>Phone</label>
            <p className='text-lg font-semibold text-gray-800'>{user?.phone || 'Not set'}</p>
            {user?.isPhoneVerified ? (
              <span className='text-xs text-green-600 mt-1 inline-block'>✓ Verified</span>
            ) : (
              <span className='text-xs text-gray-500 mt-1 inline-block'>Not verified</span>
            )}
          </div>

          {editing && (
            <div className='flex gap-4 pt-4'>
              <button
                onClick={handleUpdateProfile}
                className='px-6 py-2 bg-[#84B357] text-white rounded-lg hover:bg-[#709944] transition-colors'
              >
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className='px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors'
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Change Password Section */}
      <div className='bg-white rounded-lg shadow-md p-6'>
        <div className='flex items-center justify-between mb-6'>
          <h3 className='text-lg font-semibold text-[#2C5F5D]'>Change Password</h3>
          <button
            onClick={() => {
              setShowPasswordForm(!showPasswordForm)
              setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' })
              setError(null)
            }}
            className='px-4 py-2 bg-[#84B357] text-white rounded-lg hover:bg-[#709944] transition-colors'
          >
            {showPasswordForm ? 'Cancel' : 'Change Password'}
          </button>
        </div>

        {showPasswordForm && (
          <div className='space-y-4'>
            <div>
              <label className='text-sm font-medium text-gray-500 mb-2 block'>Current Password</label>
              <input
                type='password'
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                className='w-full px-4 py-2 border-2 border-[#2C5F5D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-[#84B357]'
                placeholder='Enter current password'
              />
            </div>
            <div>
              <label className='text-sm font-medium text-gray-500 mb-2 block'>New Password</label>
              <input
                type='password'
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                className='w-full px-4 py-2 border-2 border-[#2C5F5D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-[#84B357]'
                placeholder='Enter new password'
              />
            </div>
            <div>
              <label className='text-sm font-medium text-gray-500 mb-2 block'>Confirm New Password</label>
              <input
                type='password'
                value={passwordData.confirmPassword}
                onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                className='w-full px-4 py-2 border-2 border-[#2C5F5D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-[#84B357]'
                placeholder='Confirm new password'
              />
            </div>
            <button
              onClick={handleChangePassword}
              className='px-6 py-2 bg-[#84B357] text-white rounded-lg hover:bg-[#709944] transition-colors'
            >
              Update Password
            </button>
          </div>
        )}
      </div>

      {/* Add Contact Section */}
      <div className='bg-white rounded-lg shadow-md p-6'>
        <div className='flex items-center justify-between mb-6'>
          <h3 className='text-lg font-semibold text-[#2C5F5D]'>Add Contact</h3>
          <button
            onClick={() => {
              setShowAddContact(!showAddContact)
              setContactData({ contact: '', type: 'email', otp: '' })
              setOtpSent(false)
              setError(null)
            }}
            className='px-4 py-2 bg-[#84B357] text-white rounded-lg hover:bg-[#709944] transition-colors'
          >
            {showAddContact ? 'Cancel' : 'Add Contact'}
          </button>
        </div>

        {showAddContact && (
          <div className='space-y-4'>
            <div>
              <label className='text-sm font-medium text-gray-500 mb-2 block'>Contact Type</label>
              <select
                value={contactData.type}
                onChange={(e) => setContactData({ ...contactData, type: e.target.value as 'email' | 'phone' })}
                className='w-full px-4 py-2 border-2 border-[#2C5F5D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-[#84B357]'
              >
                <option value='email'>Email</option>
                <option value='phone'>Phone</option>
              </select>
            </div>
            <div>
              <label className='text-sm font-medium text-gray-500 mb-2 block'>
                {contactData.type === 'email' ? 'Email Address' : 'Phone Number'}
              </label>
              <input
                type={contactData.type === 'email' ? 'email' : 'tel'}
                value={contactData.contact}
                onChange={(e) => setContactData({ ...contactData, contact: e.target.value })}
                className='w-full px-4 py-2 border-2 border-[#2C5F5D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-[#84B357]'
                placeholder={contactData.type === 'email' ? 'Enter email address' : 'Enter phone number'}
                disabled={otpSent}
              />
            </div>
            {!otpSent ? (
              <button
                onClick={handleSendOTP}
                className='px-6 py-2 bg-[#84B357] text-white rounded-lg hover:bg-[#709944] transition-colors'
              >
                Send OTP
              </button>
            ) : (
              <>
                <div>
                  <label className='text-sm font-medium text-gray-500 mb-2 block'>Enter OTP</label>
                  <input
                    type='text'
                    value={contactData.otp}
                    onChange={(e) => setContactData({ ...contactData, otp: e.target.value })}
                    className='w-full px-4 py-2 border-2 border-[#2C5F5D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84B357] focus:border-[#84B357]'
                    placeholder='Enter 6-digit OTP'
                    maxLength={6}
                  />
                </div>
                <button
                  onClick={handleVerifyContact}
                  className='px-6 py-2 bg-[#84B357] text-white rounded-lg hover:bg-[#709944] transition-colors'
                >
                  Verify & Add Contact
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

