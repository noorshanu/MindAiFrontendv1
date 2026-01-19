'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const AboutUs = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className='aboutus-section py-16 px-4 sm:mt-16 mt-0'
        >
            <div className='container mx-auto max-w-7xl'>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='aboutus-title text-4xl sm:text-5xl font-semibold text-center mb-10'
                >
                    About<span className='text-black bg-[#84B357] font-thin pl-3 pr-5 py-2 rounded-2xl ml-2'> Us</span>
                </motion.h2>


                <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className='aboutus-image w-full sm:w-1/2'
                    >
                        <Image src="/mia.png" alt="About Us" width={500} height={500} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className='aboutus-text w-full sm:w-1/2'
                    >
                        <h3 className='text-5xl font-semibold mb-10'>
                            Mind&apos;s AI
                        </h3>
                        <p className='text-gray-700 text-xl font-thin leading-7 mb-8'>
                            Some days, your mind just needs someone who listens. <br />
                            Not to judge. Not to rush. Just to understand. <br />

                            Mind’s AI was created for those moments.
                            A quiet space where <br /> thoughts feel lighter, emotions feel safe,
                            and healing begins with a simple conversation.
                            We help you slow down, make sense of what you feel,
                            and gently move forward one thought, one breath, one day at a time.

                            Because your mind deserves care, not pressure.
                        </p>
                        <div>
                            <Link href="/about-us"
                                className='w-full bg-[#84B357] text-white py-2 px-4 rounded-2xl font-mon font-thin text-center hover:bg-[#709944] transition-colors text-xl leading-none '
                                style={{
                                    boxShadow: '4px 4px 13px 0px #1A4041',

                                }}>
                                Learn More
                            </Link>
                        </div>
                    </motion.div>



                </div>
            </div>
        </motion.div>
    )
}

export default AboutUs