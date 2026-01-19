'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import Footer from '@/components/Footer'

const PrivacyPolicyClient = () => {
  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        'We collect information that you provide directly to us, including:',
        '• Personal information such as your name, email address, and phone number when you create an account or contact us',
        '• Health and wellness information you choose to share during therapy sessions',
        '• Usage data including how you interact with our platform',
        '• Device information such as IP address, browser type, and operating system'
      ]
    },
    {
      title: '2. How We Use Your Information',
      content: [
        'We use the information we collect to:',
        '• Provide, maintain, and improve our AI therapy services',
        '• Personalize your therapy experience and deliver relevant content',
        '• Process your requests and respond to your inquiries',
        '• Send you important updates about our services',
        '• Ensure the security and integrity of our platform',
        '• Comply with legal obligations'
      ]
    },
    {
      title: '3. Data Security',
      content: [
        'We implement industry-standard security measures to protect your information:',
        '• Encryption of data in transit and at rest',
        '• Secure authentication and access controls',
        '• Regular security audits and assessments',
        '• Limited access to personal information on a need-to-know basis',
        '• However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security'
      ]
    },
    {
      title: '4. Data Sharing and Disclosure',
      content: [
        'We do not sell your personal information. We may share your information only in the following circumstances:',
        '• With your explicit consent',
        '• To comply with legal obligations or respond to legal requests',
        '• In case of emergency situations where your safety is at risk',
        '• With service providers who assist us in operating our platform (under strict confidentiality agreements)',
        '• In connection with a business transfer or merger'
      ]
    },
    {
      title: '5. Your Rights and Choices',
      content: [
        'You have the right to:',
        '• Access and receive a copy of your personal information',
        '• Correct inaccurate or incomplete information',
        '• Request deletion of your personal information',
        '• Object to or restrict certain processing of your information',
        '• Withdraw consent at any time',
        '• Export your data in a portable format',
        'To exercise these rights, please contact us at privacy@mindsai.com'
      ]
    },
    {
      title: '6. Data Retention',
      content: [
        'We retain your personal information only for as long as necessary to:',
        '• Provide our services to you',
        '• Comply with legal obligations',
        '• Resolve disputes and enforce our agreements',
        '• We will delete or anonymize your information when it is no longer needed'
      ]
    },
    {
      title: '7. Children\'s Privacy',
      content: [
        'Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information promptly.'
      ]
    },
    {
      title: '8. International Data Transfers',
      content: [
        'Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.'
      ]
    },
    {
      title: '9. Changes to This Privacy Policy',
      content: [
        'We may update this Privacy Policy from time to time. We will notify you of any material changes by:',
        '• Posting the updated policy on this page',
        '• Sending you an email notification',
        '• Displaying a prominent notice on our platform',
        'Your continued use of our services after such changes constitutes acceptance of the updated policy.'
      ]
    },
    {
      title: '10. Contact Us',
      content: [
        'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:',
        'Email: privacy@mindsai.com',
        'Address: Iskrti Psychology Solutions Pvt ltd, 101, Oxford Tower, Kodihalli, Bangalore',
        'Phone: +91 0000000000'
      ]
    }
  ]

  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gradient-to-br from-[#FFF8F8] to-white py-12 px-4'>
        <div className='container mx-auto max-w-4xl'>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-12'
          >
            <h1 className='text-5xl font-bold font-mon mb-4 text-[#2C5F5D]'>
              Privacy <span className='text-[#84B357]'>Policy</span>
            </h1>
            <p className='text-gray-600 text-lg font-mon'>
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-[#84B357]'
          >
            <p className='text-gray-700 leading-relaxed font-mon'>
              At Mind&apos;s AI, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
              AI therapy platform. By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </motion.div>

          {/* Sections */}
          <div className='space-y-6'>
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow'
              >
                <h2 className='text-2xl font-bold font-mon mb-4 text-[#2C5F5D]'>
                  {section.title}
                </h2>
                <div className='space-y-3'>
                  {section.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className='text-gray-700 leading-relaxed font-mon'
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className='mt-12 bg-[#84B357]/10 rounded-xl p-8 border-2 border-[#84B357]/20'
          >
            <p className='text-center text-gray-700 font-mon leading-relaxed'>
              <strong className='text-[#2C5F5D]'>Your privacy matters to us.</strong> We are dedicated to maintaining the highest 
              standards of data protection and will continue to update our practices to ensure your information remains secure. 
              If you have any concerns about how we handle your data, please don&apos;t hesitate to contact us.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PrivacyPolicyClient
