import { Navbar } from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'
import { WebinarRegisterForm } from '@/components/WebinarRegisterForm'

const RegistrationPage = () => {
  return (
    <>
    <Navbar />
    <WebinarRegisterForm />
    <Footer />
    </>
  )
}

export default RegistrationPage
