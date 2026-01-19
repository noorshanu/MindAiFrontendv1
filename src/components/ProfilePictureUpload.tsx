/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState, useRef, useCallback, useEffect } from 'react'
import { profileApi } from '../libs/api'

interface ProfilePictureUploadProps {
  currentPicture?: string
  onUploadSuccess?: (url: string) => void
  onUploadError?: (error: string) => void
  size?: 'small' | 'medium' | 'large'
}

const ProfilePictureUpload: React.FC<ProfilePictureUploadProps> = ({
  currentPicture,
  onUploadSuccess,
  onUploadError,
  size = 'medium',
}) => {
  const [preview, setPreview] = useState<string | null>(null) // Only for file upload previews
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Determine which image to display: 
  // - Use preview (data URL) during file upload
  // - Otherwise use currentPicture prop
  const displayImage = preview?.startsWith('data:') ? preview : (currentPicture || null)

  // Debug logging
  useEffect(() => {
    if (currentPicture) {
      console.log('ProfilePictureUpload - currentPicture prop:', currentPicture)
      console.log('ProfilePictureUpload - displayImage will be:', displayImage)
    }
  }, [currentPicture, displayImage])

  const sizeClasses = {
    small: 'w-20 h-20',
    medium: 'w-32 h-32',
    large: 'w-48 h-48',
  }

  const validateFile = (file: File): string | null => {
    // Check file type
    if (!file.type.startsWith('image/')) {
      return 'Please select an image file'
    }

    // Check file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      return 'Image size must be less than 5MB'
    }

    return null
  }

  const handleFileSelect = useCallback(async (file: File) => {
    const validationError = validateFile(file)
    if (validationError) {
      setError(validationError)
      return
    }

    setError(null)

    // Create preview
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(file)

    // Upload file
    setUploading(true)
    try {
      const response = await profileApi.uploadProfilePicture(file)
      // Backend returns: { success: true, profilePicture: string, user: {...} }
      const profilePic = (response as { success: boolean; profilePicture?: string }).profilePicture
      if (response.success && profilePic) {
        // Clear preview (data URL) and let currentPicture prop handle display
        setPreview(null)
        onUploadSuccess?.(profilePic)
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Upload failed'
      setError(errorMessage)
      onUploadError?.(errorMessage)
      // Clear preview on error (will fall back to currentPicture)
      setPreview(null)
    } finally {
      setUploading(false)
    }
  }, [onUploadSuccess, onUploadError])

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const file = e.dataTransfer.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }

  return (
    <div className="flex flex-col items-center">
      {/* Profile Picture Display */}
      <div
        className={`
          ${sizeClasses[size]}
          relative rounded-full border-4 border-[#2C5F5D] overflow-hidden
          cursor-pointer transition-all duration-200
          bg-gray-100
          group
          ${dragActive ? 'ring-4 ring-[#84B357] ring-offset-2' : ''}
          ${uploading ? 'opacity-50' : 'hover:border-[#84B357]'}
        `}
        onClick={handleClick}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {displayImage ? (
          <img
            src={displayImage}
            alt="Profile"
            className="w-full h-full object-cover bg-gray-100"
            key={displayImage} // Force reload when URL changes
            loading="eager"
            onError={(e) => {
              console.error('Image load error for URL:', displayImage)
              const target = e.target as HTMLImageElement
              console.error('Failed to load image, src was:', target.src)
            }}
            onLoad={() => {
              console.log('✅ Image loaded successfully:', displayImage)
            }}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <svg
              className="w-1/2 h-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        )}

        {/* Upload Overlay - Only shows on hover */}
        {!uploading && displayImage && (
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
        )}

        {/* Uploading Indicator */}
        {uploading && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        )}
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        className="hidden"
      />

      {/* Upload Button */}
      <button
        type="button"
        onClick={handleClick}
        disabled={uploading}
        className={`
          mt-4 px-4 py-2 text-sm font-medium rounded-lg
          transition-colors duration-200
          ${uploading
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-[#84B357] text-white hover:bg-[#709944]'
          }
        `}
      >
        {uploading ? 'Uploading...' : 'Change Picture'}
      </button>

      {/* Error Message */}
      {error && (
        <p className="mt-2 text-sm text-red-600 text-center max-w-xs">
          {error}
        </p>
      )}

      {/* Help Text */}
      <p className="mt-2 text-xs text-gray-500 text-center">
        Drag & drop or click to upload (Max 5MB)
      </p>
    </div>
  )
}

export default ProfilePictureUpload

