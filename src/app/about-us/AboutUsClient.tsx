'use client'

import React from 'react'
import { Navbar } from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutIntro from '@/components/Aboutpage/AboutIntro'
import VisionMission from '@/components/Aboutpage/VisionMission'
import CEOSection from '@/components/Aboutpage/CEOSection'
import FounderSection from '@/components/Aboutpage/FounderSection'
import TeamSection from '@/components/Aboutpage/TeamSection'
// import GallerySection from '@/components/Aboutpage/GallerySection'

const AboutUsClient = () => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gradient-to-br from-[#FFF8F8] to-white'>
        <AboutIntro />
        <VisionMission />
        <CEOSection />
        <FounderSection />
        <TeamSection />
        {/* <GallerySection /> */}
      </div>
      <Footer />
    </>
  )
}

export default AboutUsClient
