'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What even is Mind's AI?",
      answer: "Think of it as a safe space in your pocket. Mind's AI helps you talk things out, understand your feelings, and breathe a little easier—anytime."
    },
    {
      question: "Is this like a real therapist?",
      answer: "Not exactly. Mind's AI isn't a human therapist, but it does help you reflect, vent, and get clarity when life feels loud."
    },
    {
      question: "Can I say anything here? Like... anything?",
      answer: "Yes. No judgment. No awkward reactions. Just honest conversations."
    },
    {
      question: "Will my chats stay private?",
      answer: "100%. Your thoughts stay yours. We don't snoop, share, or sell your data. Ever."
    },
    {
      question: "Can Mind's AI diagnose me?",
      answer: "Nope. No labels here. It's about understanding yourself, not putting you in a box."
    },
    {
      question: "What if I'm actually not okay?",
      answer: "Mind's AI can support you—but if things feel heavy or unsafe, we'll always encourage you to reach out to real humans and professionals."
    },
    {
      question: "Do I need to be \"good at talking\"?",
      answer: "Absolutely not. Even \"idk how I feel\" is a valid starting point."
    },
    {
      question: "Is it available all the time?",
      answer: "Yep. 3 AM thoughts included."
    },
    {
      question: "Who is this for?",
      answer: "Overthinkers. Quiet strugglers. Burnt-out humans. Basically... you."
    },
    {
      question: "Why should I try Mind's AI?",
      answer: "Because bottling things up is exhausting—and talking shouldn't be."
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className='faq-section py-16 px-4 bg-white'
      id='faq-section'
    >
      <div className='container mx-auto max-w-5xl'>
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='faq-title text-4xl sm:text-5xl font-semibold text-center mb-14'
        >
            FA<span className='text-black bg-[#84B357] font-thin pl-3 pr-5 py-2 rounded-2xl ml-2'> Q</span>
          </motion.h2>

        {/* FAQ Items */}
        <div className='space-y-0'>
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className='faq-item border-b border-gray-200'
            >
              <button
                onClick={() => toggleFaq(index)}
                className='w-full py-6 flex items-start justify-between gap-4 text-left hover:bg-gray-50 transition-colors'
              >
                <div className='flex items-start gap-4 flex-1'>
                  <span className='text-gray-500 font-medium text-lg shrink-0'>{index + 1}.</span>
                  <div className='flex-1'>
                    <h3 className='text-lg lg:text-xl font-bold text-black mb-2 font-mon'>
                      {faq.question}
                    </h3>
                    {openIndex === index && (
                      <p className='text-gray-600 text-base leading-relaxed'>
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </div>
                <div className='shrink-0 mt-1'>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      openIndex === index ? '' : 'rotate-180'
                    }`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 15l7-7 7 7'
                    />
                  </svg>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Faq