import React from 'react'
import { motion } from 'framer-motion'
import PTNCard from './PTNCard'
import KMUTNBCard from './KMUTNBCard'

type Props = {}

function Education({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1.5
    }}
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[10px] text-white text-2xl'>
            Education
        </h3>

        <div className='w-full flex space-x-5 overflow-x-auto p-10 snap-x snap-mandatory'>
            <PTNCard />
            <KMUTNBCard />
        </div>
    </motion.div>
  )
}

export default Education