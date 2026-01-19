'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const HowDoesWork = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className='howdoeswork-section py-16 px-4 bg-white'
    >
      <div className='container mx-auto max-w-7xl'>
        {/* Title */}
        <div className='mb-12'>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='howdoeswork-title text-2xl sm:text-5xl font-semibold text-center sm:mb-40 mb-10'
          >
            How does MIND&apos;S AI <span className='text-black bg-[#84B357] font-thin pl-3 pr-5 py-2 rounded-2xl ml-2'> WORK?</span>
          </motion.h2>
        </div>

        {/* Features Grid */}
        <div className='flex flex-col sm:flex-row items-center justify-between gap-16 sm:gap-0 '>
          {/* AI Powered Box */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className='howdoeswork-card relative w-[350px]'
          >
            {/* Light Green Blob Shapes - positioned to partially overlap heading */}

            {/* Content */}
            <div className='relative z-10 pt-4 text-center'>
              <Image src="/left.png" alt="AI Powered" width={200} height={250} className='w-[280px] h-auto object-contain absolute top-0 left-0 right-0 mx-auto'  />
              <h3 className='text-2xl sm:text-5xl font-normal text-black  mb-6 relative py-13'>
                AI Powered
              </h3>

              <p className='text-black text-xl font-light leading-relaxed pt-3'>
              Auto-detect your mental state <br />   Get immediate guidance
              </p>
      
            </div>
          </motion.div>

          {/* Effortless Box */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className='howdoeswork-card relative w-[350px] text-center'
          >
            {/* Light Green Blob Shapes - positioned to partially overlap heading */}
            <Image src="/between.png" alt="Effortless" width={200} height={250} className='w-[280px] h-auto object-contain absolute top-[-30px] -left-6 right-0 mx-auto rotate-[62deg]'  />

            {/* Content */}
            <div className='relative z-10 pt-4'>
              <h3 className='text-2xl sm:text-5xl font-normal text-black  mb-6 relative py-13'>
                Effortless
              </h3>

              <p className='text-black text-xl font-light leading-relaxed pt-3'>
          3-second check-in <br />   No typing <br /> Intuitive UX
              </p>
             
            </div>
          </motion.div>

          {/* Radically private Box */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
            className='howdoeswork-card relative w-[450px] text-center'
          >

            {/* Content */}
            <div className='relative z-10 pt-4'>
              <Image src="/right.png" alt="Radically private" width={200} height={250} className='w-[280px] h-auto object-contain absolute top-[-30px] left-0  mx-auto sm:rotate-[12deg] rotate-0'  />
              <h3 className='text-2xl sm:text-5xl font-normal text-black  mb-6 relative py-13'>
                Radically private
              </h3>
              <p className='text-black text-xl font-light leading-relaxed pt-3'>
              No registration <br />   No personal data <br /> No ads, only AI therapy
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default HowDoesWork