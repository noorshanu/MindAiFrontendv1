'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import Footer from '@/components/Footer'

const TermsClient = () => {
  const sections = [
    {
      title: '1. Eligibility',
      content: [
        'You must be at least 18 years old to use Mind\'s AI.',
        'If you are under 18, you may only use the Services with explicit consent and supervision of a parent or legal guardian.',
        'By using the Services, you confirm that you are legally capable of entering into a binding agreement under applicable laws.'
      ]
    },
    {
      title: '2. Nature of the Service (Important Disclaimer)',
      content: [
        'Mind\'s AI provides AI-driven psychological counselling and mental wellness support through conversational artificial intelligence systems.',
        'The counselling provided is non-clinical, non-diagnostic, and non-prescriptive in nature, designed to support emotional well-being, self-reflection, coping skills, and guided psychological techniques.',
        'Mind\'s AI does not claim to replace human psychologists, psychiatrists, or medical professionals.',
        'The AI does not provide medical diagnosis, psychiatric evaluation, medication advice, or emergency intervention.',
        'The Services are intended to complement, not substitute, professional mental health care.',
        'Users with severe mental health conditions or emergencies must seek immediate help from qualified professionals or emergency services.'
      ]
    },
    {
      title: '3. Emergency & Crisis Situations',
      content: [
        'Mind\'s AI is not designed for emergencies.',
        'If you are experiencing thoughts of self-harm, suicide, violence, or are in immediate danger, stop using the app immediately and contact:',
        '• Local emergency services',
        '• A suicide prevention helpline',
        '• A trusted family member, friend, or mental health professional',
        'Mind\'s AI shall not be held responsible for actions taken or not taken during crisis situations.'
      ]
    },
    {
      title: '4. User Responsibilities',
      content: [
        'You agree to:',
        '• Provide accurate and truthful information during registration and usage',
        '• Use the Services only for lawful, ethical, and personal wellness purposes',
        '• Not misuse, manipulate, reverse-engineer, or attempt to exploit the AI system',
        '• Not upload or share harmful, abusive, illegal, or misleading content',
        '• Take full responsibility for how you interpret and act upon the AI-generated responses'
      ]
    },
    {
      title: '5. AI Limitations & User Acknowledgment',
      content: [
        'You understand and acknowledge that:',
        '• AI responses are generated algorithmically and may not always be accurate, complete, or appropriate',
        '• The AI may produce general guidance based on patterns and not personalized clinical judgment',
        '• You use all outputs at your own discretion and risk',
        '• Mind\'s AI makes no guarantees regarding outcomes, emotional improvement, or mental health results'
      ]
    },
    {
      title: '6. Privacy & Data Usage',
      content: [
        'Your privacy is important to us.',
        '• Personal data, chat data, and usage data may be collected to improve service quality, safety, and user experience',
        '• Sensitive mental health-related data will be handled with strict confidentiality and security measures',
        '• Data may be anonymized and used for research, analytics, and AI training',
        'Please refer to the Privacy Policy for detailed information on data collection, storage, and usage.'
      ]
    },
    {
      title: '7. Account Security',
      content: [
        'You are responsible for maintaining the confidentiality of your account credentials.',
        'Any activity conducted through your account is deemed to be your responsibility.',
        'Mind\'s AI is not liable for unauthorized access resulting from your negligence.'
      ]
    },
    {
      title: '8. Subscription, Payments & Refunds (If Applicable)',
      content: [
        'Certain features may require payment or subscription.',
        '• All payments are processed through authorized third-party payment gateways',
        '• Fees are non-refundable unless explicitly stated otherwise',
        '• Mind\'s AI reserves the right to modify pricing, features, or plans at any time'
      ]
    },
    {
      title: '9. Intellectual Property',
      content: [
        'All content, software, algorithms, designs, trademarks, logos, and AI models are the exclusive intellectual property of Mind\'s AI.',
        'You are granted a limited, non-exclusive, non-transferable license to use the Services for personal use only.',
        'Unauthorized copying, distribution, or commercial exploitation is strictly prohibited.'
      ]
    },
    {
      title: '10. Prohibited Uses',
      content: [
        'You must not:',
        '• Use the platform for illegal activities',
        '• Attempt to diagnose, treat, or provide medical advice to others using AI outputs',
        '• Harass, threaten, or harm others',
        '• Use the Services to train competing AI systems',
        'Violation may result in immediate suspension or termination.'
      ]
    },
    {
      title: '11. Suspension & Termination',
      content: [
        'Mind\'s AI reserves the right to:',
        '• Suspend or terminate accounts without prior notice if Terms are violated',
        '• Restrict access for security, legal, or operational reasons',
        'Termination does not waive any legal rights or obligations accrued.'
      ]
    },
    {
      title: '12. Limitation of Liability',
      content: [
        'To the maximum extent permitted by law:',
        '• Mind\'s AI shall not be liable for any direct, indirect, incidental, consequential, or emotional damages',
        '• This includes mental distress, loss of data, financial loss, or personal decisions taken based on AI responses',
        '• Your use of the Services is entirely at your own risk'
      ]
    },
    {
      title: '13. Indemnification',
      content: [
        'You agree to indemnify and hold harmless Mind\'s AI, its founders, directors, employees, and partners from any claims, damages, or legal actions arising out of:',
        '• Your misuse of the Services',
        '• Violation of these Terms',
        '• Violation of any applicable laws'
      ]
    },
    {
      title: '14. Modifications to Terms',
      content: [
        'Mind\'s AI may update these Terms at any time.',
        'Continued use of the Services after changes implies acceptance of the revised Terms.'
      ]
    },
    {
      title: '15. Governing Law & Jurisdiction',
      content: [
        'These Terms shall be governed by the laws of India.',
        'Any disputes shall be subject to the exclusive jurisdiction of courts in India.'
      ]
    },
    {
      title: '16. Contact Information',
      content: [
        'For questions, concerns, or legal notices, contact:',
        'Mind\'s AI / Iskrti Psychology Solutions Pvt. Ltd.',
        'Email: iskriti@gmail.com',
        'Address: Iskrti Psychology Solutions Pvt ltd, 101, Oxford Tower, Kodihalli, Bangalore',
        'Phone: +91 0000000000'
      ]
    },
    {
      title: '17. Acceptance',
      content: [
        'By clicking "I Agree", registering, or using Mind\'s AI, you confirm that:',
        '• You have read and understood these Terms',
        '• You voluntarily agree to be legally bound by them',
        'If you do not agree to these Terms, please discontinue use of Mind\'s AI immediately.'
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
              Terms and <span className='text-[#84B357]'>Conditions</span>
            </h1>
            <p className='text-gray-600 text-lg font-mon mb-2'>
              Mind&apos;s AI – Terms and Conditions
            </p>
            <p className='text-gray-500 text-sm font-mon'>
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
            <p className='text-gray-700 leading-relaxed font-mon mb-4'>
              These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the Mind&apos;s AI platform,
              including its mobile applications, website, AI-powered mental wellness tools, chat-based support,
              mood tracking, guided self-help programs, and any related services (collectively, the &quot;Services&quot;).
            </p>
            <p className='text-gray-700 leading-relaxed font-mon font-semibold'>
              By accessing, registering for, or using Mind&apos;s AI, you agree to be legally bound by these Terms. If you
              do not agree, please do not use the Services.
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
                transition={{ duration: 0.6, delay: index * 0.05 }}
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

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='mt-12 bg-red-50 rounded-xl p-8 border-2 border-red-200'
          >
            <h3 className='text-xl font-bold font-mon mb-4 text-red-700'>
              ⚠️ Important Notice
            </h3>
            <p className='text-gray-700 font-mon leading-relaxed'>
              <strong>Mind&apos;s AI is not a substitute for professional medical or mental health care.</strong> If you are 
              experiencing a mental health emergency, please contact your local emergency services, a crisis hotline, or 
              seek immediate professional help. The AI-powered services are designed to support wellness and self-reflection, 
              not to diagnose or treat mental health conditions.
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TermsClient
